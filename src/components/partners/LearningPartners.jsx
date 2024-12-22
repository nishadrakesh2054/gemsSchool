import React from "react";
import { Container } from "react-bootstrap";
import UnderLine from "../helper/UnderLine";
import "./leaning.scss";
import Carousel from "react-multi-carousel";
import one from "../../assets/partners/s-1.jpg.png";
import two from "../../assets/partners/s-2.jpg.png";
import three from "../../assets/partners/s-3.jpg.png";
import four from "../../assets/partners/s-4.jpg.png";
import five from "../../assets/partners/s-5.jpg.png";
import six from "../../assets/partners/s-6.jpg.png";
import seven from "../../assets/partners/sat.png";
import eight from "../../assets/partners/p1.png";
import nine from "../../assets/partners/p2.png";
import ten from "../../assets/partners/p3.png";
import eleven from "../../assets/partners/kjc.png";

const LearningPartners = ({ pm, mt, pt }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      className="LearningPartners"
      style={{ paddingBottom: pm, marginTop: mt, paddingTop: pt }}
    >
      <Container>
        <p className="learning-text">
          Learning <span>Partners.</span>
        </p>
        <UnderLine width="50px" height="2px" bg="#17D0CF" />

        <div className="leaning-carousel partners-cro">
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
            <a
              href="https://internationalcurriculum.com/international-curriculum/primary"
              target="_blank"
            >
              <img src={one} alt="ipc" />
            </a>
            <a
              href="https://internationalcurriculum.com/international-curriculum/middle-years"
              target="_blank"
            >
              <img src={two} alt="ipc" />
            </a>
            <a href="https://www.cambridgeinternational.org/" target="_blank">
              <img src={three} alt="ipc" />
            </a>
            <a href="https://digitalmarketinginstitute.com/" target="_blank">
              <img src={five} alt="ipc" />
            </a>
            <a href="https://www.uowdubai.ac.ae/" target="_blank">
              <img src={nine} alt="ipc" />
            </a>
            <a href="https://www.murdoch.edu.au/" target="_blank">
              <img src={ten} alt="ipc" />
            </a>
            <a href="https://www.ucas.com/" target="_blank">
              <img src={four} alt="ipc" />
            </a>

            <a href="https://home.pearsonvue.com/" target="_blank">
              <img src={six} alt="ipc" />
            </a>
            <a href="https://en.wikipedia.org/wiki/SAT" target="_blank">
              <img src={seven} alt="ipc" className="sat-seven" />
            </a>
            <a href="https://www.dofe.org/" target="_blank">
              <img src={eight} alt="ipc" />
            </a>
            <a href="https://www.katjazz.com/" target="_blank">
              <img src={eleven} alt="ipc" />
            </a>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default LearningPartners;
