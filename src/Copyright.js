import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {

  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      <MuiLink color="inherit" href="/privacy-policy">
        Privacy Policy
      </MuiLink>
      <div>&nbsp;</div>
      {'Copyright © '}
      <MuiLink color="inherit" href="https:/acceptbtc.co/">
        acceptBTC
      </MuiLink>{' '}
      {new Date().getFullYear()}.
      <div><i>{'a Bitcoin Payment Technology Education & Integration Company'}</i></div>
      <div>&nbsp;</div>
    </Typography>
  );
}