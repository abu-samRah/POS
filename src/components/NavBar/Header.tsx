import { AppBar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { NavBarHeading } from '../../types';
import DesktopDisplay from './DesktopDisplay';
import MobileDisplay from './MobileDisplay';
import useStyles from './Styles';
import { getHeadersData } from './constants';

export function Header() {
    const classes = useStyles();

    const headersData = getHeadersData(classes);

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
            <AppBar position="sticky" className={classes.header}>
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
