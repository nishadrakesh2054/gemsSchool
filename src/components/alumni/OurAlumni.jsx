import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import suec1 from "../../assets/jubin.webp";
import sixit from "../../assets/sixit_2.jpg";
import UnderLine from "../helper/UnderLine";
import "./OurAlumni.scss";
// import abrial from "../../assets/students/Abiral-Banjade.tif";
import Carousel from "react-multi-carousel";

const OurAlumni = () => {
  //   const toppers = new Array(10).fill(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="OurAlumni">
        <Container>
          <div className="btn-reg-ablumni">
            <a
              href="https://gihe.edu.np/alumni"
              target="_blank"
            >
              Alumni Registration
            </a>
          </div>
          <div className="succ-stiro">
            <p>
              Success <span>Stories.</span>
            </p>
            <UnderLine width="50px" height="2px" />
          </div>
          <div className="lis-succ-stiory">
            {/* {toppers.map((_, idx) => ( */}
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // Render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="row-row-here">
                <div className="card-alumni">
                  <div className="text-imahe-alum">
                    <div className="image-alumni">
                      <img src={sixit} alt="topper" />
                    </div>
                    <div className="text-aumny">
                      Mr. Bhatta is an entrepreneur, and co-founder/ CEO at
                      Tootle, the ridesharing application from Nepal. Needless
                      to say, Bhatta is one of the talk of the town in the
                      startup circle after the release of one of the most
                      innovative products of Kathmandu. He is a cross-functional
                      professional with a background in ICT, education, Telecom,
                      and financial services industries. His experiences range
                      from project management, operations, and business
                      development to marketing and product definition. He is a
                      graduate of engineering with a major in electronics and
                      communication. He holds a master’s in Business
                      Administration, with medals awarded by the Prime Minister
                      and President of Nepal for Educational Excellence. He is
                      one of the GEMS alumni (Class of 2051) and the current
                      president of AGES (Association of GEMS’ Ex- Students). He
                      has truly been an inspiration for young and aspiring
                      entrepreneurs of Nepal. <br /> <br />
                      <span>Er. Sixit Bhatta</span> <br />
                      Co-Founder / CEO - Tootle
                      <br />
                      President - AGES
                      <br />
                      GEMS 2051 Batch
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-row-here">
                <div className="card-alumni">
                  <div className="text-imahe-alum">
                    <div className="image-alumni">
                      <img src={suec1} alt="topper" />
                    </div>
                    <div className="text-aumny">
                      GEMS is a prestigious institution that was designed to
                      produce global change makers. I have had the opportunity
                      to study in amazing institutions in India and USA after
                      passing school and I can confidently say, GEMS has a
                      standard equal to its western counterparts. It also
                      reminds me of teachers and mentors who pushed me to
                      achieve things that I never felt were in my grasp. Looking
                      back, I feel that even though I might have forgotten the
                      theories and formulas my teachers taught me, I have
                      memories which I will never forget. Life lessons and
                      values that my Gurus have taught me, still heavily defines who I am and
                      what I do till this date. I will be forever grateful to
                      GEMS.Thank you!
                      <br /> <br />
                      <span>Jubin Rajbhandari</span> <br />
                      Missile Systems Engineer
                      <br />
                      (US Department of Defense)
                      <br />
                      GEMS 2051 Batch
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurAlumni;
