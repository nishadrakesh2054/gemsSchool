import React from "react";
import "./LearningPedagogy.scss";
import UnderLine from "../helper/UnderLine";
import img1 from "../../assets/abt-2.jpg.png";

const LearningPedagogy = () => {
  return (
    <>
      <div className="LearningPedagogy">
        <div className="head-text-le-pda">
          <p>
            Learning <span>Pedagogy.</span>
          </p>
          <UnderLine width="50px" height="2px" />
        </div>
        <div className="dometex-ped-img">
          <p>
            GEMS has always striven to constantly update and apply the most
            modern approaches to the teaching-learning process, and early in its
            journey began the introduction and training of the teachers to
            deliver lessons using a student-centered approach, formerly through
            the use of the ECEC pedagogy, moving away from the traditional
            teacher-centered approach. We provide a stimulating learning
            environment for the children to develop their intellectual,
            emotional, and social sckills. Since 2018 AD, the pedagogy aligned
            to the International Primary Curriculum (IPC) was introduced at the
            primary level, and from 2023 AD, the International Middle School
            Curriculum (IMYC) is being used in grade 6 and currently in grade 7.
            The curriculum is integrated with the CDC-provided National
            Syllabus. A wide range of classroom activities involving the
            children in their learning are used; this, coupled with a structured
            sports and extracurricular activities program, provides a holistic
            approach to developing the intellectual, social, and moral fabric of
            our learners from an early age.
          </p>
          <img src={img1} alt="leadning" />
        </div>
      </div>
    </>
  );
};

export default LearningPedagogy;
