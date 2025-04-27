# API Documentation

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
