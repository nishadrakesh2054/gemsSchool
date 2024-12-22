import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import PhotoOfyear79 from "../../components/gallery/PhotoOfyear79";
import PhotosOfYears from "../../components/gallery/PhotosOfYears";
import PageBanner from "../../components/helper/PageBanner";
import LearningPartners from "../../components/partners/LearningPartners";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="AboutUs Gallery">
      <PageBanner from="Gallery" />
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Photos of 2024">
          <div className="about-page">
            <Row>
              <Col xs={12} lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Photos of 2023"></Tab.Pane>
                  <Tab.Pane eventKey="Photos of 2024">
                    <PhotosOfYears />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Photos of 2023">
                    <PhotoOfyear79 />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col>
                <div className="related-links-message">
                  <p className="acadamic-tab-head mb-4">
                    {" "}
                    <span>Related</span> Links.
                  </p>
                  <Nav
                    variant="pills"
                    className="flex-column tabs-message-about"
                  >
                    {/* <Nav.Link eventKey="Photos of 2023">
                      Photos of 2023
                    </Nav.Link> */}
                    <Nav.Link eventKey="Photos of 2024">
                      Photos of 2024
                    </Nav.Link>
                    <Nav.Link eventKey="Photos of 2023">
                      Photos of 2023
                    </Nav.Link>
                    {/* <Nav.Link eventKey="Photos of 2078">
                      Photos of 2078
                    </Nav.Link>{" "}
                    <Nav.Link eventKey="Photos of 2076">
                      Photos of 2076
                    </Nav.Link>{" "}
                    <Nav.Link eventKey="Photos of 2075">
                      Photos of 2075
                    </Nav.Link>{" "} */}
                  </Nav>
                </div>
              </Col>
            </Row>
          </div>
        </Tab.Container>
      </Container>
      <LearningPartners pm="0" />
    </div>
  );
};

export default Gallery;
