import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "./questions.scss";
import DotText from "../helper/DotTexts";
import FaqsAccordion from "./FaqsAccordion";
import Buttons from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";
import AsmissionFaqs from "./AsmissionFaqs";
import AcademicPRogram from "./AcademicPRogram";
import EventsFaq from "./EventsFaq";

const FrequentlyAsked = () => {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="qust-o">
      <Container>
        <DotText text="gems school faq" />
        <p className="frq-qus">
          F<span>AQS</span>
        </p>
        <div className="tabs-questions">
          <Tabs
            defaultActiveKey="GENERAL"
            id="uncontrolled-tab-example"
            className="mb-3 questions-tabs"
          >
            <Tab
              eventKey="GENERAL"
              title="GENERAL"
              className="custom-tabs-question-syle"
            >
              <FaqsAccordion />
            </Tab>
            <Tab
              eventKey="ADMISSIONS"
              title="ADMISSIONS"
              className="custom-tabs-question-syle"
            >
              <AsmissionFaqs />
            </Tab>
            <Tab
              eventKey="ACADEMIC PROGRAMS"
              title="ACADEMIC PROGRAMS"
              className="custom-tabs-question-syle"
            >
              <AcademicPRogram />
            </Tab>
            <Tab
              eventKey="EVENTS"
              title="EVENTS"
              className="custom-tabs-question-syle"
            >
              <EventsFaq />
            </Tab>
          </Tabs>
        </div>
        <div className="btn-maks">
          <Buttons text="Ask a Question" funs={toContact} />
          <Buttons text="contact us" funs={toContact} />
        </div>
      </Container>
    </div>
  );
};

export default FrequentlyAsked;
