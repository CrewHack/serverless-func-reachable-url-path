import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../src/Link';

export default function Copyright() {

  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="/privacy-policy">
        Privacy Policy
      </Link>
      <div>&nbsp;</div>
      {'Copyright © '}
      <Link color="inherit" href="https:/acceptbtc.co/">
        acceptBTC
      </Link>{' '}
      {new Date().getFullYear()}.
      <div><i>{'Bitcoin Payment Technology Education & Integration Company'}</i></div>
      <div>&nbsp;</div>
    </Typography>
  );
}