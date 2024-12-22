import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import UnderLine from "../helper/UnderLine";
import "./prospectus.scss";
import geap from "../../assets/brochure/bp-1.png.png";
import gpeak from "../../assets/brochure/bp-2.png";
import primary from "../../assets/brochure/bp-3.png";
import bia from "../../assets/brochure/bia.png";
import school from "../../assets/brochure/school.png";
import academic from "../../assets/brochure/academic.png";
import newslesster from "../../assets/brochure/mockup.png";

import { Link } from "react-router-dom";

const Prospectus = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      // slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      // slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1,
    },
  };

  return (
    <div className="Prospectus LearningPartners">
      <Container>
        <p className="learning-text">
          GEMS <span>Brochure & Prospectus.</span>
        </p>
        <UnderLine width="50px" height="2px" bg="#17D0CF" />

        <div className="leaning-carousel high-crousel">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // Render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Link
              to="https://drive.google.com/file/d/1Z2rOaNg0HGT8G9IZn6hxE6zL-nQDNDWa/view"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={newslesster} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">THE GEMS CHRONICLE</p>
                  <p>NEWSLETTER:FIRST TERM 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1v70WTyZkWn3Pzg8xI4gVcFvVUNE5fE7w/view?usp=sharing"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={school} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">School Prospectus</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1ZyAzBF9SzOHsXUcsg3vEcYN5-RkSXZ_u/view?usp=sharing"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={academic} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">Academic Prospectus</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1yYxHeoNxCWVHIF8-p_4ZzDKPvI3rJ5OX/view?usp=sharing"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={primary} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">PRIMARY SCHOOL</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1yYxHeoNxCWVHIF8-p_4ZzDKPvI3rJ5OX/view?usp=sharing"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={geap} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">G-EAP</p>
                  <p>GEMS EXTENDED ACTIVITIES PROGRAMME</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1DpkCw6sRUY0mKOBYz0qaQa01c6ZeXiIO/view?usp=sharing"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={bia} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">BIA</p>
                  <p>BEGINNERS, INTERMEDIATE & ADVANCED</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://drive.google.com/file/d/11zCD9zQuqaVzxOAOQDvgm5eZIgMNINHo/view?usp=sharing"
              target="_blank"
            >
              <div className="hight-achiver-box">
                <img src={gpeak} alt="stdnt" />
                <div className="inftext">
                  <p className="more0weidgth-ni">G-PEAK</p>
                  <p>GEMS PHYSICAL EXCELLENCE FOR ALL KIDS</p>
                </div>
              </div>
            </Link>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Prospectus;
