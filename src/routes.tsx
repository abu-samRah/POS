import React, { lazy, Suspense } from 'react';
import LoadingScreen from './pages/loading/Loading';
import { Switch, Redirect, Route, RouteProps } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
const Login = lazy(() => import('./pages/Login/Main'));

export const AppRoutes: React.FC = () => (
    <Suspense fallback={<LoadingScreen />}>
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/404" component={Login} exact />
            <Route path="/" component={Login} />
        </Switch>
    </Suspense>
);
export default AppRoutes;
