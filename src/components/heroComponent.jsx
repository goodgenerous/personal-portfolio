import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarOn, faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import Phone from "../img/Phone.png";
import Website from "../img/Browser.png";
import ButtonComponent from "./buttonComponent";
import { Link as ScrollLink } from "react-scroll";

const HeroComponent = () => {
  return (
    <>
      <>
        <div id="hero-component" className="mt-5" data-aos="fade-up">
          <div className="hero-desc">
            <div className="mini-logo mb-3">
              <FontAwesomeIcon icon={faCarOn} />
            </div>
            <h1 id="jumbotronText">
              <b>
                Drive Anytime
                <br />
                Anywhere
              </b>
            </h1>
            <p id="ContentDesc">
              Experience the freedom to go anywhere, anytime. Our rental service
              is designed for those who embrace spontaneity, offering a seamless
              and quick way to access a vehicle.
            </p>
            <ScrollLink to="section-portfolio" smooth={true} duration={500}>
              <ButtonComponent name="outline" title="View Project" link="" />
            </ScrollLink>
          </div>
          <div className="image-right">
            <img src={Phone} alt="" />
          </div>
        </div>
        <div id="hero-component-2" data-aos="fade-up">
          <div className="image-left">
            <img src={Website} alt="" />
          </div>
          <div className="hero-desc-2">
            <div className="mini-logo mb-3">
              <FontAwesomeIcon icon={faCompassDrafting} />
            </div>
            <h1 id="jumbotronText">
              <b>
                Crafting Timeless <br />
                Designs
              </b>
            </h1>
            <p id="ContentDesc-2">
              Each of our projects reflects our passion for creating enduring
              beauty, ensuring that our designs remain relevant and inspiring
              for years to come.
            </p>
            <ScrollLink to="section-portfolio" smooth={true} duration={500}>
              <ButtonComponent name="outline" title="View Project" link="" />
            </ScrollLink>
          </div>
        </div>
      </>
    </>
  );
};

export default HeroComponent;
