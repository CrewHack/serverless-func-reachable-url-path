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

const textArray = ["Does your business accept Bitcoin yet?", "It's 2021, crypto is here to stay.", "Add a 'Buy with Bitcoin' button today!", "Increase your revenue with crypto!", "We'll help you hook it all up.", "We specialize in payment technology.", "Accept crypto payments instantly.", "Accept crypto payments securely.", "Start accepting BTC payments today!"];

class ProTip extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentWillUnmount() {
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
      <Typography className={classes.root} color="textSecondary">
        <LightBulbIcon color="error" className={classes.lightBulb} />
        {textThatChanges}
      </Typography>
    )
  }
}

export default ProTip;
