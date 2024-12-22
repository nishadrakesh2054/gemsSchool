import React from "react";
import { Col, Container, Nav, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import acaimg from "../../assets/academic/pri.png";
import ipc from "../../assets/partners/s-1.jpg.png";
import PageBanner from "../../components/helper/PageBanner";
import UnderLine from "../../components/helper/UnderLine";
import LearningPartners from "../../components/partners/LearningPartners";
import "./academics.scss";
import bg from "../../assets/page-banner/S_S06384.jpg";

const Academics = () => {
  return (
    <>
      <div className="AboutUs academics ipc primary">
        <PageBanner from="Academics" bg={bg} />
        <Container className="academics-comtaimewr">
          <div className="about-page">
            <Row>
              <Col xs={12} lg={9} className="img-side-acde">
                <img src={acaimg} alt="ipc" className="imgs-acd-side-img" />
              </Col>
              <Col>
                <div className="related-links-message">
                  <p className="acadamic-tab-head mb-4">Academics.</p>
                  <Nav
                    variant="pills"
                    className="flex-column tabs-message-about"
                  >
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>GEMS School</Accordion.Header>

                        <Accordion.Body>
                          <div className="link-list-cade flex-column d-flex">
                            <Link to="/academics/primary-school">
                              Primary School
                            </Link>

                            <Link to="/academics/middle-school">
                              Middle School
                            </Link>

                            <Link to="/academics/secondary-school">
                              Secondary School
                            </Link>
                            <Link to="/academics/school-schlorship">
                              Elite Scholarships
                            </Link>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>GEMS High School</Accordion.Header>

                        <Accordion.Body>
                          <div className="link-list-cade flex-column d-flex">
                            <Link to="/academics/high-school">
                              NEB High School
                            </Link>

                            <Link to="/academics/a-level">A Level</Link>
                            <Link to="/academics/academic-scholarship">
                              Elite Athletic and Academic Scholarship
                            </Link>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    <Link to="/academics/vidya-app">Vidya App</Link>
                  </Nav>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className="conta-tab-aca pri-cont-atb">
            <div className="head-tav-ava" style={{ paddingTop: "3rem" }}>
              Primary <span>School.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              Our goal is to foster a community of young learners enriched with
              knowledge, skills, and a deep understanding of human values while
              instilling a strong commitment and sense of responsibility towards
              society, our nation, and the global community.
            </p>
          </div>
        </Container>
        <div className=" ptimary-full-width primiry-scholl-full-with">
          <Container>
            <div className="head-ipc mb-5">
              <div className="text-ipc">
                International Primary <span> Curriculum.</span>
              </div>
              <div className="img-ipc ipc-ipc">
                <img src={ipc} alt=".ipc" />
              </div>
            </div>
            <p className="ipc-expalin">
              GEMS School implements the International Primary Curriculum (IPC),
              developed by the International Curriculum Association (ICA), under
              Fieldwork Education, UK. This curriculum helps young learners
              cultivate the personal skills required for the 21st century to
              thrive in a demanding global society. It equips them with the
              requisite skills to develop socially, emotionally, and
              intellectually. <br /> <br /> We prioritize the holistic
              development of students, leveraging the IPC to provide a
              comprehensive educational experience that integrates Academic,
              Personal, and International Learning.
              <br /> <br /> The IPC units that best meet the learning goals are
              adopted and integrated with the national curriculum. The IPC uses
              structured "Mileposts," covering specific learning goals. Milepost
              1 is designed for grades I and II, Milepost 2 for grades III and
              IV, and Milepost 3 for grade V. The unit selection from these
              mileposts is integrated, focusing on foundational skills like
              literacy and numeracy, play-based learning, personalized
              education, community involvement, and cultural awareness while
              ensuring a safe and supportive learning environment.
            </p>
          </Container>
        </div>
        <Container>
          <div className="core-sub-offered">
            <div className="code-text">
              Subject <span>Offered.</span>
            </div>
            <Row className="row-acade-row" md={2} xs={1}>
              <Col>
                <div className="col-inner-ipc">
                  <p className="bold-garnu-parne">Core Subjects</p>
                  <div className="list-subj-ipc">
                    <div className="social-sub-ipc-ew">
                      <p>Social Studies</p>
                    </div>
                    <div className="social-sub-ipc-s">
                      <p style={{ marginLeft: "20px" }}>History</p>
                    </div>
                    <div className="social-sub-ipc-s">
                      <p style={{ marginLeft: "20px" }}>Geography</p>
                    </div>

                    <div className="social-sub-ipc-s">
                      <p>Design and Technology</p>
                    </div>
                    <div className="social-sub-ipc-s">
                      <p>ICT/ Computing</p>
                    </div>
                    <div className="social-sub-ipc-s">
                      <p>Health and Wellbeing</p>
                    </div>
                    <div className="social-sub-ipc-s">
                      <p>Art</p>
                    </div>
                    <div className="social-sub-ipc-s">
                      <p>Music</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="col-inner-ipc">
                  <p className="bold-garnu-parne">Stand Alone Subjects</p>
                  <div className="list-subj-ipc">
                    <div className="social-sub-ipc-s ">
                      <p className="pt-0">Mathematics</p>
                    </div>{" "}
                    <div className="social-sub-ipc-s">
                      <p>Language Art- English</p>
                    </div>{" "}
                    <div className="social-sub-ipc-s">
                      <p>Language - Nepali</p>
                    </div>
                  </div>
                </div>{" "}
              </Col>
            </Row>
          </div>
        </Container>
        <div className="beyo-exes">
          <Container>
            <div className="bycs-exe-text">
              Beyond Academic <span>Excellence.</span>
            </div>
            <p>
              The courses of study offered cater to the gaining of knowledge and
              cultivating of skills related to the subjects, but for success in
              the real world, one needs a significantly broader range of soft
              skills, a strong personality, and a positive attitude. We offer
              students opportunities outside the classroom to develop their
              organizational and leadership skills, which encompass the
              development of their communication, collaborative, and creative
              skills as well as their resilience. We prepare students for life
              beyond the classroom.
            </p>
          </Container>
        </div>
      </div>
      <LearningPartners pm="0rem" mt="0rem" />
    </>
  );
};

export default Academics;
