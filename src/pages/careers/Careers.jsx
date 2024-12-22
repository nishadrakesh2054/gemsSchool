import PageBanner from "../../components/helper/PageBanner";
import "./careers.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import career1 from "../../assets/careergema.png";
import DotTexts from "../../components/helper/DotTexts";
import UnderLine from "../../components/helper/UnderLine";
import Buttons from "../../components/buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  const redirectToJobListing = () => {
    navigate("/job-openings");
  };

  return (
    <>
      <div className="careers">
        <PageBanner from="Careers" />
        <Container>
          <div className="elevate-careers">
            <Row xs={1} md={1} lg={2}>
              <Col>
                <div className="career-side-image">
                  <img src={career1} alt="core admin team" />
                </div>
              </Col>
              <Col>
                <div className="right-test-admin-career">
                  <DotTexts
                    text="Careers"
                    color="#A9A3A3"
                    justify="flex-start"
                  />

                  <div className="elevate-text">
                    <p>
                      Elevate Your <span>Career.</span>
                    </p>
                    <UnderLine width="50px" height="2px" />
                  </div>
                  <div className="some-text">
                    <p>
                      GEMS provides employment opportunities for well-qualified,
                      skilled, and talented personnel who have a passion for the
                      work that they do. As an organization well known for its
                      educational excellence, we provide continuous professional
                      development opportunities for your career growth, be it in
                      the academic arena or the co-curricular or administrative
                      sectors, we provide a stimulating and conducive working
                      environment and support our employees in enhancing their
                      qualifications and skills. You can drop your CV if you
                      wish to become a part of our journey in the quest for
                      excellence.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="join-crew-bg">
          <DotTexts text="GEMS Opening" color="#FFFFFF" />
          <div className="text-join-crew">
            <p>
              Join the <span>GEMS Family.</span>
            </p>
          </div>
          <div className="some-text-crew">
            <p>
              Join the pioneering education leader to collaborate with academia
              experts to propel your career to new heights.
            </p>
          </div>
          <div className="button-oping-see">
            <Buttons
              text="SEE ALL OPEN POSITIONS"
              funs={redirectToJobListing}
            />
          </div>
        </div>
        <div className="drop-your-cv">
          <DotTexts text="GEMS STAFFS" color="#A9A3A3" />
          <div className="text-join-crew">
            <p>
              Can’t find your Preferred <span>Position?</span>
            </p>
          </div>
          <div className="some-text-crew">
            <p>
              If you are qualified, skilled, experienced and have a passion to
              succeed in the field that you excel in, then don&#39;t hesitate to
              contact us! <br /> Submit your CV and we will see if we can
              accommodate you.
            </p>
          </div>
          <div className="button-oping-see">
            <Button href="mailto:hr@gems.edu.np?subject=Dropping my resume">
              DROP YOUR CV
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
