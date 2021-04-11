import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import useStyles from './Styles';

import { NavBarHeadings } from '../../types';
import { Link } from 'react-router-dom';
import Logo from '../../res/Logo';

interface IDesktopDisplay {
    headersData: NavBarHeadings[];
}

const DesktopDisplay: React.FC<IDesktopDisplay> = ({ headersData }) => {
    const classes = useStyles();
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
                        <Link
                            to={href}
                            color="inherit"
                            component={Button}
                            className={classes.navbarItem}
                            key={label}
                        >
                            {icon}
                            {label}
                        </Link>
                    );
                })}
            </div>
        </Toolbar>
    );
};

export default DesktopDisplay;
