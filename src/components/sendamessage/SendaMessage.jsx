import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Buttons from "../buttons/Buttons";
import DotTexts from "../helper/DotTexts";
import "./SendaMessage.scss";

const SendaMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Your message",
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
    <div className="SendaMessage">
      <Container>
        <DotTexts text="Send us a message" color="#A9A3A3" />
        <p className="send-mess">
          Send us a <span>Message.</span>
        </p>
        <div className="message-form">
          <Form onSubmit={handleSubmit}>
            <Row xs={1} md={3}>
              <Col className=" mt-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </Col>
              <Col className=" mt-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col className=" mt-3">
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                className="message-area"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                pattern="Your message"
              />
            </Form.Group>
            <div className="send-mess-btn">
              <Buttons text="submit" type="submit" />
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SendaMessage;
