import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function ThankYou() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Thank you for your interest!
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
         A rep from acceptBTC will be in touch soon. *Please check your email inbox to confirm your subscription in order to receive a follow-up.
        </Typography>

        <Typography>
         In the meantime, please check out a real-world example of acceptBTC in action in an eCommerce shop - look for the orange 'Buy with Bitcoin' button on the product page. It's live, give it a try!: <Button variant="contained" color="primary" component={Link} naked href="https://www.style-element.co/product/mens-silver-grey-classic-aviator-sunglasses">
          View Example
        </Button>
        </Typography>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Copyright />
      </Box>
    </Container>
  );
}