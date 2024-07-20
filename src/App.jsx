import React, { useEffect } from "react";
import "./styles.css";
import NavbarComponent from "./components/navbarComponent";
import FooterComponent from "./components/footerComponent";
import JumbotronComponent from "./components/jumbotronComponent";
import HeroComponent from "./components/heroComponent";
import ServicesComponent from "./components/servicesComponent";
import { Container } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";
import SectionPortfolio from "./components/sectionPortfolio";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavbarComponent />
      <JumbotronComponent />
      <Container>
        <ServicesComponent />
        <HeroComponent />
        <SectionPortfolio />
      </Container>
      <FooterComponent />
    </>
  );
}

export default App;
