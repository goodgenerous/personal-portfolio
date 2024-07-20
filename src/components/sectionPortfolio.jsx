import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import PortoComponent from "./portoComponent";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";

const SectionPortfolio = () => {
  const [activeKey, setActiveKey] = useState("UI");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="section-portfolio"
      className="d-flex flex-column justify-content-center align-items-center mt-3"
    >
      <h1 className="text-center mt-5" data-aos="fade-up">
        <strong>
          Dive into <span id="gradient-text">My Portfolio</span>
        </strong>
      </h1>
      <p id="ContentDesc" data-aos="fade-up">
        Within this section, you'll find a curated selection of projects that
        demonstrate my passion for creating seamless user experiences and
        visually striking digital platforms.
      </p>
      <TabContainer activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Nav
          variant="underline"
          className="justify-content-center mb-4"
          data-aos="fade-up"
        >
          <Nav.Item>
            <Nav.Link eventKey="UI">UI/UX</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Web">Website</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent>
          <TabPane eventKey="UI">
            <PortoComponent titlePorto="UI" />
          </TabPane>
          <TabPane eventKey="Web">
            <PortoComponent titlePorto="Web" />
          </TabPane>
        </TabContent>
      </TabContainer>
    </div>
  );
};

export default SectionPortfolio;
