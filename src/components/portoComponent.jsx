import React from "react";
import "../styles.css";
import Autoshare from "../img/AutoShare.png";
import Akar from "../img/AkarStudio.png";
import Pertamina from "../img/PertaminaPortfolio.png";
import InsideUMKM from "../img/InsideUMKMPortfolio.png";
import ApplyNow from "../img/ApplyNow.png";
import ButtonComponent from "./buttonComponent";

const ImagePorto = ({
  cardImage,
  cardTitle,
  cardSubtitle,
  cardLogo,
  cardLink,
}) => {
  return (
    <div className="porto-item">
      <img src={cardImage} alt="" />
      <div className="subtitle-porto mt-4">
        <div className="app-dev mt-2 mb-3">
          <i class={cardLogo}></i>
        </div>
        <h5>
          <b>{cardTitle}</b>
        </h5>
        <p className="desc-section">{cardSubtitle}</p>
        <ButtonComponent
          title="Explore Project"
          name="primary"
          link={cardLink}
        />
      </div>
    </div>
  );
};

function PortoComponentUIUX() {
  const dataUI = [
    {
      cardImage: Autoshare,
      cardTitle: "AutoShare App",
      cardSubtitle: "Rent Car Mobile App",
      cardLogo: "fa-brands fa-figma",
      cardLink:
        "https://www.figma.com/proto/zIKCny1jFlrP9lTtoUS3XG/Prototype?page-id=507%3A1660&node-id=507-1665&starting-point-node-id=507%3A1665&t=s9cdNBEoV8ceAxso-1",
    },
    {
      cardImage: Akar,
      cardTitle: "AKAR Studio Website",
      cardSubtitle: "Portfolio Website",
      cardLogo: "fa-brands fa-figma",
      cardLink:
        "https://www.figma.com/proto/efvJ7qaM8Q5GRWWiswhCdW/PROTOTYPE-AKAR-STUDIO?page-id=166%3A3893&node-id=166-4398&viewport=642%2C129%2C0.07&t=vPUb0XlkQJdfZebl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=166%3A4398",
    },
    {
      cardImage: InsideUMKM,
      cardTitle: "Inside UMKM Website",
      cardSubtitle: "Company Profile Website",
      cardLogo: "fa-brands fa-figma",
      cardLink:
        "https://www.figma.com/proto/nAovjICxiO87p3wyVBwpuy/Project-Klien?page-id=0%3A1&type=design&node-id=29-236&viewport=-963%2C626%2C0.27&t=3DbABENsAvTYJRVe-1&scaling=min-zoom",
    },
  ];

  return (
    <div className="container text-center">
      <div className="d-flex flex-wrap justify-content-center">
        {dataUI.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 p-4" key={index}>
            <ImagePorto
              cardImage={item.cardImage}
              cardLogo={item.cardLogo}
              cardTitle={item.cardTitle}
              cardSubtitle={item.cardSubtitle}
              cardLink={item.cardLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PortoComponentWebsite() {
  const dataWeb = [
    {
      cardImage: ApplyNow,
      cardTitle: "ApplyNow Website",
      cardSubtitle: "Job Vacancy Website",
      cardLogo: "fa-brands fa-react",
      cardLink: "https://applynow-by-bagusdermawan.netlify.app/",
    },
    {
      cardImage: Pertamina,
      cardTitle: "Pertamina MOR V Website",
      cardSubtitle: "Company Profile Website",
      cardLogo: "fa-brands fa-microsoft",
      cardLink:
        "https://drive.google.com/file/d/1MhDMI62krHt5I84x_EgfBx3pcRnRe24k/view?usp=sharing",
    },
    {
      cardImage: Akar,
      cardTitle: "AKAR Studio Website",
      cardSubtitle: "Portfolio Website",
      cardLogo: "fa-brands fa-laravel",
      cardLink:
        "https://drive.google.com/file/d/1kvNutf2AlvvQqR1AwQ5vaJpllmiy15xd/view?usp=sharing",
    },
  ];

  return (
    <div className="container text-center">
      <div className="d-flex flex-wrap justify-content-center">
        {dataWeb.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 p-4" key={index}>
            <ImagePorto
              cardImage={item.cardImage}
              cardLogo={item.cardLogo}
              cardTitle={item.cardTitle}
              cardSubtitle={item.cardSubtitle}
              cardLink={item.cardLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PortoComponent({ titlePorto }) {
  return titlePorto === "UI" ? (
    <PortoComponentUIUX />
  ) : titlePorto === "Web" ? (
    <PortoComponentWebsite />
  ) : null;
}

export default PortoComponent;
