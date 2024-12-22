import React from "react";
import "./visiosn.scss";
import UnderLine from "../helper/UnderLine";
import img1 from "../../assets/page-banner/Building-4.jpg";

const Vision = () => {
  return (
    <>
      <div className="vidiosn-gems">
        <div className="welcome-togem mt-0">
          <p className="wel-gem">Vision.</p>
          <UnderLine width="50px" height="2px" bg=" #17D0CF" />
          <div className="sometext">
            <p>
              Our vision is to establish ourselves as a school of international
              repute imparting quality progressive education, with the aim of
              producing a community of young learners endowed with rich human
              values and a keen sense of commitment and responsibility towards
              the community and society.
            </p>
            <br />
            <p></p>
          </div>
        </div>
        <div className="welcome-togem">
          <p className="wel-gem">Mission.</p>
          <UnderLine width="50px" height="2px" bg=" #17D0CF" />
          <div className="sometext">
            <p>
              We ensure to provide quality education, benchmarked against
              international standards to cater to the full potential of the
              body, mind and spirit. Our learners are imparted skill-based
              knowledge through the framework of the latest curriculum,
              supplemented by modern approaches to teaching-learning pedagogy.
              We prioritize instilling in our learners a sense of discipline,
              good moral values and strength of character, as well as
              accountability and responsibility towards contributing to a
              cleaner and greener planet, in addition to the development of the
              intellect, thereby upholding the essence of the school motto.
              "LEAD, KINDLY LIGHT".
            </p>
            <br />
            <img src={img1} alt="mission" className="mission-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
