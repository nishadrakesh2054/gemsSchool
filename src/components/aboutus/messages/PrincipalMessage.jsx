import React from "react";
import "./message.scss";
import UnderLine from "../../helper/UnderLine";
import img from "../../../assets/about-us/Principal-cropped-office-photo-2081.png";

const PrincipalMessage = () => {
  return (
    <div className="founder-messagfe">
      <div className="welcome-togem mt-0">
        <div className="text-photo mt-0">
          <div className="message-under">
            <p className="wel-gem">
              Message from the <br /> <span>Principal.</span>
            </p>
            <UnderLine width="50px" height="2px" bg=" #17D0CF" />
          </div>
          <div className="message-text">
            <img src={img} alt="principle" className="imag-dir-prin" />
            <p>
              Since its founding in 1984 AD, GEMS School has gone from strength
              to strength, transforming itself to emulate international
              standards and attained the milestone of 40 years as of 2024 AD in
              its journey of educational excellence. GEMS, being at the
              forefront of the education scenario in Nepal, has been able to
              rapidly evolve early on, from the traditional system to a
              progressive one, and is heading to achieve international levels
              through the implementation of the International Primary Curriculum
              and its International Middle Years Curriculum, aligning it with
              the national curriculum and ultimately preparing students for the
              BLE, SEE, and NEB examinations. Our Cambridge A-Level, where many
              of our students have attained world rankings, also supports our
              vision to become a school of international repute. For a truly
              holistic development of personality, sports, and aesthetic
              activities are essential, and since the very beginning, it has
              been the culture of GEMS to provide a plethora of these
              facilities. The initiation of a mega sporting event, the
              'Thunderbolts Cup' from 2023 AD, involving schools of the valley
              as well as from outside the valley, aims to exploit the
              educational aspect of such an event at a national level. In the
              cultural sector, the program, 'Nepal Darshan', includes
              competitions in various visual and performing art forms and aims
              to deepen the appreciation of our students for aesthetics and our
              rich cultural heritage. The international tours organized from
              time to time and the cultural exchange programs with schools in
              Japan, as well as Thailand and Malaysia, further help to mold our
              students' international mindedness to become global citizens.{" "}
              <br />
              <br />
              Apart from the student's diligence, achieving academic excellence
              lies in the effectiveness of the teachers; thus, sustained
              training and the continuous evaluation of their performance help
              hone their skills, resulting in better student learning outcomes.
              GEMS, therefore, aims to exemplify the meaning of holistic
              education in its true sense.
              <br />
              <br />
              We warmly welcome you to go through our website to garner more
              information about us.
              <br />
              <br />
              <span className="text-bold">Principal</span>
              <br />
              Anil Chandra Rai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
