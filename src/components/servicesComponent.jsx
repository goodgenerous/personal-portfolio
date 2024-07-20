import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faLaptopCode,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function ServicesComponent() {
  const dataService = [
    {
      titleService: "UI UX",
      iconService: faPalette,
      descService:
        "We design intuitive and visually appealing digital experiences, ensuring seamless and engaging user interactions that enhance satisfaction and drive project success.",
    },
    {
      titleService: "Web Development",
      iconService: faLaptopCode,
      descService:
        "We develop responsive, high-performance websites using cutting-edge technologies, guaranteeing optimal functionality, security, and user experience.",
    },
    {
      titleService: "Product Management",
      iconService: faUserGroup,
      descService:
        "We manage product development from concept to launch, strategically aligning with business goals and user needs to deliver successful and impactful products.",
    },
  ];

  return (
    <div id="services" className="mt-5" data-aos="fade-up">
      <h1 id="jumbotronText">
        <b>
          Our Outstanding <span id="gradient-text">Services</span>
        </b>
      </h1>
      <p id="ContentDesc" className="mb-4">
        Each service is designed to cater to your specific needs, ensuring
        high-quality results and exceptional satisfaction. Here’s a closer look
        at how I can help you achieve your digital goals:
      </p>
      <div id="section-services">
        {dataService.map((res, index) => {
          return (
            <div key={index} className="skill-box">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-start">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={res.iconService} />
                  </div>
                </div>
                <div className="title-skill mt-3">
                  <h3 style={{ width: "10%" }}>{res.titleService}</h3>
                </div>
                <div className="desc-skill">{res.descService}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesComponent;
