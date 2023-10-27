import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
const ProjectsCards = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
  
      <div className="container">

        

        <div className="Projects-card" data-aos="zoom-in-up">

          <div className="Project-card-img">
            <img src="/src/img/Weather-APp.jpg" />
          </div>

          <div className="Project-card-content">
            <h4>Weather-App</h4>
            <p>
              Create components for displaying the weather information, such as
              the current temperature, weather conditions, forecast, and
              location input field. Implement functionality to allow users to
              enter a location and trigger weather data retrieval.
            </p>
          </div>

          <a href="https://weather-app-tau-snowy.vercel.app/">
            <button>View More</button>
            </a>
        </div>

        <div className="Projects-card" data-aos="zoom-in-down">
          <div className="Project-card-img">
            <img src="/src/img/newsApp.jpeg" />
          </div>

          <div className="Project-card-content">
            <h4>News-App</h4>
            <p>
              Developed a web-based News App that allows users to browse and
              search for the latest news articles from various sources using
              React.js for the frontend.
            </p>
          </div>
          <button>View More</button>

        </div>

        <div className="Projects-card" data-aos="zoom-in-down">
          <div className="Project-card-img">
            <img src="/src/img/crypto-app.png" />
          </div>

          <div className="Project-card-content">
            <h4>Crypto-App</h4>
            <p>
              Create a Crypto App by using React where user search any crypto
              coin and app will be showing all the coin related to user text
              also user can see details and current prices
            </p>
           
          </div>

          <a href="https://crypto-app-umber-rho.vercel.app/">
            <button>View More</button>
            </a>
        </div>

        <div className="Projects-card" data-aos="zoom-in-up">
          <div className="Project-card-img">
            <img src="/src/img/expense-img.jpg" />
          </div>

          <div className="Project-card-content">
            <h4>Expense Manager</h4>
            <p>
              Create an Expense manager using React where the user can add
              income and expenses and the app will show how much the user spent
              and how much is lef
            </p>
            
          </div>
          <a href="https://expanse-manager-app-tmrs.vercel.app/">
            <button>View More</button>
            </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsCards;
