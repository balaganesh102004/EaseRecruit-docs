---
sidebar_position: 6
---
## Routing

The EaseRecruit application employs **React Router** for navigation, enabling users to move seamlessly between various pages of the application. The routing configuration is defined in the `App.jsx` file, where all routes are specified.

### Example of Routing

Here’s a sample routing configuration that illustrates how routes are structured:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CompanyDetails from './pages/CompanyDetails';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/company/:id" component={CompanyDetails} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
```