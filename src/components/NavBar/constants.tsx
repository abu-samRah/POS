import {
    CreditCard as CreditCardIcon,
    List as ListIcon,
    ScatterPlot as ScatterPlotIcon,
    ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';
import { NavBarHeading } from '../../types';
import useStyles from './Styles';

export const getHeadersData = (
    classes: ReturnType<typeof useStyles>
): NavBarHeading[] => {
    return [
        {
            label: 'POS',
            href: '/app',
            iconName: 'CreditCardIcon',
            icon: <CreditCardIcon className={classes.itemLogo} />,
        },
        {
            label: 'Products',
            href: '/app/products',
            iconName: 'ListIcon',
            icon: <ListIcon className={classes.itemLogo} />,
        },
        {
            label: 'Catagories',
            href: '/app/catagories',
            iconName: 'ScatterPlotIcon',
            icon: <ScatterPlotIcon className={classes.itemLogo} />,
        },
        {
            label: 'Log Out',
            href: '/login',
            iconName: 'ExitToAppIcon',
            icon: <ExitToAppIcon className={classes.itemLogo} />,
        },
    ];
};
