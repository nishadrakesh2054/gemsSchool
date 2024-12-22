import React from "react";
import { Col, Container, Nav, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageBanner from "../../helper/PageBanner";
import UnderLine from "../../helper/UnderLine";
import LearningPartners from "../../partners/LearningPartners";
import VidyaAppFaqs from "./VidyaAppFaqs";
import "./questions.scss";
import "./vidya.scss";
import iosqr from "../../../assets/app-ios.png";
import androidqr from "../../../assets/scan andriod.png";
import dowios from "../../../assets/appst.png";
import androiddown from "../../../assets/div.genius-btn.png";
import vidyapgpt from "../../../assets/ab-2.png.png";
import "../../../pages/academics/academics.scss";

const VidyaApp = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school vidya-aap">
        <PageBanner from="Academics" />
        <Container className="academics-comtaimewr">
          <div className="about-page">
            <Row>
              <Col xs={12} lg={9} className="img-side-acde">
                <div className="conta-tab-ac-vidya">
                  <div className="head-tav-ava">
                    <p>
                      Vidya <span>App.</span>
                    </p>
                    <UnderLine width="50px" height="2px" />
                  </div>
                  <p>
                    An education software suite to digitise the student journey.
                    Through Vidya App we are trying to digitize the traditional
                    educational system. With the effective use of this app you
                    can know about the various activities happening at the
                    school and get key relevant analytics whether you are a
                    student, parent, teacher or an administrator.
                    <br /> <br />
                  </p>
                </div>
                <VidyaAppFaqs />
              </Col>
              <Col>
                <div className="related-links-message">
                  <p className="acadamic-tab-head mb-4">Academics.</p>
                  <Nav
                    variant="pills"
                    className="flex-column tabs-message-about"
                  >
                    <Accordion defaultActiveKey="2">
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
                              Scholarships
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
                              Academic Scholarship
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

        <div className="ipc-full-width">
          <Container>
            <div className="vidya-app-community ">
              <div className="header-vommu">
                <p>
                  Be a part of Vidya App’s growing <span>Community.</span>
                </p>
                <UnderLine width="50px" height="2px" />
              </div>
              <div className="few-vidya-point">
                <p>
                  <span>
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  Students, Teachers, School and even Parents!
                </p>
                <p>
                  <span>
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  User friendly app for both iOS and Android
                </p>
                <p>
                  <span>
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  Access to all features
                </p>
              </div>
            </div>
            <Row md={2} xs={1}>
              <Col>
                <div className="download-kinl">
                  <p>
                    {" "}
                    <span>Download</span> Vidya App <br />
                    on <span> PlayStore & AppStore.</span>
                  </p>
                  <UnderLine width="50px" height="2px" />
                </div>
                <div className="qrs-dwown">
                  <div className="android0rwq">
                    <img src={androidqr} alt="android" />
                    <img src={androiddown} alt="and" />
                  </div>
                  <div className="android0rwq">
                    <img src={iosqr} alt="android" />
                    <img src={dowios} alt="and" />
                  </div>
                </div>
              </Col>
              <Col>
                <img src={vidyapgpt} alt="vidya" className="vidya-img" />
              </Col>
            </Row>
          </Container>
        </div>

        {/* <EmployeeYear /> */}
      </div>
      <LearningPartners pm="0rem" mt="0rem" />
    </>
  );
};

export default VidyaApp;
