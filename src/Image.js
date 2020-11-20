import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      errored: false,
    };
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc,
        errored: true,
      });
    }
  }

  render() {
    const { src } = this.state;
    const {
      src: _1,
      fallbackSrc: _2,
      ...props
    } = this.props;

    return (
      <img
        src={src}
        onError={this.onError}
        width={props.width}
        height={props.height}
        display={props.display}
        //visbility={props.visibility}
        {...props}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
  visibility: PropTypes.string
};