import Navbar from "./Components/navbar/Navbar";
import Introduction from "./Components/intro/Introduction";
import Education from "./Components/edu/Education";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";
import Conatct from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Introduction />
        <Education />
        <Skills />
        <Projects />
        <Conatct />
        <Footer />
      </>
    );
  }
}
