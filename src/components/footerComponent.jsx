import "../styles.css";
import LogoWithName from "../img/LogoWithName.png";
import { Link as ScrollLink } from "react-scroll";

function FooterComponent() {
  return (
    <footer style={{ background: "black" }}>
      <div className="container mt-5 pt-5">
        <div className="row mb-4">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="footer-text pull-left">
              <div className="d-flex mb-4">
                <img src={LogoWithName} width="30%" />
              </div>
              <div className="social mt-2 mb-3">
                <a href="https://www.linkedin.com/in/bagusdermawan/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/bagusdermawan27/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2"></div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <ScrollLink to="jumbotronFlex" smooth={true} duration={500}>
              <a className="nav-footer" href="/">
                Home
              </a>
            </ScrollLink>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <ScrollLink to="services" smooth={true} duration={500}>
              <a className="nav-footer" href="/">
                Services
              </a>
            </ScrollLink>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <ScrollLink to="section-portfolio" smooth={true} duration={500}>
              <a className="nav-footer" href="/">
                Portfolio
              </a>
            </ScrollLink>
          </div>
        </div>
        <hr className="hr-footer" />
        <div className="divider mb-4"> </div>
        <div className="row" style={{ fontSize: "10px" }}>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-left" style={{ color: "white" }}>
              <p>
                <i className="fa fa-copyright"></i> Bagus Dermawan @2024. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
