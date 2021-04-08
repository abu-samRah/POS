import React, { lazy, Suspense } from 'react';
import LoadingScreen from '../loading/Loading';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../components/NavBar/Nabbar';

function setRoutes() {
    <Suspense fallback={<LoadingScreen />}>
        <Switch>
            {/* <Route path="/login" component={Login} exact />
            <Route path="/404" component={Login} exact />
            <Route path="/" component={Login} /> */}
        </Switch>
    </Suspense>;
}

function Home() {
    setRoutes();

    return (
        <>
            <Navbar />
        </>
    );
}

export default Home;
