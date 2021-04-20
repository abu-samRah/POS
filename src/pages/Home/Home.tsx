import React, { lazy, Suspense } from 'react';
import LoadingScreen from '../loading/Loading';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import { TableCell, Box } from '@material-ui/core';
import { POSTable } from '../../components/Table/index';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import useStyles from './styles';

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
    const classes = useStyles();

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
                <Example />
            </Box>
        </>
    );
}

export default Home;

interface MyRow {
    id: string;
    Name: string;
}

const ActionsCell: React.FC<MyRow> = ({ Name }) => {
    const handleClick = () => {};
    return <ArrowRightIcon onClick={handleClick}>khalid</ArrowRightIcon>;
};

const Example = () => {
    return (
        <POSTable<MyRow>
            rows={[
                { id: 'name', Name: 'a' },
                { id: 'country', Name: 'b' },
                { id: 'country1', Name: 'c' },
                { id: 'country2', Name: 'd' },
                { id: 'country3', Name: 'e' },
                { id: 'country4', Name: 'f' },
                { id: 'country5', Name: 'j' },
                { id: 'country6', Name: 'h' },
                { id: 'country7', Name: 'i' },
                { id: 'country8', Name: 'j' },
                { id: 'country9', Name: 'k' },
                { id: 'country11', Name: 'l' },
                { id: 'country22', Name: 'm' },
                { id: 'country33', Name: 'n' },
                { id: 'country44', Name: 'o' },
            ]}
            columns={[
                {
                    id: 'Name',
                    align: 'left',
                    Head: '',
                    width: '70%',
                },

                {
                    id: 'Acitons',
                    align: 'left',
                    width: '30%',
                    Head: TableCell,
                    Cell: ActionsCell,
                },
            ]}
            title="Products"
            isPaginated={true}
        ></POSTable>
    );
};
