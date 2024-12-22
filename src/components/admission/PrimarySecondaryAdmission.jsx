import React from "react";
import Buttons from "../buttons/Buttons";
import "./PrimarySecondaryAdmission.scss";

const PrimarySecondaryAdmission = () => {
  const toEnquiry = () => {
    window.location.href = "https://mis.gemsholdings.com/interest.php";
  };
  return (
    <>
      <div className="PrimarySecondaryAdmission">
        <div className="list-of-req">
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Report card/ Mark sheet of the current class.
            </p>
          </div>
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Transfer certificate (TC)/ Character Certificate.
            </p>
          </div>{" "}
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Birth certificate issued by the Ward.
            </p>
          </div>{" "}
          <div className="list-ones-many">
            <p>
              <span>
                <i className="fa-solid fa-circle"></i>
              </span>
              Two copies of recent passport-size photos.
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="buttons-admissions">
        <Buttons background="#006DAD" text="ENQUIRY FORM " funs={toEnquiry} />
        {/* <Buttons background="#006DAD" text="Admission form" />
        <Buttons background="#006DAD" text="Download admission form" /> */}
      </div>
    </>
  );
};

export default PrimarySecondaryAdmission;
