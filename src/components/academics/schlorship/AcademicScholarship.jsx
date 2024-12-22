import React from "react";
import { Accordion, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import acaimg from "../../../assets/academic/schlorship.png";
import "../../../pages/academics/academics.scss";
import PageBanner from "../../helper/PageBanner";
import UnderLine from "../../helper/UnderLine";
import LearningPartners from "../../partners/LearningPartners";
import ByoundCrounsel from "../highSchool/ByoundCrounsel";
import "./schlorship.scss";
import "./academics.scss";
import "./HighSchool.scss";

const AcademicScholarship = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school schlorship-aca">
        <PageBanner from="Academic Scholarship" />
        <Container className="academics-comtaimewr elite-schol-coat">
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
          <div className="conta-tab-aca">
            <div className="head-tav-ava">
              Elite Athletic & Academic <span>Scholarship.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              We offer full and partial scholarships to meritorious students on
              the basis of their academic performance or excellence in sports in
              various categories.
            </p>
          </div>
        </Container>
        {/* <div className="ipc-full-width pt-5 pb-5">
          <Container>
            <p className="ipc-expalin">
              Details of scholarship as per the categories.
            </p>
            <div className="sub-lis-row">
              <Table className="sub-list-table" responsive>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Quota</th>
                    <th>Fee Heading</th>
                    <th>How much? (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GEMS SEE topper (First, Second/ third)</td>
                    <td>3</td>
                    <td>
                      <div className="admin-tutu">
                        <p>Admission</p>
                        <p>Tuition</p>
                      </div>
                    </td>
                    <td>
                      <div className="admin-tutu">
                        <p>100</p>
                        <p>100</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="applying-with-ot-this">
                      GEMS entrance exam top 5 will be awarded full scholarship
                      on admission fee and as per the rank in tuition fees (100%
                      one, 75% and 50% two each).
                    </td>
                    <td>5</td>
                    <td>
                      <div className="admin-tutu">
                        <p>Admission</p>
                        <p>Tuition</p>
                      </div>
                    </td>
                    <td>
                      <div className="admin-tutu">
                        <p>100</p>
                        <p>100/75/50</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Elite Athelete Scholarship</td>
                    <td>3</td>
                    <td>
                      <div className="admin-tutu">
                        <p>Admission</p>
                        <p>Tuition</p>
                      </div>
                    </td>
                    <td>
                      <div className="admin-tutu">
                        <p>100</p>
                        <p>50</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>GEMS SEE graduates</td>
                    <td></td>
                    <td>
                      <div className="admin-tutu">
                        <p>Admission</p>
                      </div>
                    </td>
                    <td>
                      <div className="admin-tutu">
                        <p>50</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>
        </div> */}
        {/* <Container>
          <div className="about-schlorship">
            <p>
              <span>1.</span>
              In addition, students who stand first, second and third in the
              terminal examinations will be awarded 100%, 75% and 50%
              scholarships in the monthly tuition fees for four months. However,
              the same will be withdrawn if the student is unable to retain the
              position during subsequent examinations.
            </p>
            <p>
              <span>2.</span>
              If the performance of the student in any internal examination is
              not satisfactory, the scholarship granted will be canceled.
            </p>
            <p>
              <span>3.</span>
              Decisions regarding the award of all scholarship schemes are
              strictly under the jurisdiction of the School management.
            </p>
            <p>
              <span>4.</span>
              The school management reserves the right to change its scholarship
              schemes without any prior notice.
            </p>
            <p>
              <span>5.</span>
              To continuously avail the scholarship, the student/s must maintain
              good academic and discipline standards throughout the academic
              session.
            </p>
          </div>
          <div className="more-about-schlor">
            <p>
              * GEMS Entrance Toppers must score a consistent B grade or above
              in all internal examinations for the continuation of the tuition
              fee waiver or it will be withdrawn.
            </p>
            <p>
              * Elite Athletes must have a consistent C grade or above score in
              all internal examinations for continuation of the tuition fee
              waiver or it will be withdrawn.
            </p>
          </div>
        </Container> */}

        <div className="beyo-exes padding-reduce-beyo">
          <Container>
            <div className="bycs-exe-text">
              Beyond Academic <span>Excellence.</span>
            </div>
            <p>
              We encourage young learners to take advantage of the facilities
              and the learning opportunities offered beyond the classroom.
              Various experiential and hands-on learning activities are provided
              for our students so that the learning leaves an imprint for a
              lifetime. Numerous events, celebrations, field-trips, and
              competitions form part of the students&#39; learning journey at
              GEMS.
            </p>
          </Container>
          <ByoundCrounsel />
        </div>
        {/* <EmployeeYear /> */}
      </div>

      <LearningPartners pm="0rem" mt="0rem" />
    </>
  );
};

export default AcademicScholarship;
