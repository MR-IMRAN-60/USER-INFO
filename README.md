# User Management API

This is a simple User Management API built with Express.js. The API allows you to create, retrieve, and manage user data stored in a JSON file (`users.json`).

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/MR-IMRAN-60/USER-INFO.git
   cd USER-INFO

2. Install dependencies:
```bash
   npm install
```

3. Ensure you have a users.json file in the root directory. If it doesn't exist, create it with an empty array:
   ```json
   []
   ```
## Running the API
To start the API server, run:
```bash
node index.js
```

The API will be available at http://localhost:3000.

## API Endpoints
## 1. Get All Users
```bash 
 Endpoint: GET /users
```
## Response:
## Body: 

```json
[
  {
    "id": 1,
    "name": "Imran Ahmed",
    "address": "Dhaka",
    "mobile": "017xxxxxxxx",
    "url": "https://i.imgur.com/k47Q276.jpeg",
    "fburl": "www.facebook.com/Imran.Ahmed099"
  },

]
```
## 2. Get User by ID
## Endpoint: 
```bash
GET /users/:id
```
## Parameters:

## id: The ID of the user you want to retrieve.
## Response:

## Status: 200 OK

## Body:

```json
{
  "id": 1,
  "name": "Imran Ahmed",
  "address": "Dhaka",
  "mobile": "017xxxxxxxx",
  "url": "https://i.imgur.com/k47Q276.jpeg",
  "fburl": "www.facebook.com/Imran.Ahmed099"
}
```
## Status: 404 Not Found (if user does not exist)

## Body:
  ```json
{
  "error": "User not found"
}
```

## 3. Create a New User

## Add User (GET)
```bash
GET /adduser?id={id}&name={name}&address={address}&mobile={mobile}&url={url}&fburl={fburl}
```
Adds a new user using query parameters.

## Required Fields:

## name
## address
## mobile
## Example:

```bash
GET /adduser?id=4&name=Imran Ahmed&address=Faridpur,Dhaka&mobile=017&url=ok&fburl=www.Facebook.com/100075122837809
```
Add User (POST)

## Endpoint: 
```bash
POST /users
```
## Request Body:

```json
{
  "name": "John Doe",
  "address": "123 Street, City",
  "mobile": "1234567890",
  "url": "https://example.com/image.jpg",
  "fburl": "https://facebook.com/johndoe"
}
```
## Response:

## Status: 201 Created
## Body:
```json
{
  "id": 2,
  "name": "John Doe",
  "address": "123 Street, City",
  "mobile": "1234567890",
  "url": "https://example.com/image.jpg",
  "fburl": "https://facebook.com/johndoe"
}
```
## Error Handling
In case of an error, the API will return a status code along with an error message. For example, if a user is not found, the API will respond with:
```json
{
  "error": "User not found"
}
```
## License
This project is licensed under the MIT License - see the LICENSE file for details.
```bash
### Usage
- Replace `MR-IMRAN-60` in the clone command with your actual GitHub username or the repository URL.
- This `README.md` provides a clear and structured way for users to understand how to set up and use your API, including examples of requests and responses.
```
