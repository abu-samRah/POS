import {
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    MenuItem,
} from '@material-ui/core';
import useStyles from './Styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { NavBarHeading } from '../../types';
import { Link } from 'react-router-dom';

interface IMobileDisplay {
    headersData: NavBarHeading[];
    setDisplayState: (value: boolean) => void;
    drawerOpen: boolean;
}

const MobileDisplay: React.FC<IMobileDisplay> = ({
    headersData,
    setDisplayState,
    drawerOpen,
}) => {
    const classes = useStyles();

    return (
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-haspopup="true"
                onClick={() => {
                    setDisplayState(true);
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => {
                    setDisplayState(false);
                }}
            >
                <div
                    style={{
                        backgroundImage:
                            'linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)',
                    }}
                    className={classes.drawerContainer}
                >
                    {headersData.map(({ label, href, icon }) => {
                        return (
                            <Link
                                component={Button}
                                to={href}
                                color="inherit"
                                style={{ textDecoration: 'none' }}
                                key={label}
                            >
                                <MenuItem className={classes.menuItem}>
                                    {icon}
                                    {label}
                                </MenuItem>
                            </Link>
                        );
                    })}
                </div>
            </Drawer>

            <div>
                <Typography
                    variant="h6"
                    component="h1"
                    className={classes.logo}
                >
                    Point OF Sales
                </Typography>
            </div>
        </Toolbar>
    );
};

export default MobileDisplay;
