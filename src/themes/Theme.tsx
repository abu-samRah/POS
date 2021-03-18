import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});



export default Theme