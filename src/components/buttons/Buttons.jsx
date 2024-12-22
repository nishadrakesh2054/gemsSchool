import React from "react";
import { Button } from "react-bootstrap";
import "./buttons.scss";

const Buttons = ({ text, funs, width, background, type }) => {
  return (
    <Button
      onClick={funs}
      className="btns-bns"
      style={{ width: width, background }}
      type={type ? type : ""}
    >
      {text}
    </Button>
  );
};

export default Buttons;
