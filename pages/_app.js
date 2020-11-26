import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { makeStyles } from '@material-ui/core/styles';
import PrimarySearchAppBar from '../src/PrimarySearchAppBar';
import MUICookieConsent from 'material-ui-cookie-consent';
import Cookies from 'js-cookie';
import PowerIcon from '@material-ui/icons/Power';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  emojiTwoTone: {
    filter: "grayscale(100%)"
  }
}))

export default function MyApp(props) {
  
  const { Component, pageProps } = props;
  const classes = useStyles();

  var picoModalClosed = false;

  React.useEffect(() => {

    var observer = new MutationObserver(function (mutations) {

      var picoWidget = document.getElementById("pico-widget-container");

      for (let mutation of mutations) {
        if (mutation.type === "childList" && mutation.target.id === "pico-widget-container"){
          picoWidget.style.visibility = "hidden";
          picoWidget.style.display = "none";
          console.log("Hide Pico widget initial");
        }
        if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.id === "pico-widget-container") {

          console.log(mutation.target);

          if (mutation.target.className === '_modalOpen' || mutation.target.className === '_menuOpen')
          {
            console.log('Pico modal opened');
            picoModalClosed = false;
          }
          else
          {
            if (!picoModalClosed)
            {
              console.log('Pico modal closed');
              picoWidget.style.visibility = "hidden";
              picoWidget.style.display = "none";
              console.log("Hide Pico widget after modal close");
              picoModalClosed = true;
            }
          }
        }
      }
    });

    observer.observe(document, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const jssStylesNew = document.querySelector('#jss-server-side');
    if (jssStylesNew && jssStylesNew.parentNode) {
      console.log("nope");
    }
    else
    {
      console.log("removed");

      console.log(document.getElementsByTagName("script"));
    }

  }, []);

  const timeout = setInterval(() => {
    if (typeof Cookies.get('mySiteCookieConsent') !== "undefined"){
      setCookied(true);
    }
    else
    {
      setCookied(false);
    }
  }, 500);

  const [cookied, setCookied] = React.useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MUICookieConsent 
            cookieName="mySiteCookieConsent"
            //componentType="Dialog" // default value is Snackbar
            message={<span aria-label="chilli" role="img">Welcome to <PowerIcon fontSize="inherit"/>URLpow.<div className={classes.emojiTwoTone}>&nbsp;&nbsp;</div><div className={classes.emojiTwoTone}>This site uses a few cookies 🍪. Click 'Accept' to continue to site. GDPR, done. ✅</div></span>}
            //"
        /> 
        <div style={cookied ? {pointerEvents: "all", opacity: 1} : {pointerEvents: "none", opacity: 0.4}}>
            <PrimarySearchAppBar />
            <div className={classes.offset} />
            <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};