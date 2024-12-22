import React from "react";
import "./thunderbolts.scss";
import thunder from "../../assets/logo/thunderbolts-logo.png";
import { Container } from "react-bootstrap";
import DotTexts from "../helper/DotTexts";
const Thunderbolts = () => {
  return (
    <>
      <div className="thunderbolts">
        <Container>
          <div className="thunder-bolt-text">
            <img src={thunder} alt="thunderbolt" />
            <div className="text-thunder">
              <DotTexts
                text="Thunderbolts"
                color="#A9A3A3"
                aline="left"
                justify="flex-start"
              />
              <h3>
                Welcome to the <br />
                <span>HOME OF THE THUNDERBOLTS.</span>
              </h3>
              <div className="line-under"></div>
            </div>
          </div>
          <p className="thunde-text">
            The 'Vajra' or 'Thunderbolt' is the official emblem of the sports
            teams of GEMS. It has been adopted as the sign of power, vigor, and
            the quality of being an undefeatable and irresistible force. In
            Sanskrit Vajra also means diamond, which is indestructible. <br />{" "}
            <br /> The 'Thunderbolts' as embodied in the logo is the true
            representation of the spirit of GEMS School. The players
            representing the different teams of GEMS are expected to be
            committed, strong, and undefeatable following the true spirit of
            sportsmanship, teamwork, and fair play. GEMS is an acronym formed by
            the combination of the gem-stones, Garnet, Emerald, Moonstone, and
            Sapphire, and is the name given to our four Houses as we expect our
            students to possess the qualities of these gems in form as well as
            in essence.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Thunderbolts;
