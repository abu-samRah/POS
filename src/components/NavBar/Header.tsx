import { AppBar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { NavBarHeadings } from '../../types';
import DesktopDisplay from './DesktopDisplay';
import MobileDisplay from './MobileDisplay';
import useStyles from './Styles';
import {
    CreditCard as CreditCardIcon,
    List as ListIcon,
    ScatterPlot as ScatterPlotIcon,
    ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';

export function Header() {
    const classes = useStyles();

    const headersData: NavBarHeadings[] = [
        {
            label: 'POS',
            href: '/app',
            iconName: 'CreditCardIcon',
            icon: <CreditCardIcon className={classes.itemLogo} />,
        },
        {
            label: 'Products',
            href: '/products',
            iconName: 'ListIcon',
            icon: <ListIcon className={classes.itemLogo} />,
        },
        {
            label: 'Catagories',
            href: '/catagories',
            iconName: 'ScatterPlotIcon',
            icon: <ScatterPlotIcon className={classes.itemLogo} />,
        },
        {
            label: 'Log Out',
            href: '/logout',
            iconName: 'ExitToAppIcon',
            icon: <ExitToAppIcon className={classes.itemLogo} />,
        },
    ];

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1000
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                      ...prevState,
                      mobileView: false,
                  }));
        };

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    const setDisplayState = (value: boolean) => {
        setState((prevState) => ({
            ...prevState,
            drawerOpen: value,
        }));
    };

    return (
        <header>
            <AppBar className={classes.header}>
                {mobileView ? (
                    <MobileDisplay
                        headersData={headersData}
                        drawerOpen={drawerOpen}
                        setDisplayState={setDisplayState}
                    />
                ) : (
                    <DesktopDisplay headersData={headersData} />
                )}
            </AppBar>
        </header>
    );
}
