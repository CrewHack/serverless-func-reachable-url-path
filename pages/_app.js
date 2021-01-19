import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { makeStyles } from "@material-ui/core/styles";
import MUICookieConsent from "material-ui-cookie-consent";
//import Cookies from "js-cookie";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import Router from "next/router";
import { Provider } from "next-auth/client";
import PrimarySearchAppBar from "../src/PrimarySearchAppBar";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  emojiTwoTone: {
    filter: "grayscale(100%)",
  },
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  //var picoModalClosed = false;

  let deferredPrompt;

  console.log(pageProps.session);

  React.useEffect(() => {
    //localStorage.setItem("deferredPrompt", deferredPrompt);

    console.log(pageProps.session);

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const newSubmitted = params.get("submitted");

    if (newSubmitted) {
      localStorage.setItem("submitted", "yes");
    }

    if (code && Router.pathname === "/thank-you-payment") {
      localStorage.setItem("paid", "yes");
    }

    var submitted = localStorage.getItem("submitted") === "yes";
    var paid = localStorage.getItem("paid") === "yes";

    if (Router.pathname === "/thank-you-payment") {
      if (submitted && !paid) {
        Router.push("/thank-you");
      } else {
        if (!paid) {
          Router.push("/");
        }
      }
    }

    if (Router.pathname === "/thank-you") {
      if (!submitted) {
        Router.push("/");
      } else {
        if (paid) {
          Router.push("/thank-you-payment");
        }
      }
    }

    /*var str = navigator.userAgent;
    var i = str.indexOf("Instagram");
    if (i != -1) {
      document.write("<a target=\"_blank\" href=\"https://acceptbtc.co/\">Proceed</a>");
      window.stop();
    }*/

    //the in-app Instagram browser (& other non-standarddoes not allow making use of serviceWorkers :(
    if (process.browser && navigator && navigator.serviceWorker) {
      navigator.serviceWorker.register("/OneSignalSDKWorker.js");
    }

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      //localStorage.setItem("deferredPrompt", deferredPrompt);
    });

    var acceptedCookies = localStorage.getItem("cookied") === "yes";
    setCookied(acceptedCookies);

    // typeof Cookies.get('mySiteCookieConsent') !== "undefined" &&
    /*if (
      submitted &&
      Router.pathname !== "/privacy-policy" &&
      Router.pathname !== "/members" &&
      Router.pathname !== "/about" &&
      Router.pathname !== "/email-signin"
    ) {
      if (!paid) {
        if (Router.pathname !== "/thank-you") {
          Router.push("/thank-you?refresh=1");
        }
      } //paid
      else {
        Router.push("/thank-you-payment");
      }
    }*/

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
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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

  function cookieHandle() {
    localStorage.setItem("cookied", "yes");
    setCookied(true);

    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          //console.log("User accepted the install prompt");
        } else {
          //console.log("User dismissed the install prompt");
        }
      });
    }
  }

  const [cookied, setCookied] = React.useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>acceptBTC</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MUICookieConsent
          onAccept={cookieHandle}
          cookieName="mySiteCookieConsent"
          //componentType="Dialog" // default value is Snackbar
          message={
            <span aria-label="chilli" role="img">
              Welcome to <AccountBalanceWalletOutlinedIcon fontSize="inherit" />
              acceptBTC.<div className={classes.emojiTwoTone}>&nbsp;&nbsp;</div>
              <div className={classes.emojiTwoTone}>
                This site uses a few cookies 🍪. Click 'Accept' to continue.
                GDPR, done. ✅
              </div>
            </span>
          }
        />
        <div
          style={
            cookied
              ? { pointerEvents: "all", opacity: 1, transition: "all .7s ease" }
              : { pointerEvents: "all", opacity: 1, transition: "all .7s ease" }
          }
        >
          <Provider session={pageProps.session}>
            <PrimarySearchAppBar />
            <div className={classes.offset} />
            <Component {...pageProps} />
          </Provider>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
