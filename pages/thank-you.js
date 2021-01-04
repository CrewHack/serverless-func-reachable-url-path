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

export default function ThankYou() {
  
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Smart move! Now, let's get you started accepting Bitcoin & other cryptocurrency payments right away.
        </Typography>

        <div>&nbsp;</div>

        <Typography>
        <i>*Please check your inbox to confirm your email so we can better serve you.</i>
        </Typography>

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         Let's begin. The process is simple, 3 steps.
        </Typography>

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         1. First, sign up for a free account here: <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step1" target="_blank">
          STEP 1
        </Button>
        </Typography>

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         2. Next, sign up for a free account here: <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step2" target="_blank">
          STEP 2
        </Button>
        </Typography>

        {/*Next, sign up free here: <Button variant="contained" color="primary" component={Link} naked href="https://bit.ly/acceptBTC-step2">
          STEP 2
  </Button>*/}

        <div>&nbsp;</div>

        <Typography variant="h6" component="h1" gutterBottom>
         3. Lastly, add #2 to #1. <a href="mailto:support@acceptBTC.co" target="_blank">Email us</a> if you need help.
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
        <i>Why do we offer this free educational service? </i> Bitcoin revolutionized "money" forever. Your business will profit from the cryptocurrency innovations now becoming more & more mainstream by the minute. We believe in crypto. The 3 step method we describe above is <i>by far</i> the quickest & easiest way to start accepting Bitcoin as a payment method in the year 2021. But the clock is ticking. And you're not accepting Bitcoin payments yet?? It's time to to act <b>now ⏱️ </b>
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
  }}>Follow the 3 steps above to get your&nbsp;</span>

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

        <div>&nbsp;</div>
        <div>&nbsp;</div>
        
      </Box>

      <Address />
      
      <Copyright />
        <div>&nbsp;</div>
    </Container>
  );
}