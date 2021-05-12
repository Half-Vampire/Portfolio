import React, { Component } from "react";
import Heading from "../../Reusable/Heading/Heading";
import Omnifood from "./responsive.png";
import TaskManager from "./taskmanager.png";
import Food2fork from "./food2fork.png";
import Beachresort from "./beachresort.png";
import Card from "../../Reusable/card/Card";
import "./project.css";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="project-box">
        <Heading text="Projects" />
        <Card
          image={TaskManager}
          text="Task Manager"
          react="true"
          python="true"
          javascript="true"
          bootstrap="true"
          html="true"
          css="true"
          desc="A simple task manager built using React in frontend and Django in backend. Created a simple CRUD API and used redux for state management. Django Token Authentication has been used for user authentication."
        />
        <Card
          image={Beachresort}
          text="Beach Resort"
          desc=""
          react="true"
          javascript="true"
          html="true"
          css="true"
        />
        <Card
          image={Food2fork}
          text="Food2Fork Recipies App"
          desc=""
          react="true"
          html="true"
          javascript="true"
          css="true"
          bootstrap="true"
        />
        <Card
          image={Omnifood}
          text="Responsive Web Page"
          desc="A single page responsive website optimised for both mobile and laptop devices."
          html="true"
          css="true"
          javascript="true"
        />
      </div>
    );
  }
}
