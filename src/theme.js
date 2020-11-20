import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
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