import React from "react";
import acaimg from "../../../assets/academic/DIP09834.jpg";
// import "./ipc.scss";
import { Col, Container, Nav, Row, Accordion } from "react-bootstrap";
import UnderLine from "../../helper/UnderLine";
import "../middleSchool/middleschool.scss";
import { Link } from "react-router-dom";
import PageBanner from "../../helper/PageBanner";
import LearningPartners from "../../partners/LearningPartners";
import "../../../pages/academics/academics.scss";

const SecondarySchool = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school">
        <PageBanner from="Secondary School" />
        <Container className="academics-comtaimewr">
          <div className="about-page">
            <Row>
              <Col xs={12} lg={9} className="img-side-acde">
                <img src={acaimg} alt="ipc" className="imgs-acd-side-img-sec" />
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
          <div className="conta-tab-aca secondasy-tetxts">
            <div className="head-tav-ava">
              Secondary <span>School.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              The Senior School Program at GEMS comprises Grades IX and X and
              follows the Secondary Education Examination (SEE) curriculum under
              the aegis of the Curriculum Development Center (CDC), Sanothimi,
              Bhaktapur, to attain the national goals of education as set in the
              existing curriculum. The teaching and learning process at this
              level involves a gamut of methods like discovery and discussion,
              cooperative and collaborative learning, project-based learning,
              and so forth, centered on the key testing areas of knowledge,
              understanding, and application. <br /> <br /> Our students are
              given maximum exposure to blended learning activities in a safe
              and conducive environment while keeping in mind the preparation
              for global citizenship, and due emphasis is laid on content
              delivery in relevant subjects. <br /> <br /> Towards enhancing the
              learning activities and achieving the national goals of the
              curriculum at this level, each student participates in a number of
              ECA programs, like music, sports, visual arts, performing arts,
              excursions, domestic and international travel and tours,
              environment awareness programs, and charity work. Moreover,
              Cocurricular Activities (CCA) programs like oratory, creative
              writing, and exhibitions are conducted regularly. In order not to
              miss the core ethos of our learning system, learners are not only
              encouraged but also nurtured to manifest socio-ethical values in
              their real sense. Furthermore, the students are also exposed to
              scouting and the prestigious "Duke of Edinburgh International
              Award".
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
        </div>
        {/* <EmployeeYear /> */}
      </div>
      <LearningPartners pm="0rem" mt="0rem" />
    </>
  );
};

export default SecondarySchool;
