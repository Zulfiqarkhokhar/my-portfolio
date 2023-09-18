import React from "react";
import "./skills.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.png";
import bootstrap from "../assets/bootstarp.svg";

export default function Skills() {
  return (
    <>
      <div className="container skills">
        <div className="title">My Tech Skills</div>
        <div className="desc">Technologies I've been working with</div>
      </div>
      <div className="container skillsImg">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={html} alt="html"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={css} alt="css"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={javascript} alt="javascript"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={react} alt="react"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={spring} alt="spring"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={bootstrap} alt="bootstrap"></img>
          </div>
        </div>
      </div>
    </>
  );
}
