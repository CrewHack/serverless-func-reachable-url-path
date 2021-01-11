import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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
    transition: "all .7s ease",
    animation: `$myEffectExit 1000ms ease`
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
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

function ThankYou(props) {  

  const handleBuyClick = (event) => {
    t2pHandler.openProduct('zsHUksKn');
  };

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
         Let's begin. The process is simple, only <i>2 steps</i>:
        </Typography>

        <div>&nbsp;</div>

        {/*<button className="tap2pay-pay-btn" type="button" onClick={handleBuyClick}>
          Pay using<i className="tap2pay-badge"></i><div className="tap2pay-safe-icons"></div>
        </button>*/}

        {/*<div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         1. First, sign up for free account here: <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step1" target="_blank">
          STEP 1
        </Button>
        </Typography>*/}
   
        <Typography align="left" variant="h6" component="h1" gutterBottom>
         <b>1.</b> First, buy our <b>"BTC Accepted Here" Launch Guide 2021 Edition + Private Consultation </b> on sale for <s style={{color: "red"}}>$49.99</s>&nbsp;<b style={{color: "green"}}>$20.21</b> <i>limited time offer</i>:  
         <Button style={{backgroundColor: "#FF9900"}} className="tap2pay-pay-btn" type="button" onClick={handleBuyClick}>
          Buy with Bitcoin&nbsp;<i style={{fontSize: "12px"}}>-or-</i><div className="tap2pay-safe-icons"></div>
         </Button>
        </Typography>

        <div>&nbsp;</div>

        <Typography align="left" variant="h6" component="h1" gutterBottom>
        <b>2.</b> Next, after receiving payment confirmation please check your email. We'll deliver the 3-Part Launch Guide directly to your inbox over the course of the next 3 days, followed by your private consultation.
        </Typography>

        <div>&nbsp;</div>
        <Typography align="center">__________</Typography>
        <div>&nbsp;</div>

        {/*<Typography align="left" variant="h6" component="h1" gutterBottom>
        <b>3.</b> Last, integrate #1 and #2. <a href="mailto:support@acceptBTC.co" target="_blank">Email us</a> for help.
        </Typography>

       <div>&nbsp;</div>*/}

        <Typography>
        We'll send the 1st installment within 24 hours of your purchase. On Day 3 we'll connect you with a private consultant via Messenger. Together we'll target success. Each of the 3 days leading up to your private consultation requires less than an hour of work on your part. By Day 3 -- in <i>less than</i> 3 hours of work total & no additional hidden expenses -- we'll have you up & running accepting Bitcoin payments! It's that simple. Quick to implement. No paying overpriced consultants, developers or technical "gurus" - Do It Yourself #DIY ! <b>You can started accepting Bitcoin payments today!</b> <p>Need some inspiration? Check out a real-world example of acceptBTC in action in an eCommerce shop - <i>look for the orange 'Buy with Bitcoin' button </i> on the product page. Their sales are skyrocketing as a result. That's where the magic really happens. Give it a try! Yes, our solution works with <i>any</i> business model, not just eCommerce.</p>
        </Typography>

        <Button variant="contained" color="grey" component={Link} naked href="https://www.style-element.co/product/mens-silver-grey-classic-aviator-sunglasses?ref=acceptBTC" target="_blank">
          View Example Shop
        </Button>

        <div>&nbsp;</div>

        <Typography style={{fontSize: "12px", textAlign: "left"}}>
            <i><b>Why do we offer this educational service?</b></i> Bitcoin revolutionized "money" forever. Your business will profit from the cryptocurrency innovations now becoming more & more mainstream by the minute. The time has arrived to get paid in Bitcoin in addition to traditional fiat currency variants. Our gateway also accepts 150+ traditonal payments methods like debit & credit cards & more. The method we'll teach you is <i>by far</i> the quickest & easiest way to start accepting Bitcoin as a payment method in the year 2021. You don't have to be a coder to implement, anyone can configure the setup quickly. You can get started today. With our setup, you don't have to wait on the blockchain to complete processing the transactions and receive your crypo payment, nearly 97% of all transactions are approved almost instantly. We make accepting BTC payments just as easy as accepting traditional payments like credit and debit cards. Are you accepting Bitcoin payments yet? Time to to act <b>now ⏱️ </b>
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