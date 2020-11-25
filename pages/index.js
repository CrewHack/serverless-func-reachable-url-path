import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
//import Link from '../src/Link';
import Copyright from '../src/Copyright';
//import Image from '../src/Image';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MUICookieConsent from 'material-ui-cookie-consent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PowerIcon from '@material-ui/icons/Power';
import Grid from '@material-ui/core/Grid';
import TimerIcon from '@material-ui/icons/Timer';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import SecurityIcon from '@material-ui/icons/Security';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import LinkIcon from '@material-ui/icons/Link';
import clsx from 'clsx';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: "#ebeff2"
  },
  activatecard: {
    minWidth: 275,
    backgroundColor: "#F7F9FB"
  },
  open : {
    backgroundColor: "white"
  },
  close: {
    backgroundColor: "#F7F9FB",
  },
  animatedItem: {
    animation: `$myEffect 1000ms ease`
  },
  animatedItemExiting: {
    color: "#94da28",
    transform: "rotate(90deg) ",
    transition: "all .3s ease",
    animation: `$myEffectExit 1000ms ease`
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 100,
    }
  }
};

function Index(props) {

  const { classes } = props;

  const drawerToggle = (event) => { 
    setOpen(!open);
    event.preventDefault();
    event.stopPropagation(); // this can be ignored
  let winScroll = window.scrollY;
  window.scrollTo({
    top: 200
  });
  console.log(winScroll)
  };

  const [open, setOpen] = React.useState(false);

  return (

    <Container maxWidth="sm">

      <Box my={4}>

        <MUICookieConsent 
            cookieName="mySiteCookieConsent"
            componentType="Dialog" // default value is Snackbar
            message="This site uses cookies. Click 'Accept' to continue to site. GDPR, done."
        /> 

        {/*{open && */}
        <Typography align="left" variant="h1" component="h1" gutterBottom > 
          <PowerIcon className={clsx(classes.animatedItem, {[classes.animatedItemExiting]: open})} fontSize="inherit" /> 
          URLpow
        </Typography>
        {/*}*/}

        {!open && <Typography variant="h2" component="h2" gutterBottom>
          Measure any URL's power.
        </Typography>}

        <Card className={clsx(!open && classes.card, open && classes.activatecard)} style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}>
            <CardContent style={{paddingBottom: "2px"}}>
                <TextField className={clsx(!open && classes.close, open && classes.open)} onFocus={drawerToggle} onBlur={drawerToggle} fullWidth id="standard-basic" label="&nbsp;&nbsp;Enter URL to measure power" />
            </CardContent>
            <CardActions>
                <Button style={{color: "#FFFFFF"}} fullWidth color="primary" variant="contained">Measure URL power</Button>
            </CardActions>
        </Card>

        <span>&nbsp;&nbsp;</span>

        <Card style={{marginBottom: "10px", marginTop: "-8px"}} className={clsx(!open && classes.card, open && classes.activatecard)}>
            <CardContent style={{paddingBottom: "4px"}}>
                <Grid container>
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
                </Grid>
            </CardContent>
            <CardActions>
                {!open && <ProTip/>}
                {open && <Typography className={classes.root} color="textSecondary">Let's do this!</Typography>}
            </CardActions>
        </Card>
      </Box>

      <Copyright />

    </Container>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);