import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Login from './LoginForm'
import Logo from "../../res/Logo"
import {
    Card,
    Box,
    CardContent,
    Container,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => {
    console.log(theme.breakpoints)
    return {
        root: {
            backgroundImage: `url(/static/background.jfif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            display: 'flex',
            flexDirection: 'column',
            height: "100vh",
            border: 0
        },
        cardContainer: {
            paddingBottom: 80,
            paddingTop: 80,
        },
        cardContent: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            minHeight: 400,
        },
        currentMethodIcon: {
            height: 80,
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
            '& > img': {
                width: 'auto',
                maxHeight: '100%',
            },
        },
        logoIcon: {
            height: 100,
        },
    }
});
function Index() {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
            <Container className={classes.cardContainer} maxWidth="sm">
        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  POS
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Welcome to POS system
                </Typography>
              </div>
              <div className={classes.currentMethodIcon}>
                <Logo className={classes.logoIcon} />
              </div>
            </Box>
            <Box flexGrow={1} mt={3}>
              <Login />
            </Box>
          </CardContent>
                </Card>
                </Container>
        </div>
            
    )
}

export default Index
