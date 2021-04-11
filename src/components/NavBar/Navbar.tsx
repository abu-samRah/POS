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
    List as ListIcon,
    ScatterPlot as ScatterPlotIcon,
    ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        dissableHover: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
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
        },
        logoIcon: {
            height: 40,
            marginTop: theme.spacing(1) / 2,
        },
        navbarItem: {
            marginLeft: theme.spacing(3),
            padding: '10px',
        },
        itemLogo: {
            height: '50px',
            width: '18px',
            marginRight: '2px',
        },
    })
);

export function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton disableRipple className={classes.dissableHover}>
                        <div className={classes.currentMethodIcon}>
                            <Logo className={classes.logoIcon} />
                        </div>

                        <Typography variant="h6">Point OF Sales</Typography>
                    </IconButton>
                    <div className={classes.title}>
                        <Link
                            to="/login"
                            color="inherit"
                            component={Button}
                            className={classes.navbarItem}
                        >
                            <CreditCardIcon className={classes.itemLogo} /> POS
                        </Link>
                        <Link
                            to="/login"
                            color="inherit"
                            component={Button}
                            className={classes.navbarItem}
                        >
                            <ListIcon className={classes.itemLogo} /> Products
                        </Link>
                        <Link
                            to="/login"
                            color="inherit"
                            component={Button}
                            className={classes.navbarItem}
                        >
                            <ScatterPlotIcon className={classes.itemLogo} />
                            Categories
                        </Link>
                    </div>
                    <Link to="/login" color="inherit" component={Button}>
                        <ExitToAppIcon className={classes.itemLogo} />
                        Logout
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
