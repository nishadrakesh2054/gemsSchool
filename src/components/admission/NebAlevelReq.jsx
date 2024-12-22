import React from "react";
import "./PrimarySecondaryAdmission.scss";
import Buttons from "../buttons/Buttons";

const NebAlevelReq = () => {
  const toEnquiry = () => {
    window.location.href = "https://mis.gemsholdings.com/interest.php";
  };
  return (
    <>
      <div className="NebAlevelReq PrimarySecondaryAdmission">
        <div className="where-to-rewq">
          <p>
            A <span>Level.</span>
          </p>
        </div>
        <div className="list-of-req">
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Mark sheet/ E-copy of the SEE (Secondary Education Examination) or
              Grade X Internal Pre-SEE Qualifying Examination.
            </p>
          </div>
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Character Certificate.
            </p>
          </div>
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Copies of certificates of awards or scholarships earned at school,
              if any.
            </p>
          </div>{" "}
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Migration Certificate (Applicable for the students from boards
              other than the National Examinations Board, Nepal.)
            </p>
          </div>{" "}
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Two recently taken passport size photographs of the student and
              one each of the parents.
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="buttons-admissions">
        <Buttons text="ENQUIRY FORM" background="#006DAD" funs={toEnquiry} />
        {/* <Buttons text="Admission form" background="#006DAD" />
        <Buttons text="Download admission form" background="#006DAD" /> */}
      </div>
      <div className="NebAlevelReq PrimarySecondaryAdmission">
        <div className="where-to-rewq">
          <p>
            NEB <span></span>
          </p>
        </div>
        <div className="list-of-req">
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Mark Sheet / E-copy of the SEE(Secondary Education Examination).
            </p>
          </div>
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Character Certificate.
            </p>
          </div>
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Copies of certificates of awards or scholarships earned at school,
              if any.
            </p>
          </div>{" "}
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Migration Certificate (Applicable for the students from boards
              other than the National Examination Board, Nepal.)
            </p>
          </div>{" "}
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Two recently taken passport size photographs of students and one
              each of the parents.
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="buttons-admissions">
        <Buttons background="#006DAD" text="ENQUIRY FORM" funs={toEnquiry} />
        {/* <Buttons background="#006DAD" text="Admission form" />
        <Buttons background="#006DAD" text="Download admission form" /> */}
      </div>
    </>
  );
};

export default NebAlevelReq;
