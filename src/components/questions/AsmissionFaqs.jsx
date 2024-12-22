import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";

const AsmissionFaqs = () => {
  const width = window.innerWidth;

  const showFullSizeFAQS = width <= 768;
  return (
    <div className="FaqsAccordion">
      <Row>
        <Col className="notwho-inmob"></Col>
        <Col xs={showFullSizeFAQS ? 12 : 8}>
          <Accordion defaultActiveKey="0" className="accordion-general mt-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-headers">
                In which classes are admissions taken every year?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                *Admissions are taken every year for: <br /> <br />
                # Grades 1 and 4, in the primary. <br />
                # A Level & NEB programs in Science and Management.
                <br /># Admissions can be considered for other grades only if
                seats are vacant.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordion-headers">
                How do I apply for admission to GEMS?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                One can visit our school website and complete the online inquiry
                form. Parents can also contact our admissions office for further
                assistance and details on the application and selection process.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordion-headers">
                Do the students need to sit for a written admissions test?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                # For grade one there is no written test and only an assessment
                is made, involving the students and their parents. <br /># For
                higher grades, a written test will be conducted.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accordion-headers">
                Which are the subjects that are tested in the admission test?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Applicants will have to appear for the written exam in the core
                subjects such as, Mathematics, English, Science and Nepali.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4">
              <Accordion.Header className="accordion-headers">
                What will be the level of the questions asked in the admissions
                test?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                The questions are prepared keeping in mind the grade level for
                which the application is made and thus the questions will
                pertain to the matter covered during the previous annual exam of
                the class last attended.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header className="accordion-headers">
                For admission to the NEB & A Level program is there an entrance
                test?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Yes, students will have to sit for an entrance test followed by
                an interview.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="6">
              <Accordion.Header className="accordion-headers">
                For which subjects does one need to appear in the entrance test?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                # For grade one there is no written test but an assessment will
                be made based on some activities and interview with the parents.
                <br /> # For the primary classes other than grade one, written
                test will be held in English; Nepali and Math but beyond grade
                5, Science will also be included. <br />
                # For the high school Science stream one has to appear for
                Mathematics, English and Science. <br /># For the high school
                Management stream one has to appear for Mathematics and English.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="10">
              <Accordion.Header className="accordion-headers">
                What type of questions are expected to be asked?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                # There will be a combination of MCQ's, and subjective
                questions, based on the syllabus of the class last attended and
                an applicant will also need to appear for an interview if
                qualified in the written test. <br /># For NEB and A Level
                admissions candidates will need to appear for the written test
                which will have, knowledge based and critical thinking
                questions, followed by an interview if they qualify in the
                written test.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header className="accordion-headers">
                Are there any provisions for scholarships?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                GEMS does provide support to deserving candidates for academic
                or athletic or Sports excellence. Following their application,
                the concerned student will be contacted and informed whether
                they are eligible for any scholarship.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header className="accordion-headers">
                What are the documents required to be submitted?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Copies of the previous class Report Card; birth certificate; two
                passport-size photographs and any other documents that may be
                specified at the time of application.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header className="accordion-headers">
                Is there an interview as part of the admission process?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Yes, an interview with the students who qualify and their
                parents is mandatory to assess their readiness and interests.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col className="notwho-inmob"></Col>
      </Row>
    </div>
  );
};

export default AsmissionFaqs;
