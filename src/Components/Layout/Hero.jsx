import React from "react";
import { github,hero,insta ,linkedin, mk} from "../../assets/Img";
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
            <img src={github} />
          </a>
          <a href="https://www.instagram.com/mr_khan0_/">
            <img src={insta}/>
          </a>
          <a href="https://www.linkedin.com/in/mohsin-khan-ab5a75246">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>

      <div className="Hero-img-container">
        <div className="perspective-container">
          <img src={hero} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
