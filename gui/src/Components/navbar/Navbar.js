import React, { Component } from "react";
import Projects from "../projects/Projects";
import "./nav.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <ul className="nav">
            <li className="nav-link">
              <a href="#">Education</a>
            </li>
            <li className="nav-link">
              <a href="">Skills</a>
            </li>
            <li className="nav-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-link">
              <button className="nav-btn">Contact Me</button>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
