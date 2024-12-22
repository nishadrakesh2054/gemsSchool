import React from "react";
import { Accordion, Row } from "react-bootstrap";

const VidyaAppFaqs = () => {
  return (
    <div>
      <div className="FaqsAccordion">
        <Row>
          <Accordion defaultActiveKey="0" className="accordion-general ">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-headers">
                What is Vidya App?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Vidya App is a mobile application created in order to digitize
                the traditional educational system. With the effective use of
                this app you can know about the various activities happening at
                the school and get key relevant analytics whether you are a
                student, parent, teacher or an administrator.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordion-headers">
                Who are the users of Vidya App?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Parents and Students are the primary users of the mobile app and
                schools and teachers use the Vidya App backend CMS.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordion-headers">
                Is Vidya App available on mobile?
              </Accordion.Header>
              <Accordion.Body className="main-ansa">
                Yes - Both Android and iOS apps are available for the Student
                App. The administration management platform is only available
                via web
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </div>
    </div>
  );
};

export default VidyaAppFaqs;
