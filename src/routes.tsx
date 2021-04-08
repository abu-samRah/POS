import React, { lazy, Suspense } from 'react';
import LoadingScreen from './pages/loading/Loading';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

export const AppRoutes: React.FC = () => (
    <Suspense fallback={<LoadingScreen />}>
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/404" component={Login} exact />
            <ProtectedRoute path="/" component={Home} />
        </Switch>
    </Suspense>
);
export default AppRoutes;
