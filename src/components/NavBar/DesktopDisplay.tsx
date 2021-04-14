import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import useStyles from './Styles';
import { useHistory } from 'react-router-dom';
import { NavBarHeading } from '../../types';
import { Link } from 'react-router-dom';
import Logo from '../../res/Logo';

interface IDesktopDisplay {
    headersData: NavBarHeading[];
}

const DesktopDisplay: React.FC<IDesktopDisplay> = ({ headersData }) => {
    const classes = useStyles();
    let history = useHistory();
    return (
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" component="h1" className={classes.logo}>
                <IconButton disableRipple className={classes.dissableHover}>
                    <div className={classes.currentMethodIcon}>
                        <Logo className={classes.logoIcon} />
                    </div>

                    <Typography variant="h6">Point OF Sales</Typography>
                </IconButton>
            </Typography>
            <div>
                {headersData.map(({ label, href, iconName, icon }) => {
                    return (
                        <Button
                            onClick={() => {
                                history.push(href);
                            }}
                            color="inherit"
                            className={classes.navbarItem}
                            key={label}
                        >
                            {icon}
                            {label}
                        </Button>
                    );
                })}
            </div>
        </Toolbar>
    );
};

export default DesktopDisplay;
