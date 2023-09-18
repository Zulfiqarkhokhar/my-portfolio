import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import git from "../assets/gitVector.svg";
import linkedin from "../assets/linkedinVector.svg";
import twiter from "../assets/twiterVector.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo}></img>
          </a>
          <ul class="navbar-nav d-flex flex-row Navlist">
            <li class="nav-item ms-5">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item ms-5">
              <a className="nnav-link" href="#">
                <img src={git}></img>
              </a>
            </li>
            <li class="nav-item ms-3">
              <a className="nnav-link" href="#">
                <img src={twiter}></img>
              </a>
            </li>
            <li class="nav-item ms-3">
              <a className="nnav-link" href="#">
                <img src={linkedin}></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
