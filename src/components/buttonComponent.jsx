import React from "react";

const ButtonPrimary = (props) => {
  return (
    <a className="custom-solid-btn-dark" href={props.link} target="_blank">
      {props.title}
    </a>
  );
};

const ButtonSecondary = (props) => {
  return (
    <a className="custom-solid-btn" href={props.link}>
      {props.title}
    </a>
  );
};

const ButtonOutline = (props) => {
  return (
    <a className="custom-outline-btn" href={props.link}>
      {props.title}
    </a>
  );
};

const ButtonComponent = (props) => {
  if (props.name === "primary") {
    return <ButtonPrimary title={props.title} link={props.link} />;
  } else if (props.name === "secondary") {
    return <ButtonSecondary title={props.title} link={props.link} />;
  } else if (props.name === "outline") {
    return <ButtonOutline title={props.title} link={props.link} />;
  } else {
    console.log("Tidak Ada Button");
    return null;
  }
};

export default ButtonComponent;
