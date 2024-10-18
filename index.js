const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const readUsersFromFile = () => {
  const data = fs.readFileSync('users.json');
  return JSON.parse(data);
};

const writeUsersToFile = (users) => {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

app.get('/users', (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const users = readUsersFromFile();
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


app.get('/adduser', (req, res) => {
  const users = readUsersFromFile();
  const { id, name, address, mobile, url, fburl } = req.query;

  if (!name || !address || !mobile) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newUser = {
    id: parseInt(id, 10) || users.length + 1,
    name,
    address,
    mobile,
    url,
    fburl,
  };

  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json(newUser);
});

app.post('/users', (req, res) => {
  const users = readUsersFromFile();
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    url: req.body.url,
    fburl: req.body.fburl
  };

  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
