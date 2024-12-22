import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";

const 

FaqsAccordion = () => {
  const width = window.innerWidth;

  const showFullSizeFAQS = width <= 768;

  return (
    <>
      <div className="FaqsAccordion">
        <Row>
          <Col className="notwho-inmob"></Col>
          <Col xs={showFullSizeFAQS ? 12 : 8}>
            <Accordion defaultActiveKey="0" className="accordion-general mt-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordion-headers">
                  When does the school's academic session begin?
                </Accordion.Header>
                <Accordion.Body className="main-ansa">
                  <p>
                    * For the Primary and Secondary level it begins in the month
                    of April as per the date indicated in the notice. <br />*
                    For A-Levels the classes begin from the month of June.{" "}
                    <br />* For the NEB program the session begins in the month
                    of July.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="accordion-headers">
                  What are the school timings?
                </Accordion.Header>
                <Accordion.Body className="main-ansa">
                  * For Primary and High School [NEB & A Levels] timings are
                  from 07:30 am to 02:30 pm. <br />* For the students of classes
                  6 to 10, the timings are 09:00 am to 04:10 pm.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="accordion-headers">
                  What other facilities are available?
                </Accordion.Header>
                <Accordion.Body className="main-ansa">
                  *The enrichment facilities and activities available to our
                  students are: <br /> <br />
                  # 26 different activities are available as part of the Sports
                  and Activities Clubs.
                  <br />
                  # Full-time Psycho-Social Counsellors are available in the
                  different blocks to support the students.
                  <br />
                  # Trained chefs prepare freshly prepared food for lunch, and
                  primary children also get snacks before they leave for home.
                  <br />
                  # Transportation facilities are also available, provided the
                  route falls within the designated places.
                  <br /># Well-equipped science and computer labs and all
                  classrooms are equipped with multimedia projectors.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="accordion-headers">
                  Can prospective parents visit the school?
                </Accordion.Header>
                <Accordion.Body className="main-ansa">
                  Yes, prospective parents are welcome to visit the school,
                  after making an appointment with the Admission manager.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className="accordion-headers">
                  Does the school have a bus service?
                </Accordion.Header>
                <Accordion.Body className="main-ansa">
                  Yes, the school has a transportation service which covers most
                  areas of Kathmandu, Bhaktapur and Patan. To find out more about
                  the routes and seat availability, please contact the school
                  reception.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header className="accordion-headers">
                  Who can I contact for more information or assistance?
                </Accordion.Header>
                <Accordion.Body className="main-ansa">
                  For more information, please contact our admissions office at
                  01-5275111/12 or write to: info@gems.edu.np
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col className="notwho-inmob"></Col>
        </Row>
      </div>
    </>
  );
};

export default FaqsAccordion;
