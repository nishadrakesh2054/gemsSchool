import React from "react";
import { Accordion, Row } from "react-bootstrap";

const AcadFaqs = () => {
  return (
    <div>
      <div className="FaqsAccordion">
        <Row>
          <Accordion defaultActiveKey="0" className="accordion-general mt-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-headers">
                What are the streams available for the NEB Program?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                The NEB program offers two distinct streams: Science and
                Management. Each stream provides students with subject options
                tailored to their academic interests and career aspirations.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordion-headers">
                What is the class size and the academic staff to student ratio?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                The teachers-to-student ratio at GEMS is structured to give
                maximum attention to the students. Most classes will have 26 to
                28 students.  Some of our A-level classes will have as few as 10
                students for some subjects.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </div>
    </div>
  );
};

export default AcadFaqs;
