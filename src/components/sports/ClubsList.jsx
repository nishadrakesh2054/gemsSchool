import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import visualarts from "../../assets/clubs/visual-arts.jpg";
import "./programs.scss";
import permart from "../../assets/clubs/preforming-art.jpg";
import sports from "../../assets/clubs/sports.jpg";
import library from "../../assets/clubs/library.jpg";
import socialservice from "../../assets/clubs/social-service.jpg";
import imge1 from "../../assets/clubs/IMG_2641.jpg";

const ClubsList = () => {
  return (
    <>
      <div className="clusb-list geap">
        <div className="table-activities ">
          <Container>
            <Row className="mb-5">
              <Col md={4}>
                <img
                  src={visualarts}
                  alt="visula-arts"
                  className="image-clubs"
                />
              </Col>
              <Col>
                <div className="clus-text">
                  <div className="club-head">
                    <p>Visual Arts Club</p>
                  </div>
                  <div className="cluv-decv">
                    Nurturing creativity and artistic skills with various
                    mediums, from painting to digital art and photography.
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="clus-text text-align-right">
                  <div className="club-head">
                    <p>Environment Club</p>
                  </div>
                  <div className="cluv-decv">
                    Promoting sustainability and environmental stewardship
                    through hands-on projects and initiatives.
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <img src={imge1} alt="visula-arts" className="image-clubs" />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={4}>
                <img src={permart} alt="visula-arts" className="image-clubs" />
              </Col>
              <Col>
                <div className="clus-text">
                  <div className="club-head">
                    <p>Performing Arts Club</p>
                  </div>
                  <div className="cluv-decv">
                    Fostering talent and confidence in theatre, music, and dance
                    through regular performances and workshops.
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="clus-text text-align-right">
                  <div className="club-head">
                    <p> Sports Club</p>
                  </div>
                  <div className="cluv-decv">
                    Encouraging physical fitness and teamwork through a variety
                    of sports activities and competitions.
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <img src={sports} alt="visula-arts" className="image-clubs" />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={4}>
                <img src={library} alt="visula-arts" className="image-clubs" />
              </Col>
              <Col>
                <div className="clus-text">
                  <div className="club-head">
                    <p>Literary Club</p>
                  </div>
                  <div className="cluv-decv">
                    Inspiring a love for reading and writing through book
                    discussions, creative writing sessions, and literary events.
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="clus-text text-align-right">
                  <div className="club-head">
                    <p> Social Service Club</p>
                  </div>
                  <div className="cluv-decv">
                    Developing a sense of empathy for the less fortunate
                    individuals in the community and lending a helping hand to
                    the elderly and victims of circumstances.
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <img
                  src={socialservice}
                  alt="visula-arts"
                  className="image-clubs"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ClubsList;
