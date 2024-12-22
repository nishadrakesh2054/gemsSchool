import React from "react";
import hereimg from "../../assets/page-banner/Building-4.jpg";
import "./bannerCareer.scss";

const JobDecBanner = ({ jobTitle, postedon }) => {
  return (
    <>
      <div className="banner-career JobDecBanner">
        <img src={hereimg} alt="here" className="here-img" />
        <div className="text-here-only">
          <p>
            GEMS School | <span>Full time</span>{" "}
          </p>
          <div className="job-tite">
            <p>{jobTitle}</p>
          </div>
          <div className="loc-job">
            <p>Dhapakhel, Lalitpur | Posted on {postedon}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDecBanner;
