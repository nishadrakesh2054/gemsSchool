import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import bia from "../../assets/brochure/bia.png";
import geap from "../../assets/brochure/bp-1.png.png";
import gpeak from "../../assets/brochure/bp-2.png";
import DotTexts from "../helper/DotTexts";
import "./programs.scss";
import GEAP from "./GEAP";

const Programs = () => {
  return (
    <div className="gems-programs pb-5">
      <Container>
        <DotTexts text="GEMS PROGRAM" />
        <div className="gems-program-text ">
          <p>
            At GEMS, we believe in giving our students every opportunity to
            unleash their latent potential and help them discover their
            interests by exposing them to various facets of sports and
            co-curricular activities. These activities offer opportunities for
            students to inculcate the spirit of teamwork, attain physical
            fitness, develop endurance and competitiveness, and cultivate
            friendships while enjoying the activities and embracing diversity.
          </p>
        </div>

        <div className="leaning-carousel-sports high-crousel">
          <Link
            to="https://drive.google.com/file/d/1yYxHeoNxCWVHIF8-p_4ZzDKPvI3rJ5OX/view?usp=sharing"
            target="_blank"
          >
            <div className="hight-achiver-box">
              <img src={geap} alt="stdnt" />
              <div className="inftext">
                <p className="more0weidgth-ni">G-EAP</p>
                <p>GEMS EXTENDED ACTIVITIES PROGRAMME</p>
              </div>
            </div>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1DpkCw6sRUY0mKOBYz0qaQa01c6ZeXiIO/view?usp=sharing"
            target="_blank"
          >
            <div className="hight-achiver-box">
              <img src={bia} alt="stdnt" />
              <div className="inftext">
                <p className="more0weidgth-ni">BIA</p>
                <p>BEGINNERS, INTERMEDIATE & ADVANCED</p>
              </div>
            </div>
          </Link>
          <Link
            to="https://drive.google.com/file/d/11zCD9zQuqaVzxOAOQDvgm5eZIgMNINHo/view?usp=sharing"
            target="_blank"
          >
            <div className="hight-achiver-box">
              <img src={gpeak} alt="stdnt" />
              <div className="inftext">
                <p className="more0weidgth-ni">G-PEAK</p>
                <p>GEMS PHYSICAL EXCELLENCE FOR ALL KIDS</p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
      <div className="tabs-programns">
        {/* <GEAP /> */}
        {/* <div className="tabs-questions">
          <Tab.Container id="left-tabs-example" defaultActiveKey="G-EAP">
            <Container>
              <Nav variant="pills" className="flex-row tabs-sports">
                <Nav.Item>
                  <Nav.Link eventKey="G-EAP">G-EAP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="BIA">BIA</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="G-PEAK">G-PEAK</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <Tab.Content>
              <Tab.Pane eventKey="G-EAP">
                <GEAP />
              </Tab.Pane>
              <Tab.Pane eventKey="BIA">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="G-PEAK">Second tab content</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div> */}
      </div>
    </div>
  );
};

export default Programs;
