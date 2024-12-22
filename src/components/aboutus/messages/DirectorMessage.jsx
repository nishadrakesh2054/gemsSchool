import React from "react";
import "./message.scss";
import UnderLine from "../../helper/UnderLine";
import img from "../../../assets/about-us/Executive-Director-Mr.-Barun-Khadka.png";

const DirectorMessage = () => {
  return (
    <div className="founder-messagfe">
      <div className="welcome-togem mt-0">
        <div className="message-under">
          <p className="wel-gem">
            Message from the <br /> <span>Executive Director.</span>
          </p>
          <UnderLine width="50px" height="2px" bg=" #17D0CF" />
        </div>
        <img src={img} alt="founder" className="imag-dir-founder barunsir" />

        <div className="text-photo-dounder">
          <p>
            Welcome to GEMS School, a beacon of excellence in the heart of
            Nepal. For over 40 years, we have unwaveringly committed ourselves
            to the holistic growth of our students, creating an environment
            where academic prowess and personal development are not just goals
            but a way of life. <br />
            <br />
            GEMS School is proud to be recognized as one of Nepal's best and
            leading educational institutions. Our world-class infrastructure
            supports not only the academic needs of our students but also their
            physical, emotional, and social development. Our dedicated teachers
            are continually trained to adopt and implement the latest
            pedagogical methods, ensuring our students receive a well-rounded
            education. <br />
            <br />
            Our commitment to academic excellence is evidenced by our impressive
            track record in National Board Exams (SEE & SLC). GEMS School is proud to
            be the only institution in Nepal to have garnered numerous national
            and state-level educational accolades. Furthermore, our alumni have
            consistently made the nation proud with their accomplishments,
            solidifying our reputation for excellence.
            <br /> <br />
            We offer a comprehensive K-12 education, including the prestigious
            University of Cambridge A Levels, preparing our students for global
            opportunities. Our continuous collaboration with international
            educational institutes ensures we adopt the best industry practices
            in teaching pedagogy, keeping us at the forefront of educational
            innovation.
            <br /> <br />
            At GEMS School, we believe in strength in numbers, and our results
            speak for themselves. Our commitment to supporting sports and
            athletics, combined with a solid academic foundation, ensures that
            our students are well-rounded individuals ready to take on the
            world.
            <br /> <br />
            GEMS School is truly a gem and a matter of national pride, and our
            graduates are a testament to this fact wherever they reach. We
            invite you to join us in our academic excellence and holistic growth
            journey and be part of the school's extended fraternity.
            <br /> <br />
            <span className="text-bold"> Executive Director </span>
            <br />
            Barun Khadka
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
