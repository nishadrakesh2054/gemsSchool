import React from "react";
import "./under.scss"

const UnderLine = ({ width, height, bg }) => {
  return (
    <div
      className="underline-color"
      style={{ width: width, height, background: bg }}
    ></div>
  );
};

export default UnderLine;
