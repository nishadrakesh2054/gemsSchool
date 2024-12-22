import React from "react";
import {
  Container,
  Tab,
  Tabs,
  Row,
  Col,
  Nav,
  Accordion,
} from "react-bootstrap";
import acaimg from "../../../assets/academic/high-school.png";
import UnderLine from "../../helper/UnderLine";
import "./HighSchool.scss";
import SubjectOffered from "./SubjectOffered";
import Eligibility from "./Eligibility";
import Pedagogy from "./Pedagogy";
import PageBanner from "../../helper/PageBanner";
import { Link } from "react-router-dom";
import LearningPartners from "../../partners/LearningPartners";
import bg from "../../../assets/page-banner/DIP09834.jpg";
import ExamProc from "./ExamProc";
import ByoundCrounsel from "./ByoundCrounsel";
import academic from "../../../assets/brochure/academic.png";

const HighSchool = () => {
  return (
    <>
      <div className="AboutUs academics ipc middle-school ">
        <PageBanner from="Academics" bg={bg} where="high school" />
        <Container className="academics-comtaimewr aca-con-high">
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
              NEB High <span>School.</span>
              <UnderLine width="50px" height="2px" />
            </div>
            <p>
              The NEB High School curriculum is a reputed and popular programme
              for the vast majority of students after completion of their
              Secondary Education Examination (SEE), and it is administered by
              the National Examinations Board (NEB) of Nepal. It is a two-year
              programme that has been designed to prepare students for
              enrollment in university degree programmes. Students who have
              completed the SEE or equivalent exam are eligible to undertake
              this course. GEMS High School offers more than thirteen different
              subjects in Science and Management programs under the NEB.
              <br /> <br />
              The board examinations for Grades XI and XII are held annually at
              the end of the academic year or twelve months after the
              commencement of the course, i.e., in May or June every year.
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
        <div className="national-exam-board nat-alevel">
          <Container>
            <div className="heading-text-neb">
              National Examinations Board <span>NEB.</span>
            </div>
            <br />
            <p>
              The board examinations for Grades XI and XII are held annually at
              the end of the academic year or twelve months after the
              commencement of the course, i.e., in May or June every year.{" "}
              <br /> <br />
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Upon completion of the science course, the graduates may opt to
              pursue their university education in the fields of medicine and
              engineering. IT (Information Technology) or other applied sciences
              and management graduates may pursue the fields of business,
              marketing, finance, accounting, economics, management, etc.
              <br /> <br />
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>{" "}
              The students opting for marketing in Grade 12 must undertake an
              International Certification Programme under the Digital Marketing
              Institute (DMI) that is specially designed for high school
              students of the NEB and A Level to leverage the opportunities of
              getting related jobs while they attend university degrees. <br />{" "}
              <br />
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>{" "}
              The students of science are provided with various short-term
              preparatory courses for medical and engineering fields, and the
              students of management are provided with various hands-on courses
              on accounting, startups, leadership, entrepreneurship, etc.
              through engagement of the students with various hands-on training,
              workshops, exhibitions, field trips, business plan competitions,
              series of Confabs, etc. to prepare confident and future-ready
              leaders.
            </p>
          </Container>
        </div>
        <div className="ipc-full-width-high-school ">
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
                <Tab
                  eventKey="ENTRANCE EXAM PROCEDURE"
                  title="ENTRANCE EXAM PROCEDURE"
                >
                  <ExamProc />
                </Tab>
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

export default HighSchool;
