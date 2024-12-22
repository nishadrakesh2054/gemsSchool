import React from "react";
import "./GetInTouch.scss";
import { Container, Row, Col } from "react-bootstrap";
import DotTexts from "../helper/DotTexts";
import Buttons from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();

  const toContactUsPage = () => {
    navigate("/contact-us");
  };
  return (
    <div className="GetInTouch">
      <Container>
        <Row xs={1} md={1} lg={2}>
          <Col>
            <div className="getin-left">
              <DotTexts text="CONTACT US" aline="left" justify="flex-start" />
              <p className="get-head">Get in Touch</p>
              {/* <p className="get-small-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit
                amet, consectetuer adipiscing elit.
              </p> */}
              <div className="detazils">
                <i className="fa-solid fa-location-dot" />
                <p>
                  <span>Address:</span> GEMS School, Dhapakhel, Lalitpur, Nepal
                </p>
              </div>
              <div className="detazils">
                <i className="fa-solid fa-phone-flip" />
                <p>
                  <span>Telphone:</span> 977 1 5275111, 5275112, 5275113
                  <br />
                  <span>Fax:</span> 977 1 5275121
                </p>
              </div>
              <div className="detazils">
                <i className="fa-solid fa-envelope" />
                <p>
                  <span>Email:</span> info@gems.edu.np
                </p>
              </div>
            </div>
            <div className="buttons-contact">
              <Buttons text="Contact Us" funs={toContactUsPage} />
            </div>
          </Col>
          <Col>
            <div className="gems-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.3982179684394!2d85.32369127546512!3d27.64314867621939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb176e5f021e01%3A0xe2a54995faa27daa!2sGEMS%20School!5e0!3m2!1sen!2snp!4v1714453329150!5m2!1sen!2snp"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouch;
