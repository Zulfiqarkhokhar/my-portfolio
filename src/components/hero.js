import React from "react";
import "./hero.css";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <>
      <div className="container hero">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 decription">
            <h2>
              Hi,
              <br />
              My name is
            </h2>
            <h1>Zulfiqar Ali</h1>
            <h2>Full stack web developer</h2>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 profile">
            <img src={profile}></img>
          </div>
        </div>
      </div>
    </>
  );
}
