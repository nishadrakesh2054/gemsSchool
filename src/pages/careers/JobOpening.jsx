import React, { useEffect, useState } from "react";
import CareerBanner from "../../components/careers/CareerBanner";
import DotTexts from "../../components/helper/DotTexts";
import "./jonopening.scss";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";

import ApplicationForm from "../../components/applicationForm/Cvform";

const JobOpening = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobOpening, setJobOpening] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/career.php",
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setJobOpening(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


  
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <div className="job-opening">
        <CareerBanner />

        <div className="new-opeinigns">
          <DotTexts text="Join us" color="#A9A3A3" />
          <div className="cur-text">
            <p>
              Current <span>Openings.</span>
            </p>
          </div>
        </div>
        <Container>
          <div className="list-tabs-cards">
            <p className="list-nun">
              <span>{jobOpening.length} JOBS</span>
            </p>
          </div>
          <div className="listins">
            <Row xs={1} md={2} className="g-4">
              {jobOpening.map((_, idx) => (
                <Col key={idx}>
                  <Link
                    className="card-link"
                    to={`/jobs-at-gems/${_?.id}/${_?.title}/`}
                  >
                    <Card className="card-job">
                      <Card.Body className="card-job-body">
                        <div className="job-title">
                          <p>{_.title}</p>
                        </div>
                        <div className="loc-job mb-2">{_?.location}</div>
                        {/* <div className="loc-job">
                          <p>Fresher</p>
                        </div> */}
                        <div className="small-intor-jb">
                          GEMS School was founded in 1984 in Sanepa, Lalitpur,
                          starting with 78 students and 25 staff members,
                          offering Nursery to grade III. Now a full-fledged
                          higher secondary school, it runs classes from grade
                          one to twelve. In August 2000, grades four to ten
                          moved to a new complex in Dhapakhel, 1.5 kilometers
                          from Sat Dobato on the Ring Road. By 2077, this
                          complex hosted all classes from one to ten.
                        </div>
                        <div className="date-full-type">
                          <p>{_?.valid}</p>
                          <p>{_?.type}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>

          {/* {!showForm && (
            <div className="d-flex justify-content-center ">
              <Button onClick={handleButtonClick} className="alex border-0 px-3">DROP YOUR CV</Button>
            </div>
          )}

          {showForm && <ApplicationForm />} */}
              {!showForm && (
            <div className="d-flex justify-content-center ">
              <Button onClick={handleButtonClick} className="alex border-0 px-3">
                DROP YOUR CV
              </Button>
            </div>
          )}

          {showForm && <ApplicationForm onCloseForm={handleButtonClick} />}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default JobOpening;
