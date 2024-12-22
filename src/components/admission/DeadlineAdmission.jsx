import React from "react";
import "./DeadlineAdmission.scss";
import { Link } from "react-router-dom";

const DeadlineAdmission = () => {
  return (
    <div className="DeadlineAdmission">
      <div className="heazding-deadling">
        <span>Deadline</span> for Admissions.
      </div>
      <div className="evenst-main">
        {Array.from({ length: 3 }, (_, idx) => (
          <Link to="#" key={idx}>
            <div className="news evenst">
              <div className="image-side">
                <div className="calneder-date">
                  <h3>05</h3>
                  <p>Jun</p>
                  <p>2024</p>
                </div>
                <div className="date-titles">
                  <h5>NEB High School Forms.</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeadlineAdmission;
