import React from "react";
import { Accordion, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import acaimg from "../../../assets/academic/schlorshipimg.png";
import PageBanner from "../../helper/PageBanner";
import UnderLine from "../../helper/UnderLine";
import LearningPartners from "../../partners/LearningPartners";
import "./schlorship.scss";
import "./academics.scss";
import "./HighSchool.scss";

const SchoolSchlorship = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school schlorship-aca">
        <PageBanner from="Scholarship" />
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
                    <Accordion defaultActiveKey="1">
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
          <div className="conta-tab-aca">
            <div className="head-tav-ava">
              Elite <span>Scholarship.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              {/* 
            A full scholarship on tuition fees is awarded every year to the
            most deserving students. <br /> <br /> */}
              A sports scholarship on tuition fees is awarded to students who
              excel in games, sports, and other activities conducted within the
              school or in Inter-School, District, National or International
              level competitions.
            </p>
          </div>
        </Container>

        <div className="beyo-exes">
          <Container>
            <div className="bycs-exe-text">
              Beyond Academic <span>Excellence.</span>
            </div>
            <p>
              The course of studies offered cater to the gaining of knowledge
              and cultivating of skills related to the subjects but for success
              in the real world one needs a significantly broader range of soft
              skills alongside a strong personality and a positive attitude. We
              offer students opportunities outside the classroom to develop
              their organizational and leadership skills that encompass
              development of their communication, collaborative and creative
              skills as well as building their resilience. We prepare students
              for life beyond the classrooms.
            </p>
          </Container>
          {/* <ByoundCrounsel /> */}
        </div>
        {/* <EmployeeYear /> */}
      </div>

      <LearningPartners pm="0rem" mt="0rem" />
    </>
  );
};

export default SchoolSchlorship;
