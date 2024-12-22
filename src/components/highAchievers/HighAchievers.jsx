import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import studen1 from "../../assets/student-1.png";
import studen2 from "../../assets/student-2.png";
import studen3 from "../../assets/student-3.png";
import studen4 from "../../assets/student-4.png";
import DotTexts from "../helper/DotTexts";
import "../partners/leaning.scss";
import "./highh.scss";
import axios from "axios";

const HighAchievers = () => {
  const [achivers, setAchivers] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/acheivers.php",
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setAchivers(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="HighAchievers LearningPartners">
      <Container>
        <DotTexts text="sUCCESS STORIES" />
        <p className="hight-text">
          <span>High</span> Achievers.
        </p>

        <div className="leaning-carousel high-crousel">
          {achivers?.slice(0, 4).map((achiver, idx) => {
            return (
              <div className="hight-achiver-boxs bg-transparent" key={idx}>
                <img src={achiver?.feature} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">{achiver?.name}</p>
                  <p>{achiver?.title}</p>
                  <p>{achiver?.batch}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="see-more-achiver">
          <Link to="/gem-of-gems">
            See More <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HighAchievers;
