import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { makeStyles } from '@material-ui/core/styles';
import PrimarySearchAppBar from '../src/PrimarySearchAppBar';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

export default function MyApp(props) {
  
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {

    var observer = new MutationObserver(function (mutations) {

      var handledUser = false;
      for (let mutation of mutations) {
          
        if (mutation.type === "childList")
          console.log(mutation);
          
          /*if (!handledUser && mutation.type === 'attributes' && mutation.attributeName ===
              'data-pico-email') {
              if (mutation.oldValue === null) {
                  var picoSignalElement = document.getElementById("so-submit-register")

                  if (picoSignalElement.getAttribute("data-pico-email")) {
                      console.log(picoSignalElement.getAttribute("data-pico-email") +
                          " now logged in.");

                      if (window.Pico && window.Pico.user && !window.Pico.user.email) {
                          var i = 0;
                          var timer = setInterval(function () {

                              if (window.Pico.user.email) clearInterval(timer);

                              handleUser(window.Pico.user);

                          }, 100);
                      }

                  }

                  handledUser = true;
              }
          }*/
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

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar />
        <div className={classes.offset} />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};