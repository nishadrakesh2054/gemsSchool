import React from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import thunder from "../../assets/logo/thunderbolts-logo.png";
import DotTexts from "../../components/helper/DotTexts";
import PageBanner from "../../components/helper/PageBanner";
import LearningPartners from "../../components/partners/LearningPartners";
import Clubs from "../../components/sports/Clubs";
import Programs from "../../components/sports/Programs";
import "./sports.scss";

const Sports = () => {
  return (
    <>
      <div className="sports">
        <PageBanner from="Sports & Activities" />
        <div className="home-thunderbolts">
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
                    <span>HOME OF THE THUNDERBOLTS</span>
                  </h3>
                  <div className="line-under"></div>
                </div>
              </div>
              <p className="welcom-text-sports">
                <span>
                  The "Vajra" or "Thunderbolt" is the official emblem of the
                  sports teams of GEMS. It has been adopted as the sign of
                  power, vigour and the quality of being an undefeatable and
                  irresistible force. In Sanskrit Vajra also means diamond,
                  which is indestructible.
                </span>{" "}
                <br />
                The "Thunderbolts" as embodied in the logo is the true
                representation of the spirit of GEMS School. The players
                representing the different teams of GEMS are expected to be
                committed, strong and undefeatable following the true spirit of
                sportsmanship, team work and fair play. GEMS is an acronym
                formed by the combination of the gem-stones, Garnet, Emerald,
                Moonstone and Sapphire, and is the name given to our four Houses
                and we expect our students to possess the qualities of these
                gems in form as well as in essence.
                <br />
                <br />
                Welcome to GEMS the home of the "Thunderbolts"! At GEMS we
                ignite the spirit of excellence and passion in every student.
                Our elite team of coaches, featuring former and current national
                team players and internationally recognized figures, bring
                unparalleled expertise and dedication to our sports and activity
                program. Our state-of-the-art facilities set the stage for great
                achievements, providing the perfect platform for students to
                learn, grow and shine. With 28 diverse activities to explore,
                every student has the opportunity to discover their passion and
                unleash their full potential. Join us and be part of the
                "Thunderbolts" legacy, where champions are made and dreams come
                true!
              </p>

              {/* <div className="gems-stone">
								<p>
									GEM <span>Stones</span>
								</p>
								<div className="gems-underline">
									<UnderLine width="50px" height="2px" />
								</div>
								<div className="gems-stone-logos">
									<img src={rhinos} alt="rhinos" />
									<img src={dragons} alt="rhinos" />
									<img src={sharks} alt="rhinos" />
									<img src={thigers} alt="rhinos" />
								</div>
							</div> */}
            </Container>
          </div>
        </div>
        <div className="gems-stopoets-progemas-tanbs">
          <Container>
            <DotTexts text="GEMS SPORTS & ACTIVITIES" />
          </Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="PROGRAM">
            <div className="tabs-questions">
              <Container>
                <Nav variant="pills" className="flex-row tabs-sports">
                  <Nav.Item>
                    <Nav.Link eventKey="PROGRAM">PROGRAM</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="CLUBS AT GEMS">CLUBS AT GEMS</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="tHUNDERBOLTS SCHOLARSHIP">
                      EtHUNDERBOLTS SCHOLARSHIP
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Container>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="PROGRAM">
                <Programs />
              </Tab.Pane>
              <Tab.Pane eventKey="CLUBS AT GEMS">
                <Clubs />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="tHUNDERBOLTS SCHOLARSHIP">
                tHUNDERBOLTS SCHOLARSHIP
              </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
      <LearningPartners pm="0" pt="5rem" />
    </>
  );
};

export default Sports;
