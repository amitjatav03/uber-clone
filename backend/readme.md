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

---

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain in the system. It validates the input data and creates a new captain record in the database.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The license plate of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number, required): The capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

Example JSON:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response
#### Success (201 Created)
- **Description**: Captain successfully registered.
- **Example**:
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "id": "unique_captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "janedoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Error (400 Bad Request)
- **Description**: Validation error or missing required fields.
- **Example**:
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
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

## Endpoint: `/captains/login`

### Description
This endpoint is used to authenticate a captain and provide a JWT token for subsequent requests.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

Example JSON:
```json
{
  "email": "janedoe@example.com",
  "password": "securepassword"
}
```

### Response
#### Success (200 OK)
- **Description**: Captain successfully authenticated.
- **Example**:
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "id": "unique_captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "janedoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Error (400 Bad Request)
- **Description**: Validation error or missing required fields.
- **Example**:
  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email address",
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

## Endpoint: `/captains/profile`

### Description
This endpoint is used to fetch the profile of the authenticated captain.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Response
#### Success (200 OK)
- **Description**: Captain profile fetched successfully.
- **Example**:
  ```json
  {
    "captain": {
      "id": "unique_captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "janedoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Captain is not authenticated or token is invalid/expired.
- **Example**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Endpoint: `/captains/logout`

### Description
This endpoint is used to log out the authenticated captain by invalidating their token.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Response
#### Success (200 OK)
- **Description**: Captain logged out successfully.
- **Example**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Captain is not authenticated or token is invalid/expired.
- **Example**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```
