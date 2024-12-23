import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Cvform.scss";

const Cvform = ({ onCloseForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
    coverLetter: "",
    position: "primary",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (file.size > 50 * 1024) {
        toast.error("File size exceeds 50KB. Please upload a smaller file.", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData((prev) => ({ ...prev, [name]: null }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: file }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.file) {
      toast.error("Please upload a CV file.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_v860vkq",
        "template_awcn3kv",
        formRef.current,
        "4ETbu5ZPYfx44iSlo"
      )
      .then((response) => {
        toast.success("CV submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          file: null,
          coverLetter: "",
          position: "primary",
        });
      })
      .catch((error) => {
        toast.error("Failed to submit the CV. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="cv-form-container px-5 py-3 shadow-lg rounded position-relative">
            <button
              className="close-button text-danger fs-2"
              onClick={onCloseForm}
            >
              &times;
            </button>
            <h2 className="text-center mb-2">Submit Your CV</h2>
            <Form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label>Choose Position</Form.Label>
                <Form.Select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                >
                  <option value="primary">Primary Level</option>
                  <option value="middle">Middle Level</option>
                  <option value="secondary">Secondary Level</option>
                  <option value="high">Higher Level</option>
                  <option value="administration">Administration</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCoverLetter">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your cover letter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Upload Resume (PDF)</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  accept=".pdf"
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="submit-btn">
                  Submit Application
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cvform;
