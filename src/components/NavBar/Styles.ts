import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingRight: '79px',
        paddingLeft: '118px',
        '@media (max-width: 900px)': {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 600,
        color: '#FFFEFE',
        textAlign: 'left',
    },
    menuButton: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 700,
        size: '18px',
        marginLeft: '38px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    drawerContainer: {
        height: '100%',
        paddingLeft: '3px',
        paddingTop: theme.spacing(3),
        maxWidth: '170px',
        display: 'flex',
        flexDirection: 'column',
    },
    navbarItem: {
        marginLeft: theme.spacing(3),
        padding: '10px',
    },
    itemLogo: {
        height: '18px',
        width: '18px',
        marginRight: '2px',
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
    logoIcon: {
        height: 40,
        marginTop: theme.spacing(1) / 2,
    },
    menuItem: {
        fontSize: '15px',
        width: '100%',
    },
}));

export default useStyles;
