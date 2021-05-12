import React, { Component } from "react";
import Heading from "../../Reusable/Heading/Heading";
import "./edu.css";

export default class Education extends Component {
  render() {
    return (
      <div className="edu">
        <Heading text="Education" />
        <h2>Hello from education</h2>
      </div>
    );
  }
}
