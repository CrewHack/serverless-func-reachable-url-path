import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../src/Copyright";
import Address from "../src/Address";
import Image from "next/image";
import { withStyles } from "@material-ui/core/styles";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "../src/Link";
import Router from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import Button from "@material-ui/core/Button";

//

const styles = {
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
};

function goToMembers() {
  Router.push("/members");
}

function ThankYouPayment(props) {
  const [session, loading] = useSession();

  React.useEffect(() => {
    window.addEventListener("load", (event) => {});
  }, []);

  const { classes } = props;

  return (
    <Container maxWidth="sm">
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
                [classes.animatedItemExiting]: false,
              })}
              fontSize="inherit"
            />
            {"acceptBTC"}
          </Typography>
        </Link>

        {!session && (
          <div>
            <>
              <Typography variant="h4" component="h1" gutterBottom>
                Thank you for your payment!
              </Typography>

              <div>&nbsp;</div>

              <Typography variant="h5" component="h5" gutterBottom>
                <i>We value your business.</i>
              </Typography>

              <div>&nbsp;</div>

              <Typography variant="h5" component="h5" gutterBottom>
                <i>Please check your inbox for your receipt.</i> After you're
                confirmed we'll begin delivering your 3-Day "BTC Accepted Here"
                Launch Guide right away. We'll follow up with a Private
                Consultation on Messenger.
              </Typography>

              <div>&nbsp;</div>

              <div
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
                  style={{ textAlign: "center" }}
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
              </div>
            </>
          </div>
        )}

        {session && (
          <>
            <Typography>
              Thank you for being a valued member. You have access to the
              Member's Area: <br />
              <br />
              <Button
                style={{ color: "white", backgroundColor: "#FF9900" }}
                onClick={goToMembers}
              >
                Go To Members Area
              </Button>
            </Typography>
          </>
        )}
      </Box>

      <Address />

      <div>&nbsp;</div>

      <Typography style={{ fontSize: "12px", textAlign: "center" }}>
        <Copyright />
      </Typography>

      <div>&nbsp;</div>
    </Container>
  );
}

ThankYouPayment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThankYouPayment);
