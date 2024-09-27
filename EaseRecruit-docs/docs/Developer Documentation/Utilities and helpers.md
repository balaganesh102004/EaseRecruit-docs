# Utilities and Helpers Documentation

This documentation provides an overview of the utilities and helper functions used in the application. These utilities are designed to simplify common tasks, improve code reusability, and enhance the overall maintainability of the codebase.

## Table of Contents
1. [Error Handling Utilities](#error-handling-utilities)
   - [ApiError Class](#apierror-class)
   - [Response Formatter](#response-formatter)
2. [File Upload Utilities](#file-upload-utilities)
   - [FileUploader Class](#fileuploader-class)
3. [Pagination Utilities](#pagination-utilities)
   - [Pagination Helper](#pagination-helper)
4. [Validation Utilities](#validation-utilities)
   - [Validation Middleware](#validation-middleware)
5. [Miscellaneous Utilities](#miscellaneous-utilities)
   - [Utility Functions](#utility-functions)

## Error Handling Utilities

### ApiError Class
The `ApiError` class is a custom error handling utility that standardizes error responses throughout the application.

```
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
```

**Usage**:  
When throwing an error, you can create an instance of `ApiError` with the appropriate status code and message.
```
throw new ApiError(httpStatus.BAD_REQUEST, "Invalid request data");
```

### Response Formatter
The response formatter utility is used to standardize API responses, ensuring that all responses follow a consistent structure.

```
const sendResponse = (res, data) => {
    const { statusCode, success, message, ...rest } = data;
    res.status(statusCode).json({
        statusCode,
        success,
        message,
        ...rest,
    });
};
```

**Usage**:  
You can use the `sendResponse` function to send a response from your controllers.
```
sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data retrieved successfully",
    data: result,
});
```

## File Upload Utilities

### FileUploader Class
The `FileUploader` class provides methods for handling file uploads, including uploading files to cloud storage services like Cloudinary.

```
class FileUploader {
    static async uploadToCloudinary(file, fileType) {
        // Logic to upload file to Cloudinary
        return uploadedFileData;
    }
}
```
**Usage**:  
To upload a file, you can call the `uploadToCloudinary` method.

```
const uploadedFile = await FileUploader.uploadToCloudinary(file, ENUM_FILE_TYPE.PDF);
```

## Pagination Utilities

### Pagination Helper
The pagination utility helps manage pagination parameters for API responses, making it easier to handle large datasets.

```
const paginate = (query, page, limit) => {
    const skip = (page - 1) * limit;
    return query.skip(skip).limit(limit);
};
```

**Usage**:  
You can use the `paginate` function when querying the database.

```
const paginatedResults = await paginate(Model.find(), page, limit);
```

## Validation Utilities

### Validation Middleware
The validation utility provides middleware for validating incoming request data against defined schemas.

```
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            throw new ApiError(httpStatus.BAD_REQUEST, error.details[0].message);
        }
        next();
    };
};
```
**Usage**:  
You can use the `validateRequest` middleware in your routes.

```
router.post('/endpoint', validateRequest(schema), controllerFunction);
```

## Miscellaneous Utilities

### Utility Functions
Various utility functions are included to perform common tasks, such as picking specific fields from objects or formatting dates.

```
const pick = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (obj && obj.hasOwnProperty(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};
```

**Usage**:  
You can use the `pick` function to extract specific fields from an object.

```
const filteredData = pick(req.body, ['name', 'email']);
```

## Conclusion
The utilities and helpers in this application provide essential functionality that enhances code reusability, maintainability, and consistency. By utilizing these utilities, developers can streamline common tasks and focus on building features rather than repetitive code.
