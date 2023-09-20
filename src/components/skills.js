import React from "react";
import "./skills.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.png";
import tailwind from "../assets/tailwind.svg";
import sass from "../assets/sass.svg";
import postman from "../assets/postman.png";
import git from "../assets/git.svg";
import github from "../assets/gihub.svg";
import vscode from "../assets/vscode.svg";
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
        <div className="row mt-3">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={tailwind} alt="tailwind"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={sass} alt="sass"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={git} alt="git"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={postman} alt="postman"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={vscode} alt="vscode"></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img src={github} alt="github"></img>
          </div>
        </div>
      </div>
    </>
  );
}
