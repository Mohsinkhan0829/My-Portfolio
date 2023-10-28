import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {

    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <div className="About-container" id="About Me">
      <div className="About-me" 
      data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

        <h1>About Me...</h1>

        <p>
          My name is Mohsin, I have been studying Commerce with computer. at the
          time i was in collage i love to using computers, In order to start my
          career i choose Web development because of i like to create new things
          in technologies. I started learning tech-languages like
          html,Css,Bootstrap and javascript from online source like Udemy and
          Youtube, after that i join E-skill Web for Learning new technologies
          like React and Redux with it i also learn html css and javascript and
          create lots of projects like WeatherApp, NewsApp, CryptoApp,
          E-Commerce, Todos, details-list, Expense-Manager etc. Let me introduce
          myself in 7 words. Responsible, creative, open-minded, friendly and
          ambitious web developer.
          <br />
          <span > I am excited to get a entry in TechWorld.... </span>
        </p>
      </div>
    </div>
  );
};

export default About;
