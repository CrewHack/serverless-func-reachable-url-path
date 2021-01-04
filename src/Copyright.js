import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https:/acceptbtc.co/">
        acceptBTC
      </MuiLink>{' '}
      {new Date().getFullYear()}.
      <div>&nbsp;</div>
    </Typography>
  );
}