import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="intro-container ">
        
        <h1 className="wrapper">
          Hi,I am
          <div class="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                Mohsin khan
              </text>
            </svg>
          </div>
        </h1>
        <p className="position">Front-end Developer</p>
        <p className="profile-introduction">
          Welcome to my portfolio! I'm a dedicated and creative frontend
          developer with a knack for crafting immersive and user-friendly
          digital experiences.
        </p>
        <div className="i-icons">
          <a href="https://github.com/Mohsinkhan0829">
            <img src="/src/img/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/mr_khan0_/">
            <img src="/src/img/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/mohsin-khan-ab5a75246">
            <img src="/src/img/linkedin.png" alt="" />
          </a>
        </div>
      </div>

      <div className="Hero-img-container">
        <div className="perspective-container">
          <img src="/src/img/mk img.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
