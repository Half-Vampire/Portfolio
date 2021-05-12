import React, { Component } from "react";
import Me from "./person.png";
import "./intro.css";

export default class Introduction extends Component {
  render() {
    return (
      <>
        <div className="intro">
          <div className="intro-img-box">
            <img src={Me} alt="My image" className="intro-image"></img>
          </div>
          <div className="intro-text">
            <p>
              buoavshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
              fvdvboisndfjsbjfbsdjbndsf vfdauibvsifvbisudfvbiusbfv
              fddvbidsvufsvbusfdvbusdyivayhfuvbdhfvb vadfhuvbidafvb
            </p>
          </div>
        </div>
      </>
    );
  }
}
