import React from "react";
import "./pagebanner.scss";
import hereimg from "../../assets/page-banner/Building-4.jpg";
import { Link } from "react-router-dom";

const PageBanner = ({ from, bg, where }) => {
  return (
    <div className="PageBanner">
      <img src={bg ? bg : hereimg} alt="here" className="here-img" />
      <div className="text-here-only">
        <p>{from}</p>
        <div className="buttonlink">
          <Link to="/" className="link-hone-banner">
            <span className="home">HOME</span>
          </Link>
          <span>{where ? where : from}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
