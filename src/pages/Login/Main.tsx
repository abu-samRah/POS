import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';
import Logo from '../../res/Logo';
import {
    Card,
    Box,
    CardContent,
    Container,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            backgroundImage: `url(/static/background.jfif)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            minHeight: '100%',
            border: 0,
        },
        cardContainer: {
            paddingBottom: theme.spacing(7),
            paddingTop: theme.spacing(7),
        },
        cardContent: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            minHeight: 400,
        },
        currentMethodIcon: {
            height: 100,
            '& > img': {
                marginTop: theme.spacing(1),
                width: '50px',
                maxHeight: '52%',
            },
        },
        logoIcon: {
            height: 'fit-content',
        },
    };
});
function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.cardContainer} maxWidth="sm">
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Box
                            alignItems="center"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <div>
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h2"
                                >
                                    POS
                                </Typography>
                            </div>
                            <div className={classes.currentMethodIcon}>
                                <Logo className={classes.logoIcon} />
                            </div>
                        </Box>
                        <Box flexGrow={1}>
                            <Login />
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Main;
