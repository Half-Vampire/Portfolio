import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const icon = <FontAwesomeIcon icon={faCopyright} />;

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <li className="foot-link">
            <a href="#">Education</a>
          </li>
          <li className="foot-link">
            <a href="#">Skills</a>
          </li>
          <li className="foot-link">
            <a href="#">Projects</a>
          </li>
        </div>
        <div>
          <h4>Copyright {icon} Tarun. All rights reserved.</h4>
        </div>
      </div>
    );
  }
}
