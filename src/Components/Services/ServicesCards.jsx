import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="cards">
      <div data-aos="fade-right" className="Card" style={{ left: "25rem" }}>
        <img src="src/img/webdeveloper.png" alt="" />
        <p>Web Developer</p>

        <div className="webdeveloper-icon">
        <img src="./src/img/html-logo.png" id="html-png"/>
        <img src="./src/img/css-png.webp" alt="" srcset="" />
        <img src="./src/img/js.png" alt="" srcset="" />

        </div>
      </div>

      <div
        className="Card"
        data-aos="fade-left"
        style={{ top: "10rem", left: "2rem" }}
      >
        <img className="react-png"  src="./src/img/react.png"/>
        <p>React.js , Redux</p>
      </div>

      <div
        className="Card"
        data-aos="zoom-in-down"
        style={{ top: "22rem", left: "20rem" }}
      >
        <img src="/src/img/desined.png" alt="" />
        <p>Design</p>
      <div className="Design-icons">
      <img src="./src/img/bootstrap.png"/>
      <img src="./src/img/material.webp"/>
      </div>
      </div>
    </div>
  );
};

export default ServicesCards;
