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
import { signIn, signOut, useSession } from "next-auth/client";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

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
  }, //
};
////

function About(props) {
  const [session, loading] = useSession();

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

        <div>&nbsp;</div>

        {!session && (
          <>
            <Typography>
              Please sign in with your email address. We'll send you a{" "}
              <i>magic link</i> to access the Member's Area: <br />
              <br />
              <Button
                style={{ color: "white", backgroundColor: "#FF9900" }}
                onClick={signIn}
              >
                Access Members Area
              </Button>
            </Typography>
          </>
        )}

        {session && (
          <>
            <Typography>
              <p>Welcome to the Member's Area</p>

              <p>Last updated December 30th, 2020</p>

              <p>Exclusive Content</p>

              <p>We are awesome.</p>

              <p>And so are you.</p>

              <p>
                But together, we're both <i>more</i> awesome!
              </p>

              <p>OTHER STUFF...</p>

              <p>Blah blah blah...</p>
            </Typography>

            <Card style={{ marginBottom: "0px", marginTop: "-8px" }}>
              <CardContent style={{ paddingBottom: "0px", marginTop: "-8px" }}>
                <video
                  width="100%"
                  src={require("../public/external/btc-accepted-here.mp4")}
                  id="promo-video"
                  autoPlay
                  muted
                  playsInline
                ></video>
              </CardContent>
              <CardActions style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                {/*<ProTip />*/}
              </CardActions>
            </Card>
          </>
        )}

        <div>&nbsp;</div>
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

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
