import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./vidya.scss";
import DotTexts from "../helper/DotTexts";
import Buttons from "../buttons/Buttons";
import vidya from "../../assets/about-us/vidya-app.png";
import Underline from "../helper/UnderLine";
import android from "../../assets/scan andriod.png";
import ios from "../../assets/app-ios.png";
import downios from "../../assets/appst.png";
import downloadANd from "../../assets/div.genius-btn.png";

const Vidyapp = () => {
  return (
    <div className="vidyapp">
      <Container>
        <DotTexts text="learning new skills" color="#A9A3A3" />
        <p className="vidyat-text">
          <span>Vidya</span> App.
        </p>
        {/* <div className="search-courses">
          <Form className="form-search">
            <Form.Group controlId="search" className="search-cources">
              <Form.Control
                type="text"
                placeholder="What do you want to learn today?"
              />
            </Form.Group>
            <Button>Search Course</Button>
          </Form>
        </div> */}
        <Row className="vidya-row" md={2} xs={1}>
          <Col className="vidya-app-col">
            <img src={vidya} alt="vidyaq" className="vidya-app-img" />
          </Col>
          <Col className="vidya-down-text-col">
            <p className="vidya-dow-text">
              <span>Download</span> Vidya App <br />
              on <span>PlayStore & AppStore.</span>
            </p>
            <Underline width="50px" height="2px" bg="#17D0CF" />
            <p className="extra-text-vidya">
              An education software suite to digitise the student journey.
            </p>
            <div className="fownload-viofya-qurs">
              <div className="andr-vidya">
                <img src={android} alt="scan-and" />
                <img src={downloadANd} alt=".and" />
              </div>
              <div className="andr-vidya">
                <img src={ios} alt="scan-and" />
                <img src={downios} alt=".and" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vidyapp;
