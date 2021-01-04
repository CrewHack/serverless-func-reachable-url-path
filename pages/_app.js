import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { makeStyles } from '@material-ui/core/styles';
//import PrimarySearchAppBar from '../src/PrimarySearchAppBar';
import MUICookieConsent from 'material-ui-cookie-consent';
//import Cookies from 'js-cookie';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import Router from "next/router";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  emojiTwoTone: {
    filter: "grayscale(100%)"
  }
}))

export default function MyApp(props) {
  
  const { Component, pageProps } = props;
  const classes = useStyles();

  //var picoModalClosed = false;

  let deferredPrompt;

  React.useEffect(() => {

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });

    if (process.browser && navigator && navigator.serviceWorker) {
      navigator.serviceWorker.register('/OneSignalSDKWorker.js');
    }

    var acceptedCookies = sessionStorage.getItem("cookied") === "yes";
    setCookied(acceptedCookies);

    var submitted = sessionStorage.getItem("submitted") === "yes";

    if (Router.pathname === '/thank-you')
    {
        if (!submitted)
        {
          Router.push('/');
        }
    }
  
    if (submitted)
    {
      Router.push('/thank-you');
    }

    /*var observer = new MutationObserver(function (mutations) {

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
    });*/

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

  }, []);

  //the in-app Instagram browser does bow allow making use of cookies :(
  /*const timeout = setInterval(() => {
    if (typeof Cookies.get('mySiteCookieConsent') !== "undefined"){

      clearInterval(timeout);

      setCookied(true); // visitor accepted cookies

      if (deferredPrompt)
      {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
        });
      }
    }
    else
    {
      setCookied(false);
    }
  }, 500);*/

  function cookieHandle()
  {
    sessionStorage.setItem("cookied", "yes")
    setCookied(true);
    
    console.log("aloha!");
    console.log(deferredPrompt);

    if (deferredPrompt)
    {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  }

  const [cookied, setCookied] = React.useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>acceptBTC</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MUICookieConsent 
            onAccept={cookieHandle}
            cookieName="mySiteCookieConsent"
            //componentType="Dialog" // default value is Snackbar
            message={<span aria-label="chilli" role="img">Welcome to <AccountBalanceWalletOutlinedIcon fontSize="inherit"/>acceptBTC.<div className={classes.emojiTwoTone}>&nbsp;&nbsp;</div><div className={classes.emojiTwoTone}>This site uses a few cookies 🍪. Click 'Accept' to continue. GDPR, done. ✅</div></span>}
            //"
        /> 
        <div style={cookied ? {pointerEvents: "all", opacity: 1, transition: "all .7s ease"} : {pointerEvents: "all", opacity: 1, transition: "all .7s ease"}}>
        {/*pointerEvents: "none", opacity: 0.4, transition: "all .7s ease"*/}
            {/*<PrimarySearchAppBar />*/}
            {/*<div className={classes.offset} />*/}
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