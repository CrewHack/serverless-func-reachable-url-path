import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
//import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Address from '../src/Address';
//import Image from '../src/Image';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
//import MUICookieConsent from 'material-ui-cookie-consent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import PowerIcon from '@material-ui/icons/Power';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
/*import Grid from '@material-ui/core/Grid';
import TimerIcon from '@material-ui/icons/Timer';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import SecurityIcon from '@material-ui/icons/Security';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import LinkIcon from '@material-ui/icons/Link';*/
import clsx from 'clsx';
import MainForm from '../src/MainForm';
//import { useCookieWatcher, useCookie } from '@fcannizzaro/react-use-cookie-watcher'
//import Cookies from 'js-cookie';
import Image from 'next/image'
//import { ClassNames } from '@emotion/react';
import MuiLink from '@material-ui/core/Link';
import ReactPlayer from 'react-player';

const styles = {

  image: {
    /*top: "20px!important"*/
    textAlign: "center"
  },

  overlay: {
    display: "none",
    position: "fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 10
  },

  spinner: {
    zIndex: 12,
    display: "none",
    position: "fixed", /* or absolute */
    top: "50%",
    left: "50%"
  },

  disabledDiv: {
    pointerEvents: "none",
    opacity: 0.4
  },
  enabledDiv: {
    pointerEvents: "all",
    opacity: 1
  },
  emojiTwoTone: {
    filter: "grayscale(100%)"
  },
  card: {
    minWidth: 275,
    //backgroundColor: "#ebeff2"
  },
  card2: {
    minWidth: 275,
    backgroundColor: "#fffcf7"
  },
  activatecard: {
    minWidth: 275,
    backgroundColor: "#F7F9FB",
    transition: "all 1s ease",
    animation: `$growShadow 2000ms infinite`
  },
  activatecard2: {
    minWidth: 275,
    backgroundColor: "#fffcf7",
    transition: "all 1s ease",
    /*animation: `$growShadow 2000ms infinite`*/
  },
  open : {
    backgroundColor: "white"
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
  "@keyframes growShadow": {
    "0%": {
      boxShadow: "3px 2px 1px -1px #FF9900, 0px 1px 1px 0px #FF9900, 0px 1px 3px 0px #FF9900", //#4CAF50
    },
    "50%": {
      boxShadow: "5px 4px 3px 1px #FF9900, 2px 2px 2px 1px #FF9900, 2px 3px 5px 2px #FF9900",
    },
    "100%": {
      boxShadow: "3px 2px 1px -1px #FF9900, 0px 1px 1px 0px #FF9900, 0px 1px 3px 0px #FF9900",
    }
  }
};

function Index(props) {

  {/*const timeout = setInterval(() => {
    if (typeof Cookies.get('mySiteCookieConsent') !== "undefined"){
      setCookied(true);
    }
    else
    {
      setCookied(false);
    }
  }, 500);*/}

  const { classes } = props;

  const drawerToggle = (e) => { 

    //e.preventDefault(); 
    //e.stopPropagation();
    //window.scrollTo(0,-300); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px. 

    setOpen(!open);
  };

  const submit = async (data) => { 

    document.getElementById("overlay").style.display = "block";
    document.getElementById("spinner").style.display = "block";

    //("SUBMIT!");

    //console.log(data);

    //drawerToggle();

    // https://serverless-func-reachable-url-path.vercel.app
    const res = await fetch("/api/performance", {
      headers: {
         "Authorization": "1234567890abcdef",
         "X-Secret-Key": "djewbdjnewdjknwejkdnkjwe"
       },
       method: 'POST',
       body: JSON.stringify({email: data})
    });

    //const test = await res.json();

    //console.log(test.response);

    document.getElementById("overlay").style.display = "none";
    document.getElementById("spinner").style.display = "none";

    localStorage.setItem("submitted", "yes")

    //if (process.browser) {
      window.location = "/thank-you";
    //}

  };

  const [open, setOpen] = React.useState(false);

  //const [url, setUrl] = React.useState('');

  //const [cookied, setCookied] = React.useState(false);

  return (

    <Container maxWidth="sm">

      <div className={classes.overlay} id="overlay"></div>
      <img className={classes.spinner} id="spinner" src="/external/847.gif" alt="Submitting acceptBTC form" />

      <Box my={4}>

        {/*<MUICookieConsent 
            cookieName="mySiteCookieConsent"
            //componentType="Dialog" // default value is Snackbar
            message={<span aria-label="chilli" role="img">Welcome to <PowerIcon fontSize="inherit"/>URLpow.<div className={classes.emojiTwoTone}>&nbsp;&nbsp;</div><div className={classes.emojiTwoTone}>This site uses a few cookies 🍪. Click 'Accept' to continue to site. GDPR, done. ✅</div></span>}
            //"
        />

        <div className={clsx(!cookied && classes.disabledDiv, cookied && classes.enabledDiv)}> cookie {hasAcceptedCookies ? 'found' : 'not found'}*/}

        {/*{open && */}
        <MuiLink color="inherit" href="/">
        <Typography style={{opacity: 1}} align="left" variant="h1" component="h1" gutterBottom > 
          <AccountBalanceWalletOutlinedIcon className={clsx(classes.animatedItem, {[classes.animatedItemExiting]: open})} fontSize="inherit" />
          {!open ? 'acceptBTC' : 'acceptBTC'}
        </Typography>
        </MuiLink>
        {/*}*/}

        {/*{!open &&  */}
        <Typography variant="h2" component="h2" gutterBottom>
          Start accepting Bitcoin & other crypto payments today.
        </Typography>
        {/*}*/}

        {/*{!open && */}
        <Typography gutterBottom>
          
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
          className = {classes.image}
          src="/external/Bitcoin_accepted_here_printable.png"
          alt="Add a 'Bitcoin Accepted Here' badge to your website"
          width={135}
          height={50}
          /> 

          <span style={{
          marginTop: "12px",
          }}>&nbsp;badge today!</span>

          </div>
          
        </Typography>
        {/*}*/}
        
        <div>&nbsp;</div>
        
        {/*{!open && */}
        {/*<div>
        <Image
          src="/external/Bitcoin_accepted_here_printable.png"
          alt="Add a 'Bitcoin Accepted Here' badge to your website"
          width={100}
          height={38}
        />
        <div>&nbsp;</div>
        </div>*/}
        {/*}*/}

        {/*{open &&
          <div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div></div>
          </div>
        }*/}

        <Card className={clsx(!open && classes.card, open && classes.activatecard)} style={{textAlign: "center", justifyContent: "center", alignItems: "center", marginTop: "-1px"}}>
            <CardContent style={{paddingBottom: "2px"}}>
   
                <MainForm submit={submit.bind(this)} drawerToggle={drawerToggle.bind(this)}/>

                {/*<TextField className={clsx(!open && classes.close, open && classes.open)} onFocus={drawerToggle} onBlur={drawerToggle} fullWidth id="standard-basic" label="&nbsp;&nbsp;Enter URL to measure power"/>*/}
            </CardContent>
            {/*<CardActions>
                <Button style={{color: "#FFFFFF", backgroundColor: "#14a37f"}} fullWidth color="primary" variant="contained">Measure URL power</Button>
            </CardActions>*/}
        </Card>

        <span>&nbsp;&nbsp;</span>

        <Card style={{marginBottom: "0px", marginTop: "-8px"}} className={clsx(!open && classes.card2, open && classes.activatecard2)}>
            <CardContent style={{paddingBottom: "0px", marginTop: "-8px"}}>
                {/*<Grid container>
                    <Grid style={{width: "16.66%"}} item >
                        <Card className={clsx(!open && classes.close, open && classes.open)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}><NetworkCheckIcon fontSize="large" style={{color:"#00000087"}}/></Card>
                    </Grid>
                    <Grid style={{width: "16.66%"}} item >
                        <Card className={clsx(!open && classes.close, open && classes.open)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}><SecurityIcon fontSize="large" style={{color:"#00000087"}}/></Card>
                    </Grid>
                    <Grid style={{width: "16.66%"}} item >
                        <Card className={clsx(!open && classes.close, open && classes.open)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}><TimerIcon fontSize="large" style={{color:"#00000087"}}/></Card>
                    </Grid>
                    <Grid style={{width: "16.66%"}} item >
                        <Card className={clsx(!open && classes.close, open && classes.open)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}><StarHalfIcon fontSize="large" style={{color:"#00000087"}}/></Card>
                   </Grid>      
                    <Grid style={{width: "16.66%"}} item >
                        <Card className={clsx(!open && classes.close, open && classes.open)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}><LinkIcon fontSize="large" style={{color:"#00000087"}}/></Card>
                    </Grid>    
                    <Grid style={{width: "16.66%"}} item >
                        <Card className={clsx(!open && classes.close, open && classes.open)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}><PowerIcon fontSize="large" style={{color:"#00000087"}}/></Card>
                    </Grid>                                                                             
                </Grid>*/}
                 <video width="100%" src={require('../public/external/btc-accepted-here.mp4')} id="promo-video" preload="true" autoPlay muted></video>  
            </CardContent>
            <CardActions style={{paddingTop: "0px", paddingBottom: "0px"}}>
                {!open && <ProTip/>}
                {open && <Typography className={classes.root} color="error">Let's do this!</Typography>}
            </CardActions>
        </Card>

        {/*</div>*/}

      </Box>

      <Typography style={{fontSize: "12px", textAlign: "center"}}>
        <i>Why do we offer this free educational service? </i> Bitcoin revolutionized "money" forever. Your business will profit from the cryptocurrency innovations now becoming more & more mainstream by the minute. The time has arrived to get paid in Bitcoin instead of traditional fiat currency variants. The 3 step method we will teach you is <i>by far</i> the quickest & easiest way to start accepting Bitcoin as a payment method in the year 2021. You don't have to be a coder to implement, anyone can configure the setup quickly. You can get started today. With our setup, you don't have to wait on the blockchain to complete processing the transactions and receive your crypo payment, nearly 97% of all transactions are approved almost INSTANTLY! We make accepting BTC payments just as easy as accepting traditional payments like credit and debit cards. Are you accepting Bitcoin payments yet? Time to to act <b>now ⏱️ </b>
      </Typography>

      <div>&nbsp;</div>

      <Address />

      <div>&nbsp;</div>

      {/*{!open &&*/}
      <Typography style={{fontSize: "12px", textAlign: "center"}}>
        <Copyright />
      </Typography>
      {/*}*/}

    </Container>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);