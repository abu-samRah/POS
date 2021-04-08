import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../res/Logo';
import {
    CreditCard as CreditCardIcon,
    Class as ClassIcon,
} from '@material-ui/icons';
import ListIcon from '@material-ui/icons/List';
import { Route } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        currentMethodIcon: {
            height: 50,
            '& > img': {
                width: '47px',
                maxHeight: '100%',
            },
            marginRight: theme.spacing(1),
        },
        title: {
            flexGrow: 1,
            marginLeft: theme.spacing(2),
            fontSize: '17px',
        },
        logoIcon: {
            height: 40,
            marginTop: theme.spacing(1) / 2,
        },
        navbarItem: {
            marginLeft: theme.spacing(3),
            padding: '3px',
        },
        itemLogo: {
            marginTop: theme.spacing(1),
        },
    })
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <div className={classes.currentMethodIcon}>
                            <Logo className={classes.logoIcon} />
                        </div>

                        <Typography variant="h6">Point OF Sales</Typography>
                    </IconButton>
                    <div className={classes.title}>
                        <Button color="inherit" className={classes.navbarItem}>
                            <CreditCardIcon /> POS
                        </Button>
                        <Button color="inherit" className={classes.navbarItem}>
                            <ListIcon /> Products
                        </Button>
                        <Button color="inherit" className={classes.navbarItem}>
                            <ClassIcon /> Categories
                        </Button>
                    </div>

                    <Button color="inherit">
                        <Route>Login</Route>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
