import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import "./Cvform.scss";

const TestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
    coverLetter: "",
    position: "Primary Level",
  });

  const formRef = useRef();
  const GETFORM_ENDPOINT = "https://getform.io/f/alllvgya";

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File size exceeds 1MB. Please upload a smaller file.", {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      toast.error("Please upload a CV file.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("coverLetter", formData.coverLetter);
    formDataToSend.append("file", formData.file);

    try {
      await axios.post(GETFORM_ENDPOINT, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to submit the CV. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row  className="w-100">
        <Col className="cv-form-container ">
          <div >
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
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
                  <option value="administration">Administration Level</option>
                </Form.Select>
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
              <Form.Group className="mb-3" controlId="formCoverLetter">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Write your cover letter"
                  name="coverLetter"
                  value={formData.coverLetter}
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

export default TestForm;
