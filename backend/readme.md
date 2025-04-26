# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user in the system. It validates the input data and creates a new user record in the database.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, required): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example JSON:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response
#### Success (201 Created)
- **Description**: User successfully registered.
- **Example**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "unique_user_id",
      "email": "johndoe@example.com"
    }
  }
  ```

#### Error (400 Bad Request)
- **Description**: Validation error or missing required fields.
- **Example**:
  ```json
  {
    "error": "First name must be at least 3 characters long"
  }
  ```

#### Error (500 Internal Server Error)
- **Description**: Server error while processing the request.
- **Example**:
  ```json
  {
    "error": "An unexpected error occurred"
  }
  ```

---

## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate a user and provide a JWT token for subsequent requests.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example JSON:
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response
#### Success (200 OK)
- **Description**: User successfully authenticated.
- **Example**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "id": "unique_user_id",
      "email": "johndoe@example.com"
    },
    "message": "Logged in successfully"
  }
  ```

#### Error (400 Bad Request)
- **Description**: Validation error or missing required fields.
- **Example**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Invalid email or password.
- **Example**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Error (500 Internal Server Error)
- **Description**: Server error while processing the request.
- **Example**:
  ```json
  {
    "error": "An unexpected error occurred"
  }
  ```

---

## Endpoint: `/users/profile`

### Description
This endpoint is used to fetch the profile of the authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Response
#### Success (200 OK)
- **Description**: User profile fetched successfully.
- **Example**:
  ```json
  {
    "user": {
      "id": "unique_user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    },
    "message": "User profile fetched successfully"
  }
  ```

#### Error (401 Unauthorized)
- **Description**: User is not authenticated or token is invalid/expired.
- **Example**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the authenticated user by invalidating their token.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Response
#### Success (200 OK)
- **Description**: User logged out successfully.
- **Example**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error (401 Unauthorized)
- **Description**: User is not authenticated or token is invalid/expired.
- **Example**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```
