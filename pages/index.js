import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Image from '../src/Image';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MUICookieConsent from 'material-ui-cookie-consent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Index(props) {

  const { classes } = props;

  return (
    <Container maxWidth="sm">
      <Box my={4}>

        <MUICookieConsent 
            cookieName="mySiteCookieConsent"
            componentType="Dialog" // default value is Snackbar
            message="This site uses cookies. Click 'Accept' to continue to site. GDPR, done."
        />

        <Typography align="left" variant="h1" component="h1" gutterBottom>
          Welcome.
        </Typography>

        <Typography variant="h2" component="h2" gutterBottom>
          Measure any URL's power.
        </Typography>

        <Card className={classes.card}>
        <CardContent>
        <TextField fullWidth id="standard-basic" label="Enter URL to measure power" />

        {/*<span>&nbsp;&nbsp;</span>*/}
        </CardContent>
        <CardActions>
        {/*style={{backgroundColor: ""}}*/}
        <Button fullWidth color="primary" variant="contained">Measure URL power</Button>
        </CardActions>
        </Card>

        <span>&nbsp;&nbsp;</span>
        
        <Card style={{backgroundColor: "#ebeff2"}} className={classes.card}>
        <CardContent>
        Your results will appear here.
        </CardContent>
        <CardActions>

        </CardActions>
        </Card>

        {/*<Link href="/about" color="primary">
          Go to the about page
        </Link>*/}

        {/*<Image 
            src = "https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&chtml=LoginDoneHtml&checkedDomains=youtube&checkConnection=youtube%3A291%3A1"
            fallbackSrc = "/images/nogoog.png"
            newSrc = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            width = "0px"
            height = "0px"
        >   
        </Image>*/}
    
        <ProTip />

      </Box>
      <Copyright />
    </Container>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);