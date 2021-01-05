import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Address from '../src/Address';
import Image from 'next/image'
import { withStyles } from '@material-ui/core/styles';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MuiLink from '@material-ui/core/Link';

const styles = {
  animatedItem: { 
    animation: `$myEffect 750ms ease`,
    color: "#FF9900", 
  },
  animatedItemExiting: {
    color: "#FF9900",
    //transform: "rotate(1440deg)",
    transition: "all .7s ease",
    animation: `$myEffectExit 1000ms ease`
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      //transform: "translateY(-200%)", //rotate(1440deg)
    },
    "100%": {
      opacity: 1,
      //transform: "translateY(0)"
      transform: "rotate(1440deg)",
    }
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
    }
  },
}

//export default function ThankYou() {
function ThankYou(props) {  

  const { classes } = props;
  
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <MuiLink color="inherit" href="/">
        <Typography style={{opacity: 1}} align="left" variant="h1" component="h1" gutterBottom > 
          <AccountBalanceWalletOutlinedIcon className={clsx(classes.animatedItem, {[classes.animatedItemExiting]: false})} fontSize="inherit" /> 
          {'acceptBTC'}
        </Typography>
        </MuiLink>

        <Typography variant="h4" component="h1" gutterBottom>
          Smart move! Now, let's get you started accepting Bitcoin & other cryptocurrency payments right away.
        </Typography>

        <div>&nbsp;</div>

        <Typography>
        <i>*Please check your inbox to confirm your email so we can better serve you.</i>
        </Typography>

        <div>&nbsp;</div>

        <Typography variant="h5" component="h5" gutterBottom>
         Let's begin. The process is simple, 3 steps.
        </Typography>

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         1. First, sign up for free account here: <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step1" target="_blank">
          STEP 1
        </Button>
        </Typography>

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         2. Next, register here (it is also free!): <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step2" target="_blank">
          STEP 2
        </Button>
        </Typography>

        {/*Next, sign up free here: <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step2">
          STEP 2
  </Button>*/}

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         3. Last, integrate #1 and #2. <a href="mailto:support@acceptBTC.co" target="_blank">Email us</a> for help.
        </Typography>

        <div>&nbsp;</div>

        <Typography>
         That's it! Easy, isn't it? Quick to implement, too. <b>You can get up & running accepting Bitcoin payments today!</b> <p>Need inspiration? Check out a real-world example of acceptBTC in action in an eCommerce shop - <i>look for the orange 'Buy with Bitcoin' button </i> on the product page. Their sales are skyrocketing as a result. Give it a try!</p>
        </Typography>

        {/*<div>&nbsp;</div>*/}

        <Button variant="contained" color="grey" component={Link} naked href="https://www.style-element.co/product/mens-silver-grey-classic-aviator-sunglasses?ref=acceptBTC" target="_blank">
          View Example Shop
        </Button>

  <div>&nbsp;</div>

        <Typography style={{fontSize: "12px"}}>
        <i>Why do we offer this free educational service? </i> Bitcoin revolutionized "money" forever. Your business will profit from the cryptocurrency innovations now becoming more & more mainstream by the minute. The time has arrived for <i>you</i> to get paid in Bitcoin instead of traditional fiat currency variants. The 3 step method above is <i>by far</i> the quickest & easiest way to start accepting Bitcoin as a payment method in the year 2021. You don't have to be a coder to implement, anyone can configure the setup quickly. You can get started today. With our setup, you don't have to wait on the blockchain to complete processing the transactions and receive your crypo payment, nearly 97% of all transactions are approved almost INSTANTLY! We make accepting BTC payments just as easy as accepting traditional payments like credit and debit cards. Are you accepting Bitcoin payments yet? Time to to act <b>now ⏱️ </b>
        </Typography>

      <div>&nbsp;</div>

<div
  style={{
  display: "flex",
  justifyContent: "left",
  marginBottom: "-8px"
  }}
  >

  <span style={{
  marginTop: "12px",
  }}>Get your&nbsp;</span>

  <Image
  style={{textAlign: "center"}}
  src="/external/Bitcoin_accepted_here_printable.png"
  alt="Add a 'Bitcoin Accepted Here' badge to your website"
  width={135}
  height={50}
  /> 

  <span style={{
  marginTop: "12px",
  }}>&nbsp;badge today!</span>

  </div>

        {/*<div>&nbsp;</div>
        <div>&nbsp;</div>*/}
        
      </Box>

      <Address />

      <div>&nbsp;</div>

<Typography style={{fontSize: "12px", textAlign: "center"}}>
  <Copyright />
</Typography>

        <div>&nbsp;</div>
    </Container>
  );
}

ThankYou.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThankYou);