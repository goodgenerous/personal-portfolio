import React from "react";
import { Container } from "react-bootstrap";
import "../styles.css";
import PhotoBagus from "../img/PhotoBagus.png";
import { Link as ScrollLink } from "react-scroll";
import CountUp from "react-countup";
import ButtonComponent from "./buttonComponent";

const JumbotronComponent = () => {
  return (
    <div className="jumbotron jumbotron-fluid min-vh-100">
      <Container>
        <div id="jumbotronFlex" className="d-flex">
          <div
            id="jumbotronContent"
            className="d-flex flex-column mt-5"
            data-aos="fade-up"
          >
            <p id="jumbotronDesc">Hello, I'm Bagus Dermawan &#128075;</p>
            <h1 id="jumbotronText" className="mt-4 mb-4">
              <b>
                UI/UX &<br />
                Website Development
                <br /> Enthusiast
              </b>
            </h1>
            <p id="jumbotronDesc" className="mb-4">
              Greetings! I am an ardent aficionado of UI/UX and website
              development, dedicated to crafting exquisite digital experiences
              that seamlessly blend aesthetics with functionality.
            </p>
            <div className="d-grid gap-2 d-md-block">
              <ScrollLink to="section-services" smooth={true} duration={500}>
                <ButtonComponent
                  name="secondary"
                  title="Explore More"
                  link=""
                />
              </ScrollLink>
            </div>
          </div>
          <div
            id="jumbotronPhoto"
            className="d-flex flex-column pt-4"
            data-aos="fade-up"
          >
            <img src={PhotoBagus} alt="HeroPhoto" />
          </div>
        </div>
        <div className="wrapper mt-5" data-aos="fade-up">
          <div className="box-container">
            <i
              id="icon-stats"
              style={{ color: "white", fontSize: "2.5em", textAlign: "center" }}
              className="fa-solid fa-user-gear"
            ></i>
            <span className="num-years" data-val="3">
              <span className="d-flex flex-row">
                <CountUp end={4} />
                &nbsp;Years
              </span>
            </span>
            <span className="text">Experience</span>
          </div>
          <div className="box-container">
            <i
              id="icon-stats"
              style={{ color: "white", fontSize: "2.5em", textAlign: "center" }}
              className="fa-solid fa-folder-open"
            ></i>
            <span className="num" data-val="10">
              <span className="d-flex flex-row">
                <CountUp end={10} />+
              </span>
            </span>
            <span className="text">Projects</span>
          </div>
          <div className="box-container">
            <i
              id="icon-stats"
              style={{ color: "white", fontSize: "2.5em", textAlign: "center" }}
              className="fa-solid fa-handshake-simple"
            ></i>
            <span className="num" data-val="3">
              <span className="d-flex flex-row">
                <CountUp end={3} />+
              </span>
            </span>
            <span className="text">Partners</span>
          </div>
          <div className="box-container">
            <i
              id="icon-stats"
              style={{ color: "white", fontSize: "2.5em", textAlign: "center" }}
              className="fa-solid fa-building"
            ></i>
            <span className="num">
              <span className="d-flex flex-row">
                <CountUp end={3} />+
              </span>
            </span>
            <span className="text">Companies</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
