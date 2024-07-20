import React, { useEffect, useState } from "react";
import "../styles.css";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import LogoBD from "../img/LogoBD.png";
import ButtonComponent from "./buttonComponent";
import { Link as ScrollLink } from "react-scroll";

function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 990);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 990);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavbarToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={isScrolled ? "navbar-scrolled" : ""}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={LogoBD} alt="Logo" width="40px" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
          className="navbar-hamburger"
        />
        <Navbar.Collapse
          id="navbarSupportedContent"
          className="justify-content-center"
          in={isExpanded}
        >
          <Nav className="mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink to="services" smooth={true} duration={500}>
                <Nav.Link>Services</Nav.Link>
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink to="section-portfolio" smooth={true} duration={500}>
                <Nav.Link>Portfolio</Nav.Link>
              </ScrollLink>
            </Nav.Item>
          </Nav>
          {isSmallScreen && isExpanded && (
            <Form className="mb-3" role="search">
              <ButtonComponent name="primary" title="Contact Me" Link="" />
            </Form>
          )}
        </Navbar.Collapse>
        {!isSmallScreen && (
          <Form className="d-flex" role="search">
            <ButtonComponent name="primary" title="Contact Me" Link="" />
          </Form>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
