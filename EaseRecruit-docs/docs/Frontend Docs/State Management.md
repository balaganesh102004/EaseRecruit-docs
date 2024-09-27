## State Management

**Redux Toolkit** is utilized for state management within the EaseRecruit application. It is configured in the `redux` directory, where slices are created to manage different aspects of the application state. This approach ensures efficient data flow and state updates across the application.

### Example of a Redux Slice

Below is an example of a specific Redux slice for managing user authentication:

```javascript
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        loginRequest(state) {
            state.loading = true;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

// Exporting actions for use in components
export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

// Exporting the reducer to be used in the store configuration
export default authSlice.reducer;
```

### Explanation

- **Initial State**: The slice initializes the state with `user`, `isAuthenticated`, `loading`, and `error` properties to manage the authentication state.

- **Reducers**: The `reducers` object contains functions to handle different actions:
    - `loginRequest`: Sets `loading` to `true` when a login request is initiated.
    - `loginSuccess`: Updates the `user` and sets `isAuthenticated` to `true` upon successful login.
    - `loginFailure`: Captures any errors that occur during the login process and updates the `error` state.
    - `logout`: Resets the `user` and `isAuthenticated` properties to log the user out.

- **Action Creators**: The exported actions can be dispatched from components to update the state based on user interactions.

This structure promotes a clear separation of concerns and enhances the maintainability of the application by managing the authentication state effectively.
