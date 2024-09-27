# Authentication Services Documentation

This documentation provides a detailed overview of the authentication services used in the application. It covers the authentication flow, middleware, user roles, and relevant code snippets to illustrate the implementation.

## Overview
The authentication services are responsible for managing user authentication and authorization within the application. This includes user registration, login, token generation, and role-based access control. The application uses JSON Web Tokens (JWT) for secure authentication.

## Authentication Flow
1. **User Registration**: New users can sign up by providing their details. The application checks if the user already exists and creates a new user if not.
2. **User Login**: Users can log in by providing their credentials (email and password). The application verifies the credentials and generates a JWT if they are valid.
3. **Token Generation**: Upon successful login, a JWT is generated and returned to the user. This token is used for subsequent requests to authenticate the user.
4. **Token Verification**: For protected routes, the application verifies the JWT provided in the Authorization header of incoming requests. If the token is valid, the user is granted access to the requested resource.
5. **Role-Based Access Control**: The application implements role-based access control to restrict access to certain routes based on user roles (e.g., ADMIN, COMPANY, CANDIDATE).

## Middleware
### Authentication Middleware
The authentication middleware is responsible for verifying the JWT and attaching the user information to the request object. This middleware is applied to protected routes to ensure that only authenticated users can access them.

```
import jwt from 'jsonwebtoken';
import ApiError from '@/errors/ApiError';
import httpStatus from 'http-status';
import User from '../user/model';

const auth = (roles = []) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, 'No token provided');
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            if (roles.length && !roles.includes(req.user.role)) {
                throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};
```

## User Roles
The application defines several user roles to manage access control:
- **ADMIN**: Has full access to all resources and can manage users, companies, and candidates.
- **COMPANY**: Can manage their own company profile, post jobs, and view applications.
- **CANDIDATE**: Can manage their own profile, apply for jobs, and view their applications.

## User Registration
The user registration service handles the creation of new users. It checks for existing users and hashes the password before saving the user to the database.

```
const signUp = async (payload) => {
    const isExist = await User.findOne({ email: payload.email });
    if (isExist) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'User account already exists');
    }

    const user = await User.create(payload);
    await user.save();
};
```

## User Login
The user login service verifies the user's credentials and generates a JWT if the credentials are valid.

```
const login = async (email, password) => {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.isPasswordMatched(password))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }

    const token = user.generateToken();
    return { user, token };
};
```

## Token Generation
The token generation method creates a JWT for the authenticated user, which includes the user's ID and role.

```
userSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this.id, role: this.role }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    return token;
};
```

## Conclusion
The authentication services in this application provide a robust mechanism for managing user authentication and authorization. By utilizing JWTs and role-based access control, the application ensures that only authorized users can access protected resources. This documentation serves as a guide for understanding and implementing the authentication services within the application.
