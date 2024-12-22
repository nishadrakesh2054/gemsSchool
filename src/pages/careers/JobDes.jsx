import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import JobDecBanner from "../../components/careers/JobDecBanner";
import DotTexts from "../../components/helper/DotTexts";
import "./jobdec.scss";
import CareerFooter from "../../components/careers/CareerFooter";
import axios from "axios";
import { useParams } from "react-router-dom";
import he from "he";

const JobDes = () => {
  const [jobOpening, setJobOpening] = useState(null);
  const [status, setStatus] = useState("In-progress");
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://mis.gemsholdings.com/api/v1/career.php?id=${id}/`,
    };

    axios
      .request(options)
      .then(function (response) {
        const jobData = response.data[0];
        // console.log(jobData);
        setJobOpening(jobData);
        // Assuming jobData contains a valid date in the format "YYYY-MM-DD"
        const validDate = new Date(jobData.valid);
        const currentDate = new Date();
        if (currentDate > validDate) {
          setStatus("Expired");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <div className="JobDes">
        <JobDecBanner
          jobTitle={jobOpening?.title}
          postedon={jobOpening?.created}
        />
        <Container>
          <div className="job-dec-class">
            <DotTexts text="JOB DETAILS" color="#A9A3A3" />
            <Row className="mt-5">
              <Col lg={9}>
                <div className="left-side-dec-job">
                  <div className="heading-job">
                    <p>About us</p>
                  </div>
                  <div className="dec-head-dow">
                    <p>
                      Since its humble beginning at Sanepa, GEMS school today
                      stands at the forefront of school education in Nepal,
                      through the hard work, dedication, and due foresight of
                      its visionary founders and the diligence of its staff. We
                      now stand as a top-rated school in the country, offering
                      schooling from class one right up to high school [NEB], as
                      well as the Cambridge A Level course, and we are the
                      recipient of numerous National and Regional Awards and
                      accolades for our SEE results, as well as attainment of
                      World Rankings by our A Level students in the CAIE
                      examinations.
                    </p>
                  </div>
                  <div className="heading-job">
                    <p>Job Overview</p>
                  </div>
                  {jobOpening?.content && (
                    <div
                      className="dec-head-dow"
                      dangerouslySetInnerHTML={{
                        __html: he.decode(jobOpening.content),
                      }}
                    />
                  )}
                  {jobOpening?.req && (
                    <>
                      <div className="heading-job">
                        <p>Requirements</p>
                      </div>
                      <div
                        className="dec-head-dow"
                        dangerouslySetInnerHTML={{
                          __html: he.decode(jobOpening.req),
                        }}
                      />
                    </>
                  )}
                </div>
                <div className="intersted-btns mb-3">
                  <Button
                    href={`mailto:hr@gems.edu.np?subject=Job Application for ${jobOpening?.title}`}
                  >
                    I’m interested
                  </Button>
                </div>{" "}
              </Col>
              <Col>
                <div className="side-list-des-jobn">
                  <div className="heading-job mb-4">
                    <p>Job Information</p>
                  </div>
                  <div className="low-text-head">
                    <p>Title</p>
                    <span>{jobOpening?.title}</span>
                  </div>
                  <div className="low-text-head">
                    <p>Job Type</p>
                    <span>{jobOpening?.type}</span>
                  </div>
                  {/* <div className="low-text-head">
                    <p>Job Opening Status</p>
                    <span>{status}</span>
                  </div> */}
                  <div className="low-text-head">
                    <p>Application Deadline</p>
                    <span>{jobOpening?.valid}</span>
                  </div>
                  {/* <div className="low-text-head"> 
                    <p>Work Experience</p>
                    <span>3+ years</span>
                  </div> */}
                  <div className="low-text-head">
                    <p>City</p>
                    <span>{jobOpening?.location}</span>
                  </div>

                  <div className="low-text-head">
                    <p>Country</p>
                    <span>Nepal</span>
                  </div>
                  {/* <div className="low-text-head">
                    <p>Zip/Postal Code</p>
                    <span>44600</span>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <CareerFooter />
      </div>
    </>
  );
};

export default JobDes;
