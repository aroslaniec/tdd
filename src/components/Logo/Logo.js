import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Logo.scss";
import { APP_NAME } from "../../constants";

class Logo extends Component {
  static propTypes = {
    pathToSrc: PropTypes.string.isRequired,
    title: PropTypes.string
  };
  static defaultProps = {
    title: APP_NAME
  };
  static displayName = "Logo";

  render() {
    return (
      <div className="logo">
        <div className="logo__wrapper">
          <img src={this.props.pathToSrc} alt={this.props.title} />
        </div>
      </div>
    );
  }
}

export default Logo;
