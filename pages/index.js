import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Image from '../src/Image';
import TextField from '@material-ui/core/TextField';
import MUICookieConsent from 'material-ui-cookie-consent';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>

        <MUICookieConsent 
            color="primary"
            cookieName="mySiteCookieConsent"
            componentType="Dialog" // default value is Snackbar
            message="This site uses cookies. Click 'Accept' to continue to site."
        />

        <Typography align="left" variant="h1" component="h1" gutterBottom>
          Welcome.
        </Typography>

        <Typography variant="h2" component="h2" gutterBottom>
          Measure any URL's power.
        </Typography>

        {/*<Input fullWidth></Input>*/}

        <TextField fullWidth id="standard-basic" label="Enter URL to measure power" />

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