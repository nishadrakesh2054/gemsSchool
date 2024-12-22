import React from "react";
import "./dottexts.scss";

const DotTexts = ({ text, color, aline, justify }) => {
  return (
    <p
      className="ab-head"
      style={{ color: color, textAlign: aline, justifyContent: justify }}
    >
      <span>
        <i className="fa-solid fa-circle"></i>

        <i className="fa-solid fa-circle"></i>
      </span>
      {text}
      <span>
        <i className="fa-solid fa-circle"></i>

        <i className="fa-solid fa-circle"></i>
      </span>
    </p>
  );
};

export default DotTexts;
