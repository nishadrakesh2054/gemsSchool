import React from "react";
import "./aboutus.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Buttons from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

const AboutUs = () => {
  const navigate = useNavigate();

  const toAbout = () => {
    navigate("/about-us");
  };

  const toContact = () => {
    navigate("/contact-us");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_6z9yrn5",
        "template_tpkchdu",
        {
          from_name: formData.name,
          to_name: "HR",
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "RmCKwzMeguSmfZC1X"
      )
      .then((response) => {
        toast.success("We'll get back to you!", {
          theme: "dark",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error(
          { error },
          {
            theme: "dark",
          }
        );
      });
  };

  return (
    <>
      <Container className="about-us-comp">
        <Row className="about-us-row">
          <Col lg={4} md={8}>
            <div className="form-side">
              <div className="form-bac-color"></div>
              <div className="form-main-cont">
                <p>Register now for</p>
                <h5>More Info.</h5>
                <Form className="form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Your Name."
                      value={formData.name}
                      onChange={handleChange}
                      required
                      name="name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="number">
                    <Form.Control
                      type="text"
                      placeholder="Your Number."
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="text"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      name="message"
                    />
                  </Form.Group>
                  <Button className="border-0" type="submit">
                    SUBMIT REQUEST
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col md={12} lg={8}>
            <div className="about-us-comp">
              <p className="ab-head">
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
                ABOUT US
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
              </p>
              <h5>
                We ensure to provide quality education, benchmarked against
                international standards to cater to the full potential of the
                body, mind, and spirit.
              </h5>
              <div className="underline-line"></div>
              <p className="abou-txt">
                Our learners are imparted skill-based knowledge through the
                framework of the latest curriculum, supplemented by modern
                approaches to teaching-learning pedagogy. We prioritize
                instilling in our learners, a sense of discipline, good moral
                values and character, accountability, and responsibility towards
                contributing to a cleaner and greener planet, in addition to the
                development of the intellect, thereby upholding the essence of
                the school motto "LEAD, KINDLY LIGHT".
              </p>
            </div>
            <div className="buttons">
              <Buttons text="About Us" funs={toAbout} />
              <Buttons text="contact us" funs={toContact} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
