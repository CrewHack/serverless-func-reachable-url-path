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

function Start(props) {  

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

        <Typography>
        <p>Launching acceptBTC.co...</p>

        </Typography>

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

Start.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Start);