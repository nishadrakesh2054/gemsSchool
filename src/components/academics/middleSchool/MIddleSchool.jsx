import React from "react";
import acaimg from "../../../assets/academic/middle-school.png";
// import "./ipc.scss";
import UnderLine from "../../helper/UnderLine";
import ipc from "../../../assets/logo/imyc.png";
import { Container, Row, Col, Nav, Accordion } from "react-bootstrap";
import "./middleschool.scss";
import PageBanner from "../../helper/PageBanner";
import { Link } from "react-router-dom";
import LearningPartners from "../../partners/LearningPartners";
// import "../../../pages/academics/academics.scss"

const MiddleSchool = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school">
        <PageBanner from="Academics" />
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
          <div className="conta-tab-aca middl-conta">
            <div className="head-tav-ava">
              Middle <span>School.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              Middle school is a time of major changes and a
              transition—physical, emotional, as well as psychological. It is a
              universally recognized sensitive growth phase, and being aware of
              the vulnerable nature of this phase, we ensure that our students
              experience a safe but active, energetic, fulfilling, and happy
              transition. We provide them with myriad opportunities to explore
              varied subject areas, as well as enrichment activities and
              hands-on experiential learning.
              <br /> <br />
              Our Middle school program builds upon the skills learned and honed
              during the International Primary Curriculum (IPC), whereby the
              students are encouraged to honour experimentation, inquiry, active
              learning, problem-solving, and other necessary soft skills. This,
              together with the integration of the national curriculum framework
              following the National Examinations Board (NEB) curriculum
              development by the Curriculum Development Center (CDC) for the 8th
              grade, ensures that our students are better equipped to move
              forward academically and stands them in good stead, making them
              ready to face the rigours of the Secondary school curriculum and
              the examinations conducted by the National Examinations Board
              (NEB).
            </p>
          </div>
        </Container>
        <div className="ipc-full-width middle-school-full">
          <Container>
            <div className="head-ipc mb-5">
              <div className="text-ipc">
                International Middle Years <span> Curriculum.</span>
              </div>
              <div className="img-ipc">
                <img src={ipc} alt=".ipc" />
              </div>
            </div>
            <p className="ipc-expalin">
              With the beginning of the academic session 2023, for students in
              Grade 6, who have progressed on to Middle school from the IPC
              curriculum, the IMYC was introduced as a continuity of the
              framework and support for teaching and learning within the
              classroom, blended and integrated with the national curriculum to
              meet the prescribed requirement. The IMYC is specifically designed
              to engage learners aged 11–14 years old and focuses on the
              specific needs of the teenage brain, combining progressive
              pedagogy that encourages learners to be better informed, globally
              competent, and future-ready. <br /> <br />
              The IMYC features comprehensive units of learning, consisting of
              subject-specific learning tasks and assessment activities that
              appeal to and engage learners across the middle years: ages 11–12
              (grade 6), 12–13 (grade 7), and 13–14 (grade 8).
            </p>
          </Container>
        </div>

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

export default MiddleSchool;
