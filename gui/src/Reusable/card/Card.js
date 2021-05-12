import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3,
  faBootstrap,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import "./card.css";

const htmlIcon = <FontAwesomeIcon icon={faHtml5} style={{ color: "red" }} />;
const reactIcon = (
  <FontAwesomeIcon icon={faReact} style={{ color: "#61DBFB" }} />
);
const cssIcon = <FontAwesomeIcon icon={faCss3} style={{ color: "#00cc6a" }} />;
const bootstrapIcon = (
  <FontAwesomeIcon icon={faBootstrap} style={{ color: "#00008B" }} />
);
const javascriptIcon = (
  <FontAwesomeIcon icon={faJs} style={{ color: "#f0db4f" }} />
);
const pythonIcon = (
  <FontAwesomeIcon icon={faPython} style={{ color: "#4b8bbe" }} />
);

export default class Card extends Component {
  render() {
    const {
      image,
      text,
      desc,
      html,
      css,
      javascript,
      python,
      react,
      bootstrap,
    } = this.props;
    return (
      <>
        <div className="card-container">
          <div className="card">
            <div className="card-img-box">
              <img src={image} alt="Image" className="card-img"></img>
            </div>
            <div className="card-text">
              <h5 className="card-heading">{text}</h5>
              <div className="card-tech">
                {react === "true" ? (
                  <p className="card-tech-icon">{reactIcon}</p>
                ) : null}

                {python === "true" ? (
                  <p className="card-tech-icon">{pythonIcon}</p>
                ) : null}

                {javascript === "true" ? (
                  <p className="card-tech-icon">{javascriptIcon}</p>
                ) : null}

                {html === "true" ? (
                  <p className="card-tech-icon">{htmlIcon}</p>
                ) : null}

                {css === "true" ? (
                  <p className="card-tech-icon">{cssIcon}</p>
                ) : null}

                {bootstrap === "true" ? (
                  <p className="card-tech-icon">{bootstrapIcon}</p>
                ) : null}
              </div>
              <p className="card-description">{desc}</p>
              <div className="card-btn">
                <button className="card-project-btn">View Project</button>
                <button className="card-code-btn">View Code</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
