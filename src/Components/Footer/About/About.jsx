import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="About-container" id="About Me">
      <div
        className="About-me"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1>About Me...</h1>

        <p>
          Welcome to my digital playground, where pixels come to life and
          creativity knows no bounds. I'm Mohsin Khan, a passionate and aspiring
          Frontend Developer ready to embark on a journey of transforming ideas
          into seamless user experiences. As a recent graduate in Commerce with
          Computer Application, I bring a fresh perspective and a hunger to
          learn and grow in the dynamic world of web development. My love for
          clean intuitive design and my knack for turning code into captivating
          visuals drive my pursuit of excellence in Frontend Development. Feel
          free to explore my portfolio, where each project tells a story of
          challenges conquered and creativity unleashed. If you're looking for a
          dedicated and innovative Frontend Developer who is eager to make a
          mark in the industry, let's connect and explore the possibilities
          together. The digital realm is my canvas, and I'm excited to paint the
          future with engaging and immersive web experiences.
          <br />
          <span> I am excited to get a entry in TechWorld.... </span>
        </p>
      </div>
    </div>
  );
};

export default About;
