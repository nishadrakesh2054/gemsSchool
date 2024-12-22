import React from "react";
import "./message.scss";
import UnderLine from "../../helper/UnderLine";
import img from "../../../assets/exe-dir.png";

const ExeDirMessage = () => {
  return (
    <div className="founder-messagfe">
      <div className="welcome-togem mt-0">
        <div className="message-under">
          <p className="wel-gem">
            Message from the <br /> <span>Academic Director.</span>
          </p>
          <UnderLine width="50px" height="2px" bg=" #17D0CF" />
        </div>
        <img src={img} alt="founder" className="imag-dir-founder" />

        <div className="text-photo-dounder">
          <p>
            Welcome to GEMS School! As we embark on the academic year 2024–25
            AD, we are thrilled to celebrate the Ruby Anniversary, marking four
            decades of unwavering dedication to delivering quality education.
            The numerous accolades and awards we have earned over the years
            stand as a testament to the collective efforts of our stakeholders,
            shaping GEMS School into a renowned brand in the field of education.
            <br /> <br />
            With the paradigm shift in how education is perceived to be
            delivered globally and to stay relevant to the changing needs and
            requisites of modern education for this generation of life-long
            learners, GEMS School has achieved the distinction of transitioning
            to a center of learning, adopting fundamental changes in the way we
            approach and deliver the student-centered learning process. The
            school has always strived to develop a positive culture where
            everyone is valued and respected. A positive school culture fosters
            moral values, collaboration, individual development, a growth
            mindset, and effective student learning.
            <br />
            <br />
            Academics does form the core of all our activities, and I am proud
            of the high achievers in academics across the school and high
            school. The school is a recipient of a number of prestigious
            national and regional awards to recognize academic excellence,
            however we do not limit ourselves to just celebrating scholastic
            achievements. It has always been a culture at GEMS to strongly
            encourage students to participate and indulge in a myriad of
            co-curricular activities that contribute to holistic development.
            <br /> <br />
            In our school community, we deeply value the role of parents.
            Parents are integral to a student’s learning journey, and we are
            honored to work closely with our valued parents and guardians. Our
            commitment is to ensure that the students not only feel supported
            but truly valued throughout their educational journey. We welcome
            all aspiring students to come and be a part of the amazing student
            experience at GEMS.
            <br />
            <br />
            <span className="text-bold">Academic Director</span>
            <br />
            Dr. Rajeev Chhetri (Deokota)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExeDirMessage;
