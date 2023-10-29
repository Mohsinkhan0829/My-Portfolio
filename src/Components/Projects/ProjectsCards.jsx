import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CryptoApp, Nothing, expenseManager, weatherApp } from "../../assets/Images";

const ProjectsCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="Projects-card" data-aos="zoom-in-up">
          <div className="Project-card-img">
            <img src={weatherApp} />
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
            <img src={Nothing} />
          </div>

          <div className="Project-card-content">
            <h4>Nothing-clone</h4>
            <p>
              Developed a clone of nothing phone by using HTML and CSS to get
              experience in creating the layout of web pages,this practice
              provides a practical hands-on experience in building a structure of the original site.
            </p>
          </div>
          <a href="https://nothing-phone-clone.vercel.app/">
            <button>View More</button>
          </a>
        </div>

        <div className="Projects-card" data-aos="zoom-in-down">
          <div className="Project-card-img">
            <img src={CryptoApp} />
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
            <img src={expenseManager} />
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
