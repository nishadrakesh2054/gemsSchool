import React from "react";
import { Container } from "react-bootstrap";

const Eligibility = () => {
  return (
    <>
      <div className="egli-codeere">
        <Container>
          <div className="Eligibility">
            <p>
              To be eligible for admission in the A-Level Science programme at
              GEMS, all prospective students must have passed the Secondary
              Education Examination (SEE) or an equivalent examination with
              Grade C+ in English, Science, and Compulsory Mathematics
              (Additional Mathematics is preferred for candidates opting for
              science and mathematics). However, additional mathematics is not
              required for students opting for non-science subjects.
              <br />
              <br />
              Admission is granted to shortlisted students after the entrance
              examination and interview on the condition that a copy of the SEE
              marksheet along with the character certificate is submitted to the
              high school office within the first week from the date of
              publication of the SEE results, failing which admission will be
              cancelled and the amount deposited during admission will be
              forfeited.
              <br />
              <br />
              GEMS school students meeting the aforementioned criteria need not
              sit for an entrance test.
              <br />
              <br />
              Copies of the following documents must be submitted at the time of
              submission of the completed application form.
              <br />
              <br />
            </p>
            <div className="list-of-requi">
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>{" "}
                Mark sheet or e-copy of SEE or grade X internal examination.
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>{" "}
                Character certificate.
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>
                Two recently taken passport-size photographs of the student and
                one each of the parents.
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>{" "}
                Certificates of awards or scholarships earned at school, if any.
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>
                Migration Certificate (applicable for students from boards other
                than the National Examinations Board).
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>
                Students of foreign nationality have to provide a valid copy of
                their visa or passport.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Eligibility;
