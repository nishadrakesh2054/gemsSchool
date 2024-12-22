import React from "react";
import "./whygems.scss";
import { Container, Col, Row, Stack } from "react-bootstrap";
import DotTexts from "../helper/DotTexts";
import whygems from "../../assets/home-image-student.png";
import one from "../../assets/why-us/fyears.png";
import two from "../../assets/why-us/div.features-icon2.png";
import three from "../../assets/why-us/why3.png";
import four from "../../assets/why-us/why4.png";
import five from "../../assets/why-us/why5.png";
import six from "../../assets/why-us/div.features-icon.png";

const WhyGems = () => {
  return (
    <>
      <div className="why-gems">
        <Container>
          <DotTexts text="GEMS Academics" />
          <div className="reason-why-gems">
          Why <span> Choose GEMS.</span>
          </div>
          <Row className="why-row" xs={1} md={3}>
            <Col>
              <Stack gap={5}>
                <div className="text-logo-why">
                  <div className="imge-side">
                    <img src={one} alt="one" />
                  </div>
                  <div className="text-side">
                    <h5>40 years of Excellence in Education.</h5>
                    <p></p>
                  </div>
                </div>
                <div className="text-logo-why">
                  <div className="imge-side">
                    <img src={two} alt="one" />
                  </div>
                  <div className="text-side">
                    <h5>
                      Winner of Numerous National and Regional Educational
                      Awards.
                    </h5>
                    <p></p>
                  </div>
                </div>
                <div className="text-logo-why">
                  <div className="imge-side">
                    <img src={three} alt="one" />
                  </div>
                  <div className="text-side">
                    <h5>Well - Equipped Science and Computer Laboratories.</h5>
                    <p></p>
                  </div>
                </div>
              </Stack>
            </Col>
            <Col>
              <img src={whygems} alt="gemsstudent" className="why-gem-stu" />
            </Col>
            <Col>
              <Stack gap={5}>
                <div className="text-logo-why right-logo-why">
                  <div className="text-side">
                    <h5>Highly trained and Experienced Teachers.</h5>
                    <p></p>
                  </div>
                  <div className="imge-side">
                    <img src={four} alt="one" />
                  </div>
                </div>
                <div className="text-logo-why right-logo-why">
                  <div className="text-side">
                    <h5>
                      ECA Training Imparted by Full-time National- Level Coaches &
                      Assistant Coaches.
                    </h5>
                    <p></p>
                  </div>
                  <div className="imge-side">
                    <img src={five} alt="one" />
                  </div>
                </div>
                <div className="text-logo-why right-logo-why last-why">
                  <div className="text-side ">
                    <h5>
                      Psychosocial counsellors and Career counsellors Available.
                    </h5>
                    <p></p>
                  </div>
                  <div className="imge-side">
                    <img src={six} alt="one" />
                  </div>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyGems;
