---
sidebar_position: 2
---
# Project Architecture Overview

The project is structured in a modular way, allowing for clear separation of concerns and easy maintainability. Below is an overview of the architecture and the directory structure of the backend application.

## Architecture Overview

The application follows a **layered architecture**, which includes the following layers:

### 1. Presentation Layer
- **Purpose**: Handles incoming requests and outgoing responses.
- **Components**: Routes and Controllers.
- **Details**: Defines the API endpoints. Each module (e.g., `company`, `candidate`, `job`, etc.) has its own routes and controllers to ensure the application's modularity.

### 2. Service Layer
- **Purpose**: Contains the business logic of the application.
- **Components**: Services.
- **Details**: Services interact with the database models and perform operations based on the requests received from the controllers. Each module has a dedicated service file that encapsulates its logic.

### 3. Data Access Layer
- **Purpose**: Defines how data is structured and accessed.
- **Components**: Database models and schemas.
- **Details**: The models represent the application's data structure and provide an interface to interact with the database. The schema files define the structure of entities like `Company`, `Candidate`, `Job`, etc.

### 4. Utilities and Helpers
- **Purpose**: Contains shared utilities, middleware, and helper functions used across the application.
- **Components**: 
  - Utility functions for common operations (e.g., pagination, picking specific fields).
  - Middleware for tasks like authentication and request validation.
- **Details**: Utilities and middleware promote code reusability, ensuring that frequently used functionalities are centralized and easy to maintain.

### 5. Error Handling
- **Purpose**: Provides custom error handling mechanisms.
- **Components**: 
  - Custom error classes (e.g., `ApiError.ts`).
  - Error-handling middleware to standardize error responses.
- **Details**: This layer ensures that errors are handled consistently across the application, providing meaningful feedback to API consumers.

---

## Directory Structure Overview


```
  src/
    ├── app/
    │   ├── modules/
    │   │   ├── company/
    │   │   │   ├── controller.ts          # Handles requests and responses for company-related endpoints
    │   │   │   ├── service.ts             # Contains business logic for company operations
    │   │   │   ├── model.ts               # Defines the Company schema and model
    │   │   │   ├── routes.ts              # Defines the routes for company-related endpoints
    │   │   │   ├── constant.ts            # Contains constants related to the company module
    │   │   │   ├── validation.ts          # Contains validation schemas for company data
    │   │   │   └── utils.ts               # Utility functions specific to the company module
    │   │   ├── candidate/
    │   │   │   ├── controller.ts          # Handles requests and responses for candidate-related endpoints
    │   │   │   ├── service.ts             # Contains business logic for candidate operations
    │   │   │   ├── model.ts               # Defines the Candidate schema and model
    │   │   │   ├── routes.ts              # Defines the routes for candidate-related endpoints
    │   │   │   ├── constant.ts            # Contains constants related to the candidate module
    │   │   │   ├── validation.ts          # Contains validation schemas for candidate data
    │   │   │   └── utils.ts               # Utility functions specific to the candidate module
    │   │   ├── job/
    │   │   │   ├── controller.ts          # Handles requests and responses for job-related endpoints
    │   │   │   ├── service.ts             # Contains business logic for job operations
    │   │   │   ├── model.ts               # Defines the Job schema and model
    │   │   │   ├── routes.ts              # Defines the routes for job-related endpoints
    │   │   │   ├── constant.ts            # Contains constants related to the job module
    │   │   │   ├── validation.ts          # Contains validation schemas for job data
    │   │   │   └── utils.ts               # Utility functions specific to the job module
    │   │   ├── application/
    │   │   │   ├── controller.ts          # Handles requests and responses for application-related endpoints
    │   │   │   ├── service.ts             # Contains business logic for application operations
    │   │   │   ├── model.ts               # Defines the Application schema and model
    │   │   │   ├── routes.ts              # Defines the routes for application-related endpoints
    │   │   │   ├── constant.ts            # Contains constants related to the application module
    │   │   │   ├── validation.ts          # Contains validation schemas for application data
    │   │   │   └── utils.ts               # Utility functions specific to the application module
    │   │   ├── user/
    │   │   │   ├── controller.ts          # Handles requests and responses for user-related endpoints
    │   │   │   ├── service.ts             # Contains business logic for user operations
    │   │   │   ├── model.ts               # Defines the User schema and model
    │   │   │   ├── routes.ts              # Defines the routes for user-related endpoints
    │   │   │   ├── constant.ts            # Contains constants related to the user module
    │   │   │   ├── validation.ts          # Contains validation schemas for user data
    │   │   │   └── utils.ts               # Utility functions specific to the user module
    │   │   ├── dashboard/
    │   │   │   ├── controller.ts          # Handles requests and responses for dashboard-related endpoints
    │   │   │   ├── service.ts             # Contains business logic for dashboard operations
    │   │   │   ├── model.ts               # Defines the Dashboard schema and model
    │   │   │   ├── routes.ts              # Defines the routes for dashboard-related endpoints
    │   │   │   ├── constant.ts            # Contains constants related to the dashboard module
    │   │   │   ├── validation.ts          # Contains validation schemas for dashboard data
    │   │   │   └── utils.ts               # Utility functions specific to the dashboard module
    │   ├── middlewares/
    │   │   ├── auth.ts                    # Middleware for authentication
    │   │   ├── validateRequest.ts         # Middleware for validating incoming requests
    │   │   └── errorHandler.ts            # Middleware for handling errors
    │   ├── shared/
    │   │   ├── catchAsync.ts              # Utility for handling asynchronous errors
    │   │   ├── pick.ts                    # Utility for picking specific fields from objects
    │   │   ├── sendResponse.ts             # Utility for sending standardized responses
    │   │   └── pagination.ts               # Utility for pagination logic
    │   └── config/
    │       ├── database.ts                # Database connection configuration
    │       ├── server.ts                  # Server configuration and initialization
    │       └── constants.ts               # Application-wide constants
    ├── errors/
    │   ├── ApiError.ts                    # Custom error class for API errors
    ├── interfaces/
    │   ├── common.ts                      # Common interfaces used across the application
    │   ├── pagination.ts                  # Interfaces for pagination
    │   └── user.ts                        # Interfaces for user-related data
    ├── enums/
    │   ├── user.ts                        # Enums for user roles and permissions
    └── index.ts                          # Entry point of the application
```

