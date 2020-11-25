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
      for (let mutation of mutations) {
        if (mutation.type === "childList" && mutation.target.id === "pico-widget-container"){
          var picoWidget = document.getElementById("pico-widget-container");
          picoWidget.style.visibility = "hidden";
          console.log("Hide Pico widget");
        }

        if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.id === "pico-widget-container") {
          //
          //console.log(mutation);
          if (mutation.target.className === '_modalOpen')
          {
            console.log('Pico modal opened');
          }
          else
          {
            console.log('Pico modal closed');
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