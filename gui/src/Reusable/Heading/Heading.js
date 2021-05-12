import React, { Component } from "react";
import "./heading.css";

export default class Heading extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="head-box">
        <h1 className="head-text">
          {text}
          <hr className="head-hr" />
        </h1>
      </div>
    );
  }
}
