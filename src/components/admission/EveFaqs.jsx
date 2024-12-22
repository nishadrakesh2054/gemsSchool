import React from "react";
import { Accordion, Row } from "react-bootstrap";

const EveFaqs = () => {
  return (
    <div>
      <div className="FaqsAccordion">
        <Row>
          <Accordion defaultActiveKey="0" className="accordion-general mt-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-headers">
                Do you have Open House days when prospective parents can visit?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Open House will be held once a year. However students are
                welcome to visit the school during school hours for a guided
                school tour and interaction, after due appointments.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </div>
    </div>
  );
};

export default EveFaqs;
