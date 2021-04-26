import React, { lazy, Suspense } from 'react';
import LoadingScreen from '../loading/Loading';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import { TableCell, Box } from '@material-ui/core';
import { POSTable } from '../../components/Table/index';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import useStyles from './styles';
import Categories from '../Categories';
import { Link } from 'react-router-dom';
import catagories from '../Categories';
function setRoutes() {
    {
        /* <Suspense fallback={<LoadingScreen />}>
        <Switch>
            <Route path="/app/categories" component={Categories} />
        </Switch>
    </Suspense>; */
    }
}

function Home() {
    setRoutes();
    const classes = useStyles();
    catagories();
    return (
        <>
            <Navbar />
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                className={classes.conatiner}
            >
                <Categories />
            </Box>
        </>
    );
}

export default Home;
