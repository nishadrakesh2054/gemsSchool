import React from "react";
import "./sliderbyound.scss";
import Carousel from "react-multi-carousel";
import { Container } from "react-bootstrap";
import b1 from "../../../assets/b1.png";
import b2 from "../../../assets/b2.png";
import b3 from "../../../assets/b3.png";
import b4 from "../../../assets/academic/competition.jpg";

const ByoundCrounsel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="ByoundCrounsel">
      <div className="silder-byound">
        <Container>
          <div className="leaning-carousel EmployeeYear-carou">
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
              <div className="employees">
                <div className="category-icon-title text-center mb-3">
                  <div className="category-icon">
                    <img src={b1} alt="emp" />
                  </div>
                  <div className="category-title">
                    <div className="name-degi">
                      <h4>
                        Extra Curricular <br /> Activities
                      </h4>
                      <p>
                        GEMS offers a large variety of extracurricular (ECA) and
                        co-curricular activities to students enrolled in both
                        the NEB and A Level programs. We offer training in
                        football, cricket, modern dance, music, Zumba and
                        basketball. Students are also given a platform to be
                        involved in various clubs such as for performing arts,
                        social service, literature, music, visual arts, media,
                        photography, science exhibition, debate, essay writing,
                        quiz, games, sports, and Model United Nations sessions
                        are organized annually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employees">
                <div className="category-icon-title text-center mb-3">
                  <div className="category-icon">
                    <img src={b2} alt="emp" />
                  </div>
                  <div className="category-title">
                    <div className="name-degi">
                      <h4>
                        Enrichment <br /> Activities
                      </h4>
                      <p>
                        Performing Arts Club and Business Club organize various
                        events to showcase talents in the fields of music, arts,
                        singing, dancing, etc. Moreover, various events are
                        showcased periodically like, Indigenous & Mufti Day, Art
                        Exhibitions, Freshers' Welcome, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employees">
                <div className="category-icon-title text-center mb-3">
                  <div className="category-icon">
                    <img src={b3} alt="emp" />
                  </div>
                  <div className="category-title">
                    <div className="name-degi">
                      <h4>
                        International <br /> Educational Tours
                      </h4>
                      <p>
                        At GEMS School, we offer unique learning opportunities
                        through our annual international visits to different
                        destinations. In line with our vision to provide a
                        holistic approach to teaching-learning activities for
                        our learners, a wide range of co-curricular and
                        extra-curricular activities are part of the academic
                        curriculum that a learner is introduced to at GEMS.The
                        main objective of the visit/tours is to provide a
                        platform for our students to engage in cultural exchange
                        and to experience the history and culture of the
                        destination countries.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employees">
                <div className="category-icon-title text-center mb-3">
                  <div className="category-icon">
                    <img src={b4} alt="emp" />
                  </div>
                  <div className="category-title">
                    <div className="name-degi">
                      <h4>
                        Competition & <br /> Challenges
                      </h4>
                      <p>
                        The students of GEMS High School took to the stage to
                        showcase their entrepreneurial skills and business
                        acumen in the Business Plan Competition 2024.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ByoundCrounsel;
