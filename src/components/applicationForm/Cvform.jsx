// import { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import "./Cvform.scss";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Cvform = ({ onCloseForm }) => {
//   const [showForm, setShowForm] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     file: null,
//     coverLetter: "",
//     position: "primary",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("phone", formData.phone);
//     formDataToSend.append("position", formData.position);
//     formDataToSend.append("file", formData.file);
//     formDataToSend.append("coverLetter", formData.coverLetter);

//     try {
//       const response = await axios.post(
//         "https://your-api-endpoint.com/submit",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 200) {
//         toast.success("Form submitted successfully!", {
//           position: "top-center",
//           autoClose: 3000,
//         });
//         console.log("Form Submission Response:", response.data);
//       }
//     } catch (error) {
//       toast.error("Failed to submit the form. Please try again.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       console.error("Form Submission Error:", error);
//     }
//   };
//   if (!showForm) return null;
//   return (
//     <Container className="d-flex justify-content-center align-items-center min-vh-100">
//       <Row className="w-100">
//         <Col md={6} className="mx-auto">
//           <div className="cv-form-container px-5  py-3 shadow-lg rounded position-relative">
//             {/* Close Button */}
//             <button
//               className="close-button text-danger fs-2  "
//               //   onClick={() => console.log("Form closed!")}
//               onClick={onCloseForm}
//             >
//               &times;
//             </button>
//             <h2 className="text-center mb-2">Submit Your CV</h2>
//             <Form onSubmit={handleSubmit}>
//               {/* Name */}
//               <Form.Group className="mb-3" controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 />
//               </Form.Group>

//               {/* Email */}
//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 />
//               </Form.Group>

//               {/* Phone */}
//               <Form.Group className="mb-3" controlId="formPhone">
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 />
//               </Form.Group>

//               {/* Choose Position */}
//               <Form.Group className="mb-3" controlId="formPosition">
//                 <Form.Label>Choose Position</Form.Label>
//                 <Form.Select
//                   name="position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   className="form-input"
//                 >
//                   <option value="primary">Primary</option>
//                   <option value="middle">Middle</option>
//                   <option value="secondary">Secondary</option>
//                   <option value="high">High</option>
//                   <option value="administration">Administration</option>
//                 </Form.Select>
//               </Form.Group>

//               {/* CV Upload */}
//               <Form.Group className="mb-3" controlId="formFile">
//                 <Form.Label>Upload Your CV</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="file"
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 />
//               </Form.Group>

//               {/* Cover Letter */}
//               <Form.Group className="mb-3" controlId="formCoverLetter">
//                 <Form.Label>Cover Letter</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   placeholder="Write your cover letter"
//                   name="coverLetter"
//                   value={formData.coverLetter}
//                   onChange={handleChange}
//                   className="form-input"
//                 />
//               </Form.Group>

//               {/* Submit Button */}
//               <div className="text-center ">
//                 <Button type="submit" className="submit-btn">
//                   Submit Application
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Cvform;
import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare EmailJS template parameters
    const formDataToSend = {
      from_name: formData.name,
      to_name: "HR Team",
      reply_to: formData.email,
      phone: formData.phone,
      position: formData.position,
      cover_letter: formData.coverLetter,
    };

    // Sending email via EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formDataToSend,
        "your_user_id" // Replace with your EmailJS public key
      )
      .then((response) => {
        toast.success("CV submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        console.log("Email sent:", response.text);
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
        console.error("Failed to send email:", error);
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
            {/* Close Button */}
            <button
              className="close-button text-danger fs-2"
              onClick={onCloseForm}
            >
              &times;
            </button>
            <h2 className="text-center mb-2">Submit Your CV</h2>
            <Form onSubmit={handleSubmit}>
              {/* Name */}
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

              {/* Email */}
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

              {/* Phone */}
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

              {/* Choose Position */}
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

              {/* Cover Letter */}
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

              {/* Submit Button */}
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
