import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { bootstrap, css, html, js, material, react } from "../../assets/Img";

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
        <img src={html} id="html-png"/>
        <img src={css} alt="" srcset="" />
        <img src={js} alt="" srcset="" />

        </div>
      </div>

      <div
        className="Card"
        data-aos="fade-left"
        style={{ top: "10rem", left: "2rem" }}
      >
        <img className="react-png"  src={react}/>
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
      <img src={bootstrap}/>
      <img src={material}/>
      </div>
      </div>
    </div>
  );
};

export default ServicesCards;
