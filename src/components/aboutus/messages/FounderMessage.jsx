import React from "react";
import "./message.scss";
import UnderLine from "../../helper/UnderLine";
import img from "../../../assets/founder.png";

const FounderMessage = () => {
  return (
    <>
      <div className="founder-messagfe">
        <div className="welcome-togem mt-0">
          <div className="message-under">
            <p className="wel-gem">
              Message from the <br /> <span>Founder Chairman.</span>
            </p>
            <UnderLine width="50px" height="2px" bg=" #17D0CF" />
          </div>
          <img src={img} alt="founder" className="imag-dir-founder" />

          <div className="text-photo-dounder">
            <p>
              Since its establishment in 1984 AD, after two and a half decades
              of exceptional commitment and dedication to primary and
              secondary-level education, the management launched the
              higher-level program in 2008 AD to give students continuity at the
              higher secondary level, with affiliation to the National
              Examination Board's (NEB) Science and Management program. Also, it
              began offering the GCE A-level program, affiliated with the
              University of Cambridge, UK. During its educational journey, GEMS
              has been awarded the 'National Education Shield' four times
              (2001/02/10/12 AD) and the 'Regional Education Shield' twice (2006
              and 2011 AD). More recently, the school and two students who
              scored a GPA of 4 in the SEE exams in 2021 AD were awarded cash
              prizes, and the school and eight students who scored a GPA of 4 in
              the SEE exams in 2022 AD were awarded cash prizes by the Lalitpur
              Metropolitan City Education Department. <br />
              <br />
              It is a matter of pride that now the school is in its sixth year
              of using the UK-based International Primary Curriculum and the 2nd
              year of the use of the International Middle Years Curriculum.
              Among all these achievements, with a sense of satisfaction and
              pride we note the school has now reached its 40th year of
              excellence in education (2024 AD). Adding to the existing
              state-of-the-art facilities, the development of new infrastructure
              such as the swimming pool, tennis courts, and archery range, has
              further enhanced the facilities available for the students to an
              international level.
              <br />
              <br />
              Our aim has always been to develop resilience, self-confidence,
              self-discipline, and analytical skills in our students to prepare
              them for the world's challenges beyond their schooling. I firmly
              believe that we have been able to offer our students an enriched
              learning environment as well as a refreshing learning experience
              with a team of highly qualified, trained, and experienced faculty,
              capable academic administrators, and efficient administrative
              personnel dedicated to the well-being and overall development of
              our students. We focus on providing students with a holistic
              education supported by state-of-the-art facilities, technologies,
              and advanced pedagogical approaches. The unwavering support of our
              parents, students, past and present, and well-wishers has been a
              blessing for us, and we are grateful for the same and hopeful that
              we will continue to receive their love, support, and cooperation
              in the days to come.
              <br /> <br />
              <span className="text-bold">Founder Chairman </span>
              <br />
              Rajesh Khadka
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderMessage;
