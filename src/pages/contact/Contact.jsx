import React from "react";
import PageBanner from "../../components/helper/PageBanner";
import { Container } from "react-bootstrap";
import DotTexts from "../../components/helper/DotTexts";
import "./contact.scss";
import SendaMessage from "../../components/sendamessage/SendaMessage";
import { Link } from "react-router-dom";
import GetInTouch from "../../components/getinTouch/GetInTouch";
import LearningPartners from "../../components/partners/LearningPartners";

const Contact = () => {
  return (
    <div className="contact-gems-page">
      <PageBanner from="Contact" />
      <Container className="contact-container">
        <DotTexts text="SEND US A MESSAGE" color="#A9A3A3" />
        <div className="kepsintopuchhead">
          <p>
            Keep <span>In Touch.</span>
          </p>
        </div>
        <div className="logos-containr">
          <Link
            className="logo-text"
            to="https://www.facebook.com/gemsschoolnepal"
            target="_blank"
          >
            <p className="icon-social">
              <i className="fa-brands fa-facebook-f"></i>
            </p>
            <p>Facebook</p>
          </Link>
          <Link
            className="logo-text"
            to="https://www.instagram.com/gems.school/"
            target="_blank"
          >
            <p className="icon-social">
              <i className="fa-brands fa-instagram"></i>
            </p>
            <p>Instagram</p>
          </Link>
          <Link
            className="logo-text"
            to="https://www.linkedin.com/company/gems-school/"
            target="_blank"
          >
            <p className="icon-social">
              <i className="fa-brands fa-linkedin"></i>
            </p>
            <p>LinkedIn</p>
          </Link>
          <Link
            className="logo-text"
            to="https://www.youtube.com/watch?v=NorhhYh36D8&ab_channel=GEMSSchool"
            target="_blank"
          >
            <p className="icon-social">
              <i className="fa-brands fa-youtube"></i>
            </p>
            <p>YouTube</p>
          </Link>{" "}
        </div>
      </Container>
      <SendaMessage />
      <LearningPartners />
      <GetInTouch />
    </div>
  );
};

export default Contact;
