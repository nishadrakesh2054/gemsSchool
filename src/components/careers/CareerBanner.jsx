import React from "react";
import hereimg from "../../assets/page-banner/Building-4.jpg";
import "./bannerCareer.scss";

const CareerBanner = () => {
  return (
    <>
      <div className="banner-career">
        <img src={hereimg} alt="here" className="here-img" />
        <div className="text-here-only">
          <p>Find the career of your dreams</p>
          <div className="buttonlink">
            <span className="home">HOME</span>
            <span>JOBS</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerBanner;
