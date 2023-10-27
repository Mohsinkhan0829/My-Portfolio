import NavBar from "./Components/Layout/NavBar";
import Hero from "./Components/Layout/Hero";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Footer/About/About";
import ToggleContext, { ThemeProvider } from "./Context";
import ProjectsIntro from "./Components/Projects/ProjectsIntro";

const Portfolio = () => {

return (
    <ThemeProvider>
     
      <NavBar />
      <Hero />
      <Services />
      <ProjectsIntro/>
      <Projects />
      <About />
      <ContactUs />
      <Footer />
    </ThemeProvider>
  );
};

export default Portfolio;
