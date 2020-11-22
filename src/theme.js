import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow, white} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7FFF00', // #e93f33 // #1976d2
    },
    secondary: {
      main: '#ee7e33', // #fdf731 // #65aff7
    },
    text: {
      //secondary: '#e93f33'
    },
    error: {
      main: '#ADFF2F',// yellow.A400,
    },
    background: {
      default: '#fff',
    },
    warning: {
      main: red.A400,
    }
  },
});

theme.typography.h1 = {
  fontSize: '3rem',
  opacity: 0.87,
  '@media (min-width:600px)': {
    fontSize: '3rem',
    opacity: 0.87
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
    opacity: 0.87
  },
};

theme.typography.h2 = {
  fontSize: '1.6rem',
  opacity: 0.87,
  '@media (min-width:600px)': {
    fontSize: '2rem',
    opacity: 0.87
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
    opacity: 0.87
  },
};

export default theme;