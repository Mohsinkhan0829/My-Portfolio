import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { bootstrap, css, desined, html, js, material, react, webicon } from "../../assets/Images";

const ServicesCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="cards">
      <div data-aos="fade-right" className="Card" style={{ left: "25rem" }}>
        <img src={webicon} alt="" />

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
        <img src={desined} alt="" />
      <div className="Design-icons">
      <img src={bootstrap}/>
      <img src={material}/>
      </div>
      </div>
    </div>
  );
};

export default ServicesCards;
