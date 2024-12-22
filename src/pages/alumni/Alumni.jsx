import React from "react";
import { Container } from "react-bootstrap";
import OurAlumni from "../../components/alumni/OurAlumni";
import DotTexts from "../../components/helper/DotTexts";
import PageBanner from "../../components/helper/PageBanner";
import Testimonial from "../../components/testimonial/Testimonial";
import "./alumni.scss";
import ageloho from "../../assets/logo/ages_logo.png";
import LearningPartners from "../../components/partners/LearningPartners";

const Alumni = () => {
  return (
    <>
      <div className="Alumni">
        <PageBanner from="our alumni" />
        <div className="our-alumni">
          <Container>
            <DotTexts text="gems Alumni" color="#A9A3A3" />
            <div className="ages-logo">
              <img src={ageloho} alt="loho-ages" />
            </div>

            <div className="association-guff-alumni">
              <p>
                Association of gems' <span>ex students</span>
              </p>
            </div>
            <div className="few-takksj-alumni">
              <p>
                <span>AGES</span> was formally inaugurated on February 24, 2018,
                by the Founder Chairman, Mr. Rajesh Khadka, and an Ad hoc
                committee comprising four members was formed under the
                leadership of Er. Sixit Bhatta. It has been officially
                registered and works in coordination with the school for the
                betterment of society to create a platform for the ex-students
                of GEMS and GEMS School to work in unison.
              </p>
            </div>
          </Container>
        </div>
        <OurAlumni />
        <Testimonial heading="" data="" />
        <LearningPartners pm="0" pt="0" />
      </div>
    </>
  );
};

export default Alumni;
