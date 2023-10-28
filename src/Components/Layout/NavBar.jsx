import React from "react";
import Toggle from "../Toggle";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="nav" id="Home">
        <h3 className="nav-logo" id="Mohsin">Mohsin</h3>

      <span className="nav-box">
        <ul className="nav-links-container">
          <Link spy={true} to="Services" smooth={false}>
            <a className="nav-links">Skills</a>
          </Link>

          <Link spy={true} to="projects" smooth={false}>
            <a className="nav-links">project's</a>
          </Link>

          <Link spy={true} to="About Me" smooth={false}>
            <a className="nav-links">About Me</a>
          </Link>

          <Link spy={true} to="Contact" smooth={false}>
            <button className="contact-button">Contact Me</button>
          </Link>
        </ul>
      </span>
    </nav>
  );
};

export default NavBar;
