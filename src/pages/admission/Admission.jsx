import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import AdmissionFaqs from "../../components/admission/AdmissionFaqs";
import AdmissionRequirements from "../../components/admission/AdmissionRequirements";
import DeadlineAdmission from "../../components/admission/DeadlineAdmission";
import PageBanner from "../../components/helper/PageBanner";
import LearningPartners from "../../components/partners/LearningPartners";
import "./admission.scss";

const Admission = () => {
  return (
    <>
      <div className="AboutUs admission">
        <PageBanner from="About us" />
        <Container>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="Admission Requirements"
          >
            <div className="about-page">
              <Row>
                <Col md={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="Admission Requirements">
                      <AdmissionRequirements />
                    </Tab.Pane>

                    {/* <Tab.Pane eventKey="THUNDERBOLTS Scholarship">
                      <AdmissionFaqs />
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="FAQs">
                      <AdmissionFaqs />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col>
                  <div className="related-links-message">
                    <p>
                      <span>Admissions</span>
                    </p>
                    <Nav
                      variant="pills"
                      className="flex-column tabs-message-about"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="Admission Requirements">
                          Admission Requirements
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/academics/academic-scholarship">
                          Scholarship
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="THUNDERBOLTS Scholarship">
                          THUNDERBOLTS Scholarship
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="FAQs">FAQs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  {/* <div className="deadline-for-admission">
                    <DeadlineAdmission />
                  </div> */}
                </Col>
              </Row>
            </div>
          </Tab.Container>
          <div className="admission-note">
            <p>
              NOTE: The students of foreign nationality have to provide a valid
              copy of their visa/passport.
            </p>
          </div>
        </Container>
        {/* <EmployeeYear /> */}
        <LearningPartners pm="0rem" />
      </div>
    </>
  );
};

export default Admission;
