import React from "react";
import MegaEventslogo from "../../assets/nepaldarsan.png";
import "./thunderbolts.scss";
import { Col, Container, Row, Table } from "react-bootstrap";
import UnderLine from "../helper/UnderLine";
import Carousel from "react-multi-carousel";
import thunder0 from "../../assets/thunder-0.jpg";
import thunder1 from "../../assets/thunder-1.jpg";
import thunder2 from "../../assets/thunder-2.jpg";
import thunder3 from "../../assets/thunder-3.jpg";
import thunder4 from "../../assets/thunder-4.jpg";
import thunder5 from "../../assets/thunder-5.jpg";
import { Link } from "react-router-dom";

const NepalDarshan = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="thunderbolts-mega-events">
      <Container>
        <Row className="thunder-bolts-row">
          <Col md={4}>
            <div className="thunderbolts-img">
              <img src={MegaEventslogo} alt="thunderbolts" />
            </div>
          </Col>
          <Col>
            <div className="thunderbolts-cup-text">
              <div className="thundebolts-geaher">
                <p>
                  NEPAL <span>DARSHAN.</span>
                </p>{" "}
                <UnderLine width="50px" height="2px" />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="thunderbolt-carousel-mesag LearningPartners">
        <Container>
          <div className="leaning-carousel EmployeeYear-carou thun-caroys">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all 1"
              transitionDuration={6000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="thunder-bolts-car-images">
                <div className="upder-row-imags">
                  <img src={thunder0} alt="thunder" />
                </div>
              </div>
              <div className="thunder-bolts-car-images">
                <div className="upder-row-imags">
                  <img src={thunder1} alt="thunder" className="item-1" />
                </div>
              </div>
              <div className="thunder-bolts-car-images">
                <div className="upder-row-imags">
                  <img src={thunder2} alt="thunder" />
                </div>
              </div>
              <div className="thunder-bolts-car-images">
                <div className="upder-row-imags">
                  <img src={thunder2} alt="thunder" />
                </div>
              </div>
            </Carousel>
            <div className="share-scoa-links">
              <p>
                Social Media Links{" "}
                <span>
                  <Link>
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </span>
                <span>
                  <Link>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </span>
                <span>
                  <Link>
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NepalDarshan;
