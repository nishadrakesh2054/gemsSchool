import React from "react";
import {
  Accordion,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import acaimg from "../../../assets/academic/alevels.png";
import bg from "../../../assets/page-banner/20240402_123935.jpg";
import "../../../pages/academics/academics.scss";
import PageBanner from "../../helper/PageBanner";
import UnderLine from "../../helper/UnderLine";
import LearningPartners from "../../partners/LearningPartners";
import ByoundCrounsel from "../highSchool/ByoundCrounsel";
import Eligibility from "./Eligibility";
import "./HighSchool.scss";
import Pedagogy from "./Pedagogy";
import SubjectOffered from "./SubjectOffered";
import academic from "../../../assets/brochure/academic.png";

const ALevels = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school alevel">
        <PageBanner from="Academics" bg={bg} where="alevel" />
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
              Cambridge Assessment International Education (CAIE){" "}
              <span>A Level.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              The A-Level course as well as the NEB Science and Management
              course at GEMS were started in 2065 BS (2008 AD) in the newly
              built high school building that was inaugurated by Dr. Emmanuel Y
              Angeles, the Chancellor of Angeles University Foundation (AUF),
              from the Philippines. <br /> <br /> Cambridge International A
              Level is an Advanced Level General Certificate of Education (GCE)
              administered by Cambridge International Education (CAIE), an
              examination board under Cambridge Assessment. The A Level,
              equivalent to the NEB High School education of Nepal, is a course
              that is divided into two parts: the Advanced Subsidiary (AS, also
              called A-1) that is expected to be completed in the first year,
              and the second part of the course, commonly referred to as the
              Advanced (A or A-2) Level, which is completed by the end of the
              second year.
              <br /> <br />
              GEMS School has been designated as an independent test center
              since October 2020 AD and is licensed to hold the A-level board
              examinations on its campus.
            </p>
            <div className="year-props">
              <div className="durations">
                <p>Duration :</p> <p className="years-dur">2 years </p>
              </div>
              <Link
                to="https://drive.google.com/file/d/1ZyAzBF9SzOHsXUcsg3vEcYN5-RkSXZ_u/view?usp=sharing"
                target="_blank"
                className="link-props"
              >
                <div className="hight-achiver-box">
                  <img src={academic} alt="stdnt" />
                  <div className="inftext">
                    <p className="more0weidgth-ni">Academic Prospectus</p>
                    <p>2024</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
        <div className="national-exam-board nat-alevel a-na-cam">
          <Container>
            <div className="heading-text-neb">
              Cambridge Assessment International Education(CAIE){" "}
              <span> A Level.</span>
            </div>
            <br />
            <p>
              The Cambridge International AS and A Level examinations are held
              twice a year, i.e., in May/June and October/November, the results
              of which are published in August and January, respectively. The
              Cambridge International AS and A Level students are assessed on a
              grade scale from A*, awarded for the highest level of achievement,
              to 'E', indicating the minimum required performance, while ‘U’
              stands for ungraded, which means ‘Unqualified’ for a grade.
              <br /> <br />
              Students can choose any combination of the wide choice of subjects
              that suits their interests and aptitudes. Students must take a
              minimum of three A-level subjects (3.0 credits) and one AS subject
              (0.5 credits) to qualify to study undergraduate courses. However,
              they may take more than the required credits, depending on their
              interests, capabilities, and career choices.
              <br /> <br />
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Many universities across the world offer advanced credit (up to
              one year) to students who hold a Cambridge International A-Level
              qualification, which means that students taking Cambridge A-Level
              are already ahead in their undergraduate program by a year before
              they even begin their high school enrollment.
              <br /> <br />
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>{" "}
              A-Level is a rigorous program that encourages high academic
              standards. It helps students gain in-depth subject knowledge with
              a deeper understanding, and it also helps them develop independent
              learning and constructive thinking skills.
            </p>
          </Container>
        </div>
        <div className="ipc-full-width-high-school-alevel alevel-tabes-alal">
          <Container>
            <div className="hight-school-tabs">
              <Tabs
                defaultActiveKey="SUBJECTS OFFERED"
                id="uncontrolled-tab-example"
                className=" tabs-high high-high-tab"
              >
                <Tab eventKey="SUBJECTS OFFERED" title="SUBJECTS OFFERED">
                  <SubjectOffered />
                </Tab>
                <Tab eventKey="ELIGIBILITY" title="ELIGIBILITY">
                  <Eligibility />
                </Tab>
                <Tab eventKey="PEDAGOGY" title="PEDAGOGY">
                  <Pedagogy />
                </Tab>
                {/* <Tab
                  eventKey="ENTRANCE EXAM PROCEDURE"
                  title="ENTRANCE EXAM PROCEDURE"
                >
                  <ExamProc />
                </Tab> */}
              </Tabs>
            </div>
          </Container>
        </div>

        <div className="beyo-exes pb-5">
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

export default ALevels;
