import React from "react";
import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import PageBanner from "../../components/helper/PageBanner";

import CSR from "../../components/aboutus/CSR";
import EmployeeYear from "../../components/aboutus/EmployeeYear";
import History from "../../components/aboutus/History";
import LearningPedagogy from "../../components/aboutus/LearningPedagogy";
import Vision from "../../components/aboutus/Vision";
import ExeDirMessage from "../../components/aboutus/messages/ExeDirMessage";
import FounderMessage from "../../components/aboutus/messages/FounderMessage";
import PrincipalMessage from "../../components/aboutus/messages/PrincipalMessage";
import WelcomeToGems from "../../components/aboutus/messages/WelcomeToGems";
import LearningPartners from "../../components/partners/LearningPartners";
import "./about.scss";
import DirectorMessage from "../../components/aboutus/messages/DirectorMessage";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <PageBanner from="About us" />
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="Welcome to GEMS"
        >
          <div className="about-page pb-5">
            <Row>
              <Col xs={12} lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Welcome to GEMS">
                    <WelcomeToGems heading="Welcome to GEMS" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Vision & Mission">
                    <Vision />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Founder Director’s Message">
                    <FounderMessage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Executive Director’s Message">
                    <DirectorMessage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Academic Director’s Message">
                    <ExeDirMessage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Principal Message">
                    <PrincipalMessage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="History Infographics">
                    <History />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Learning Pedagogy">
                    <LearningPedagogy />
                  </Tab.Pane>
                  <Tab.Pane href="CSR">
                    <CSR />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col>
                <div className="related-links-message">
                  <p>
                    <span>Related</span> Links.
                  </p>
                  <Nav
                    variant="pills"
                    className="flex-column tabs-message-about"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="Welcome to GEMS">
                        Welcome to GEMS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Vision & Mission">
                        Vision & Mission
                      </Nav.Link>
                    </Nav.Item>

                    {/* Accordion */}
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Messages</Accordion.Header>
                        <Accordion.Body>
                          <Nav.Link eventKey="Founder Director’s Message">
                            Founder Chairman's Message
                          </Nav.Link>
                          <Nav.Link eventKey="Executive Director’s Message">
                            Executive Director’s Message
                          </Nav.Link>
                          <Nav.Link eventKey="Academic Director’s Message">
                            Academic Director’s Message
                          </Nav.Link>
                          <Nav.Link eventKey="Principal Message">
                            Principal Message
                          </Nav.Link>
                          {/* <Nav.Link eventKey="IPC/IMYC Head">
                            IPC/IMYC Head
                          </Nav.Link> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Nav.Item>
                      <Nav.Link eventKey="History Infographics">
                        History Infographics
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Learning Pedagogy">
                        Learning Pedagogy
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/gems-csr">CSR</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {/* <div className="edu-app">
                  <p className="heading-app">
                    <span>An education</span>
                    <br />
                    software. 
                  </p>
                  <div className="vidya-img">
                    <img src={vidya} alt="vidya" />
                  </div>
                  <p className="vidya-app-footer-text">
                    Lorem ipsum dolor sit consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt.
                  </p>
                  <Buttons text="Get the app now" width="100%" />
                </div> */}
              </Col>
            </Row>
          </div>
        </Tab.Container>
      </Container>
      <EmployeeYear />
      <LearningPartners pm="0rem" />
    </div>
  );
};

export default AboutUs;
