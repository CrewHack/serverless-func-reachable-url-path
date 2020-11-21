import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const textArray = ["Non-performing URLs lose conversion power.", "Slow loading URLs deter quality traffic.", "You can automate URLpow measuring to achieve continuous power monitoring.", "The URLpow team of URL power experts will human audit your URLs, just ask!", "URLpow is free to use manually, only pay to automate or receive expert human audits.", "We specialize in analyzing URL power!", "You can ask us anything. We don't bite."];

class ProTip extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    const classes = makeStyles((theme) => ({
      root: {
        margin: theme.spacing(6, 0, 3),
      },
      lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1),
      },
    }));

    return (
      <span>
      <span>&nbsp;&nbsp;</span>
      <Typography className={classes.root} color="textSecondary">
        <LightBulbIcon color="primary" className={classes.lightBulb} />
        Did you know?: {textThatChanges}
      </Typography>
      </span>
    )
  }
}

export default ProTip;
