import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Copyright from "../src/Copyright";
import Address from "../src/Address";

import { csrfToken } from "next-auth/client";

import Link from "../src/Link";
import { signIn, signOut, useSession } from "next-auth/client";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import Image from "next/image";

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

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function onChange(event) {
  let emailValid = validateEmail(event.target.value);

  if (!emailValid) {
    document.getElementById("submitButton").disabled = "disabled";
    if (document.getElementById("email").value) {
      document.getElementById("email-helper-text").innerHTML =
        "Please enter a valid email...";
    } else {
      document.getElementById("email-helper-text").innerHTML = "";
    }
  } else {
    document.getElementById("submitButton").disabled = false;
    document.getElementById("email-helper-text").innerHTML = "";
  }
}

function SignIn(props) {
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

        <Card
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-1px",
          }}
        >
          <CardContent style={{ paddingBottom: "2px" }}>
            <form method="post" action="/api/auth/signin/email">
              <input
                name="csrfToken"
                type="hidden"
                defaultValue={props.csrfToken}
              />
              <TextField
                fullWidth
                label="&nbsp;&nbsp;Enter valid email to get magic link"
                id="email"
                name="email"
                onChange={onChange}
                //error={true}
                helperText={props.helperText}
                autoComplete="off"
                inputProps={{
                  autoCapitalize: "none",
                }}
              />
              {/*<input type="text" id="email" name="email" />*/}
              <Button
                type="submit"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#FF9900",
                  marginTop: "6px",
                  marginBottom: "6px",
                  height: "50px",
                }}
                fullWidth
                variant="contained"
                id="submitButton"
              >
                Sign in with Email magic link
              </Button>
            </form>
          </CardContent>
        </Card>

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

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
    helperText: " ",
  };
};

export default withStyles(styles)(SignIn);
