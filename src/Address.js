import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Address() {
  return (
    
    <Typography variant="body1" color="textSecondary" align="center">
        <address >
        <div>1110 Nuuanu Ave</div>
        <div>Suite 5043</div>
        <div>Honolulu, HI 96817</div>
        <div>USA</div>

        <div><a href="mailto:support@acceptbtc.co" target="_blank">support@acceptbtc.co</a></div>
        
        <a href="https://m.me/acceptbtc" target="_blank">m.me/acceptbtc</a>
        </address>
        
    </Typography>
  );
}