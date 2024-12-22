import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Buttons from "../buttons/Buttons";
import UnderLine from "../helper/UnderLine";
import AdmissionQuestions from "./AdmissionQuestions";
import "./admissionfaqs.scss";
import AdFasq from "./AdFasq";
import AcadFaqs from "./AcadFaqs";
import EveFaqs from "./EveFaqs";
import { useNavigate } from "react-router-dom";

const AdmissionFaqs = () => {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact-us");
  };
  return (
    <div className="admisoon-fasq">
      <div className="find-your-qus">
        <p>
          Find <span>Your Questions & Answers.</span>
        </p>
        <UnderLine width="50px" height="2px" />
      </div>
      <div className="qust">
        <div className="tabs-questions">
          <Tabs
            defaultActiveKey="ADMISSIONS"
            id="uncontrolled-tab-example"
            className="mb-3 questions-tabs"
          >
            <Tab
              eventKey="GENERAL"
              title="GENERAL"
              className="custom-tabs-question-syle"
            >
              <AdmissionQuestions />
            </Tab>
            <Tab
              eventKey="ADMISSIONS"
              title="ADMISSIONS"
              className="custom-tabs-question-syle"
            >
              <AdFasq />
            </Tab>
            <Tab
              eventKey="ACADEMIC PROGRAMS"
              title="ACADEMIC PROGRAMS"
              className="custom-tabs-question-syle"
            >
              <AcadFaqs />
            </Tab>
            <Tab
              eventKey="EVENTS"
              title="EVENTS"
              className="custom-tabs-question-syle"
            >
              <EveFaqs />
            </Tab>
          </Tabs>
        </div>
        <div className="btn-maks">
          <Buttons text="Ask A Question" funs={toContact} />
          <Buttons text="contact us" funs={toContact} />
        </div>
      </div>
    </div>
  );
};

export default AdmissionFaqs;
