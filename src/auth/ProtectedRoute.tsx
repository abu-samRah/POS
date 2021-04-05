import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const { isAuthenticated } = useAuth(); // this one will  be updated because of the user state change
    return (
        <Route // what will happen if i do pass a component attribute to this route
            {...rest}
            // this location comes from where
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
export default ProtectedRoute;
