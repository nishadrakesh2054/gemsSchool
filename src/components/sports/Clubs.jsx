import React from "react";
import { Container } from "react-bootstrap";
import "./programs.scss";
import DotTexts from "../helper/DotTexts";
import ClubsList from "./ClubsList";

const Clubs = () => {
  return (
    <div className="gems-programs">
      <Container>
        <DotTexts text="CLUBS AT GEMS" />
        <div className="gems-program-text mb-0  pb-5">
          <p>
            At GEMS School, we offer a vibrant array of clubs designed to cater
            to the diverse interests and talents of our students. Each club
            provides unique opportunities for personal growth, creativity, and
            community engagement.  Here’s a brief overview of our clubs:
          </p>
        </div>
      </Container>
      <div className="tabs-programns">
        <ClubsList />
      </div>
    </div>
  );
};

export default Clubs;