# Key Components of the Application

## 1. Modules
- **Purpose**: Encapsulates related functionality for better organization.
- **Details**: Each module contains the following components:
  - **Routes**: Defines the API endpoints for the module.
  - **Controller**: Handles HTTP requests and sends appropriate responses.
  - **Service**: Contains business logic that interacts with models.
  - **Model**: Defines the schema and interacts with the database.
  
By grouping related functionalities into modules, the application achieves modularity, making it easier to maintain and extend.

## 2. Middlewares
- **Purpose**: Custom middleware functions for handling cross-cutting concerns.
- **Key Middlewares**:
  - **Authentication**: Ensures secure access to protected routes.
  - **Validation**: Validates incoming requests to maintain data integrity.
  - **Error Handling**: Captures and processes errors to provide consistent error responses.

Middlewares promote a clean, reusable, and maintainable way to manage common logic across multiple routes.

## 3. Shared Utilities
- **Purpose**: Common utilities and constants used across the application.
- **Details**: Includes functions like:
  - **Error-handling utilities**: For managing asynchronous errors.
  - **Response utilities**: For sending consistent responses.
  - **Pagination utilities**: For handling paginated responses.

These utilities ensure consistency across different modules and reduce duplication of code.

## 4. Errors
- **Purpose**: Provides custom error-handling mechanisms.
- **Details**: Contains error classes (e.g., `ApiError.ts`) to capture and process exceptions in a standardized manner.

By using custom error classes, the application can manage errors more effectively, providing meaningful error messages to API consumers.

## 5. Interfaces
- **Purpose**: Enforces type safety and structure within the application.
- **Details**: Defines TypeScript interfaces for:
  - **Common data structures**: Shared across different parts of the application.
  - **Module-specific data**: Such as interfaces for users, companies, and jobs.
  
Interfaces promote consistent data modeling, reducing runtime errors and improving code maintainability.

## 6. Enums
- **Purpose**: Defines constant values for use across the application.
- **Key Enums**: 
  - **User roles**: To manage access control and permissions.
  
Enums ensure that constant values remain consistent and help avoid hardcoded values scattered throughout the codebase.

---

## Benefits of This Architecture

- **Separation of Concerns**: The application is divided into distinct layers, each with its specific role, ensuring that the logic remains organized and maintainable.
  
- **Modularity**: Each module can be developed, tested, and maintained independently, allowing multiple developers to work on different modules simultaneously.
  
- **Reusability**: Shared utilities, middlewares, and custom error handlers provide reusable components that can be used across the application.

This architecture promotes scalability and makes it easier to extend the application as new requirements arise.
