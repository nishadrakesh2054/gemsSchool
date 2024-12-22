import React from "react";
import UnderLine from "../helper/UnderLine";
import "./AdmissionRequirements.scss";
import { Tab, Tabs } from "react-bootstrap";
import PrimarySecondaryAdmission from "./PrimarySecondaryAdmission";
import NebAlevelReq from "./NebAlevelReq";

const AdmissionRequirements = () => {
  return (
    <>
      <div className="AdmissionRequirements">
        <div className="admission-gems">
          <p>
            GEMS <span>Admissions.</span>
          </p>
        </div>
        <UnderLine width="50px" height="2px" />
        <div className="text-gems-admisoo">
          <p>
            GEMS School admits students of any race, color, religion, national
            and ethnic origin, or other legally protected status and provides
            the rights, privileges, programs, and activities generally accorded
            or made available to all the students in the school. <br /> <br />{" "}
            We do not discriminate on the basis of race, color, religion,
            national and ethnic origin, or other legally protected status in our
            hiring or in the administration of our educational policies and
            programs, admissions policies, financial aid programs, or other
            school-administered programs.
          </p>
        </div>
        <div className="admission-req">
          <div className="text-req">
            <p>
              Admission <span>Requirements.</span>{" "}
            </p>
            <UnderLine width="50px" height="2px" />
          </div>
          <div className="req-tabs">
            <div className="tabs-questions">
              <Tabs
                defaultActiveKey="SCHOOL"
                id="uncontrolled-tab-example"
                className="mb-3 questions-tabs"
              >
                <Tab
                  eventKey="SCHOOL"
                  title="SCHOOL"
                  className="custom-tabs-question-syle"
                >
                  <PrimarySecondaryAdmission />
                </Tab>
                <Tab
                  eventKey="HIGH SCHOOL"
                  title="HIGH SCHOOL"
                  className="custom-tabs-question-syle"
                >
                  <NebAlevelReq />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionRequirements;
