import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "../../Reusable/Heading/Heading";
import "./contact.css";

const gmailIcon = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>;
const twitterIcon = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>;
const instagramIcon = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>;
const facebookIcon = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>;

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-box">
        <Heading text="Contact" />
        <div className="contact-container">
          <div className="contact-text">
            <h1>Get In Touch with me!</h1>
          </div>
          <div className="icon-box">
            <div>
              <a href="#" className="icon icon-gmail">
                {gmailIcon}
              </a>
            </div>
            <div>
              <a href="#" className="icon icon-twitter">
                {twitterIcon}
              </a>
            </div>
            <div>
              <a href="#" className="icon icon-linkedin">
                {linkedInIcon}
              </a>
            </div>
            <div>
              <a href="#" className="icon icon-instagram">
                {instagramIcon}
              </a>
            </div>
            <div>
              <a href="#" className="icon icon-facebook">
                {facebookIcon}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
