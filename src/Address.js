import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Address() {
  return (
    
    <Typography color="textSecondary" align="center">
        <address >
        <div>1110 Nuuanu Ave</div>
        <div>Suite 5043</div>
        <div>Honolulu, HI 96817</div>
        <div>USA</div>

        <div style={{fontSize: "20px", marginTop: "3px",  marginBottom: "3px"}}><a href="mailto:support@acceptbtc.co" target="_blank">support@acceptbtc.co</a></div>
        
        <div style={{fontSize: "20px", marginTop: "3px",  marginBottom: "3px"}}><a href="https://m.me/acceptbtc" target="_blank" rel="noopener">m.me/acceptbtc</a></div>
        </address>
    </Typography>
  );
}