import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Address from "../src/Address";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import clsx from "clsx";
import MainForm from "../src/MainForm";
import Image from "next/image";
import Link from "../src/Link";
import Router from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";

const styles = {
  image: {
    textAlign: "center",
  },

  overlay: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 10,
  },

  spinner: {
    zIndex: 12,
    display: "none",
    position: "fixed" /* or absolute */,
    top: "50%",
    left: "50%",
  },

  disabledDiv: {
    pointerEvents: "none",
    opacity: 0.4,
  },
  enabledDiv: {
    pointerEvents: "all",
    opacity: 1,
  },
  emojiTwoTone: {
    filter: "grayscale(100%)",
  },
  card: {
    minWidth: 275,
  },
  card2: {
    minWidth: 275,
    backgroundColor: "#fffcf7",
  },
  activatecard: {
    minWidth: 275,
    backgroundColor: "#fffcf7",
    transition: "all 1s ease",
    animation: `$growShadow 2000ms infinite`,
  },
  activatecard2: {
    minWidth: 275,
    backgroundColor: "#fffcf7",
    transition: "all 1s ease",
  },
  open: {
    backgroundColor: "white",
  },
  close: {
    backgroundColor: "#F7F9FB",
  },
  animatedItem: {
    animation: `$myEffect 750ms ease`,
    color: "#FF9900",
  },
  animatedItemExiting: {
    color: "#FF9900",
    transition: "all .7s ease",
    animation: `$myEffectExit 1000ms ease`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "rotate(1440deg)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 1, //0.33,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes growShadow": {
    "0%": {
      boxShadow:
        "3px 2px 1px -1px #FF9900, 0px 1px 1px 0px #FF9900, 0px 1px 3px 0px #FF9900", //#4CAF50
    },
    "50%": {
      boxShadow:
        "5px 4px 3px 1px #FF9900, 2px 2px 2px 1px #FF9900, 2px 3px 5px 2px #FF9900",
    },
    "100%": {
      boxShadow:
        "3px 2px 1px -1px #FF9900, 0px 1px 1px 0px #FF9900, 0px 1px 3px 0px #FF9900",
    },
  },
};

function Index(props) {
  const [session, loading] = useSession();

  React.useEffect(() => {
    /*var paid = localStorage.getItem("paid") === "yes";
    if (paid) {
      Router.push("/thank-you-payment");
    } else {
      var submitted = localStorage.getItem("submitted") === "yes";
      if (submitted) {
        //Router.push("/thank-you");
        Router.push("/thank-you?refresh=1");
      }
    }*/
  });

  const { classes } = props;

  const drawerToggle = (e) => {
    setOpen(!open);
  };

  const submit = async (data) => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("spinner").style.display = "block";

    const res = await fetch("/api/performance", {
      headers: {
        Authorization: "1234567890abcdef",
        "X-Secret-Key": "djewbdjnewdjknwejkdnkjwe",
      },
      method: "POST",
      body: JSON.stringify({ email: data }),
    });

    document.getElementById("overlay").style.display = "none";
    document.getElementById("spinner").style.display = "none";

    localStorage.setItem("submitted", "yes");

    //if (process.browser) {
    window.location = "/thank-you";
    //}
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <div className={classes.overlay} id="overlay"></div>
      <img
        className={classes.spinner}
        id="spinner"
        src="/external/847.gif"
        alt="Submitting acceptBTC form"
      />

      <Box my={4}>
        <Link color="inherit" href="/">
          <Typography
            style={{ opacity: 1 }}
            align="left"
            variant="h1"
            component="h1"
            gutterBottom
          >
            <AccountBalanceWalletOutlinedIcon
              className={clsx(classes.animatedItem, {
                [classes.animatedItemExiting]: open,
              })}
              fontSize="inherit"
            />
            {!open ? "acceptBTC" : "acceptBTC"}
          </Typography>
        </Link>

        {!session && (
          <div>
            <>
              <Typography variant="h2" component="h2" gutterBottom>
                Start accepting Bitcoin & other crypto payments today.
              </Typography>

              <Typography gutterBottom>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginBottom: "-8px",
                  }}
                >
                  <span
                    style={{
                      marginTop: "12px",
                    }}
                  >
                    Get your&nbsp;
                  </span>

                  <Image
                    className={classes.image}
                    src="/external/Bitcoin_accepted_here_printable.png"
                    alt="Add a 'Bitcoin Accepted Here' badge to your website"
                    width={135}
                    height={50}
                  />

                  <span
                    style={{
                      marginTop: "12px",
                    }}
                  >
                    &nbsp;badge today!
                  </span>
                </span>
              </Typography>

              <div>&nbsp;</div>

              <Card
                className={clsx(
                  !open && classes.card,
                  open && classes.activatecard
                )}
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-1px",
                }}
              >
                <CardContent style={{ paddingBottom: "2px" }}>
                  <MainForm
                    submit={submit.bind(this)}
                    drawerToggle={drawerToggle.bind(this)}
                  />
                </CardContent>
              </Card>

              <div>&nbsp;</div>

              <Card
                style={{ marginBottom: "0px", marginTop: "-8px" }}
                className={clsx(
                  !open && classes.card2,
                  open && classes.activatecard2
                )}
              >
                <CardContent
                  style={{ paddingBottom: "0px", marginTop: "-8px" }}
                >
                  <video
                    width="100%"
                    src={require("../public/external/btc-accepted-here.mp4")}
                    id="promo-video"
                    autoPlay
                    muted
                    playsInline
                  ></video>
                </CardContent>
                <CardActions
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                >
                  {!open && <ProTip />}
                  {open && (
                    <Typography className={classes.root} color="error">
                      Let's do this!
                    </Typography>
                  )}
                </CardActions>
              </Card>
            </>
          </div>
        )}

        {/*{session && (
          <>
            <Typography>
              <p>Thank you for being a member!</p>

              <p>Please access the member's area: </p>

              <Button
                href="/members"
                style={{ color: "white", backgroundColor: "#FF9900" }}
              >
                Access Members Area
              </Button>
            </Typography>
          </>
        )}*/}
      </Box>

      <Typography style={{ fontSize: "11px", textAlign: "left" }}>
        <i>
          <b>Why do we offer this educational service?</b>
        </i>{" "}
        Bitcoin revolutionized "money" forever. Your business will profit from
        the cryptocurrency innovations now becoming more & more mainstream by
        the minute. The time has arrived to get paid in Bitcoin in addition to
        traditional fiat currency variants. Our gateway also accepts 150+
        traditonal payments methods like debit & credit cards & more. The method
        we'll teach you is <i>by far</i> the quickest & easiest way to start
        accepting Bitcoin as a payment method in the year 2021. You don't have
        to be a coder to implement, anyone can configure the setup quickly.
        Do-It-Yourself, no over-priced consultants. You can get started today.
        With our setup, you don't have to wait on the blockchain to complete
        processing the transactions and receive your crypo payment, nearly 97%
        of all transactions are approved almost instantly. We make accepting BTC
        payments just as easy as accepting traditional payments like credit and
        debit cards. Are you accepting Bitcoin payments yet? Time to to act{" "}
        <b>now ⏱️ </b>
      </Typography>

      <div>&nbsp;</div>

      <Address />

      <div>&nbsp;</div>

      <Typography style={{ fontSize: "12px", textAlign: "center" }}>
        <Copyright />
      </Typography>
    </Container>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
