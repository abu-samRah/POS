import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    ...rest
}) => {
    const auth = useAuth(); // this one will  be updated because of the user state change

    return (
        <Route // what will happen if i do pass a component attribute to this route
            // this location comes from where
            {...rest}
            render={({ location }) =>
                auth.isAuthenticated ? (
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
