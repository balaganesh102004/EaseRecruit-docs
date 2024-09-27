# API Documentation

This documentation provides a detailed overview of the API endpoints used in the application. It includes information about the available routes, request methods, parameters, request bodies, and responses.

## Base URL
The base URL for the API is: `<base_url>`

## Authentication

### Login
- **Endpoint**: `/auth/login`
- **Method**: POST
- **Request Body**:
```
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
```
- **Response**:
    - **200 OK**: Returns a JWT token and user details.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Login successful",
      "data": {
        "user": {
          "id": "user_id",
          "role": "USER_ROLE",
          "token": "jwt_token"
        }
      }
    }
```
    - **400 Bad Request**: Returns an error message if credentials are invalid.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Invalid credentials"
    }
```

### Register
- **Endpoint**: `/auth/register`
- **Method**: POST
- **Request Body**:
```
  {
    "email": "user@example.com",
    "password": "yourpassword",
    "role": "USER_ROLE"
  }
```
- **Response**:
    - **201 Created**: Returns a success message and user details.
```
    {
      "statusCode": 201,
      "success": true,
      "message": "User registered successfully",
      "data": {
        "user": {
          "id": "user_id",
          "role": "USER_ROLE"
        }
      }
    }
```
    - **400 Bad Request**: Returns an error message if user already exists or input is invalid.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "User account already exists"
    }
```

## Company Module

### Get All Companies
- **Endpoint**: `/company`
- **Method**: GET
- **Response**:
    - **200 OK**: Returns a list of companies.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "All Companies data retrieved successfully",
      "data": [
        {
          "id": "company_id",
          "name": "Company Name",
          "location": "Location",
          "industry": "Industry"
        }
      ]
    }
```

### Get Company Details
- **Endpoint**: `/company/:id`
- **Method**: GET
- **Parameters**:
    - `id`: The ID of the company to retrieve.
- **Response**:
    - **200 OK**: Returns the details of the specified company.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Company data retrieved successfully",
      "data": {
        "id": "company_id",
        "name": "Company Name",
        "location": "Location",
        "industry": "Industry",
        "email": "company@example.com"
      }
    }
```
    - **400 Bad Request**: Returns an error message if the ID is invalid.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Company account doesn't exist"
    }
```

### Edit Company Profile
- **Endpoint**: `/company/edit-profile`
- **Method**: PATCH
- **Request Body**:
```
  {
    "name": "Updated Company Name",
    "location": "Updated Location",
    "industry": "Updated Industry"
  }
```
- **Response**:
    - **200 OK**: Returns a success message.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Company profile updated successfully",
      "data": {
        "id": "company_id",
        "name": "Updated Company Name",
        "location": "Updated Location",
        "industry": "Updated Industry"
      }
    }
```
    - **400 Bad Request**: Returns an error message if the input is invalid.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Company account is not exist!"
    }
```

### Get My Jobs
- **Endpoint**: `/company/my-jobs`
- **Method**: GET
- **Response**:
    - **200 OK**: Returns a list of jobs posted by the company.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Jobs retrieved successfully",
      "data": [
        {
          "id": "job_id",
          "title": "Job Title",
          "applications": ["application_id_1", "application_id_2"]
        }
      ]
    }
```

### Get Applied Candidates
- **Endpoint**: `/company/applied-candidates`
- **Method**: GET
- **Response**:
    - **200 OK**: Returns a list of candidates who applied for jobs at the company.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Applied candidates data retrieved successfully",
      "data": [
        {
          "job": {
            "id": "job_id",
            "title": "Job Title"
          },
          "candidate": {
            "id": "candidate_id",
            "name": "Candidate Name"
          }
        }
      ]
    }
```

## Candidate Module

### Get Candidate Details
- **Endpoint**: `/candidate/:id`
- **Method**: GET
- **Parameters**:
    - `id`: The ID of the candidate to retrieve.
- **Response**:
    - **200 OK**: Returns the details of the specified candidate.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Candidate data retrieved successfully",
      "data": {
        "id": "candidate_id",
        "name": "Candidate Name",
        "location": "Location",
        "email": "candidate@example.com"
      }
    }
```
    - **400 Bad Request**: Returns an error message if the ID is invalid.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Candidate account doesn't exist"
    }
```

### Edit Candidate Profile
- **Endpoint**: `/candidate/edit-profile`
- **Method**: PATCH
- **Request Body**:
```
  {
    "name": "Updated Candidate Name",
    "location": "Updated Location"
  }
```
- **Response**:
    - **200 OK**: Returns a success message.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Candidate profile updated successfully",
      "data": {
        "id": "candidate_id",
        "name": "Updated Candidate Name",
        "location": "Updated Location"
      }
    }
```
    - **400 Bad Request**: Returns an error message if the input is invalid.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Candidate account is not exist!"
    }
```

### Upload Resume
- **Endpoint**: `/candidate/upload-resume`
- **Method**: POST
- **Request Body** (Multipart form data):
    - `file`: The resume file to upload.
- **Response**:
    - **200 OK**: Returns a success message.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Resume uploaded successfully",
      "data": {
        "fileName": "resume.pdf",
        "fileURL": "https://cloudinary.com/resume.pdf"
      }
    }
```
    - **400 Bad Request**: Returns an error message if the upload fails.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Must be uploaded a resume"
    }
```

## Job Module

### Apply for Job
- **Endpoint**: `/application/apply`
- **Method**: POST
- **Request Body**:
```
  {
    "job": "job_id",
    "coverLetter": "Your cover letter here"
  }
```
- **Response**:
    - **201 Created**: Returns a success message.
```
    {
      "statusCode": 201,
      "success": true,
      "message": "Application submitted successfully",
      "data": {
        "id": "application_id",
        "job": "job_id",
        "candidate": "candidate_id"
      }
    }
```
    - **400 Bad Request**: Returns an error message if the application fails.
```
    {
      "statusCode": 400,
      "success": false,
      "message": "Job offer is closed"
    }
```

## Dashboard Module

### Overview
- **Endpoint**: `/dashboard/overview`
- **Method**: GET
- **Response**:
    - **200 OK**: Returns an overview of the user's dashboard.
```
    {
      "statusCode": 200,
      "success": true,
      "message": "Dashboard overview retrieved successfully",
      "data": {
        "jobApplications": {
          "type": "job_applications",
          "quantity": 5
        },
        "profileViews": {
          "type": "profile_views",
          "quantity": 10
        },
        "unreadMessages": {
          "type": "unread_messages",
          "quantity": 0
        },
        "notifications": {
          "type": "notifications",
          "quantity": 2
        }
      }
    }
```

## Error Handling
All API responses include a standardized error format.
```
{
  "statusCode": 400,
  "success": false,
  "message": "Error message here"
}
```

## Conclusion
This API documentation provides a comprehensive overview of the endpoints available in the application. Each endpoint includes details about the request method, parameters, request body, and expected responses. This documentation serves as a guide for developers to understand and interact with the API effectively.
