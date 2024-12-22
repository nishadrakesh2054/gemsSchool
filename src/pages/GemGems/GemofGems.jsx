import React, { useState, useEffect } from "react";
import PageBanner from "../../components/helper/PageBanner";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "./gemsgems.scss";
import UnderLine from "../../components/helper/UnderLine";
import DotTexts from "../../components/helper/DotTexts";
import LearningPartners from "../../components/partners/LearningPartners";
import axios from "axios";
import placeholderimaghe from "../../assets/logo/gems-logo.png";

const GemofGems = () => {
  const [achieversData, setAchieversData] = useState({});
  const [error, setError] = useState(null);

  const getAchieversByYear = async (batch) => {
    try {
      const response = await axios.get(
        "https://mis.gemsholdings.com/api/v1/acheivers.php",
        {
          params: { batch: batch },
        }
      );
      //   console.log(response.data);
      setAchieversData((prevData) => ({
        ...prevData,
        [batch]: response.data,
      }));
    } catch (error) {
      console.error(error);
      setError("Failed to fetch achievers.");
    }
  };

  useEffect(() => {
    const years = ["2024", "2023", "2022", "2021", "2020"];
    years.forEach((year) => {
      getAchieversByYear(year);
    });
  }, []);

  return (
    <>
      <div className="gems-of-gems">
        <PageBanner from="GEM OF GEMS" />
        <Container>
          <div className="gems-row">
            <div className="gems-og-tex-head">
              <DotTexts text="High Achievers" color="#A9A3A3" />
              <p className="hem-gem">
                GEM OF <span>GEMS.</span>
              </p>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="2024">
              <Row>
                <Col md={9} className="col-row-gems">
                  <div className="high-ach">
                    <Tab.Content>
                      {["2024", "2023", "2022", "2021", "2020"].map((year) => (
                        <Tab.Pane eventKey={year} key={year}>
                          <p>
                            High Achievers <span>{year}.</span>
                          </p>
                          <UnderLine width="50px" height="2px" />
                          <div className="list-of-hig-achi p-0">
                            <Row
                              xs={1}
                              md={2}
                              lg={3}
                              className="heoght-achiver"
                            >
                              {achieversData[year] &&
                                achieversData[year].map((achiever, idx) => (
                                  <Col key={idx}>
                                    <div className="hight-achiver-box">
                                      <img
                                        src={
                                          achiever?.feature
                                            ? achiever?.feature
                                            : placeholderimaghe
                                        }
                                        alt="achiever"
                                      />
                                      <div className="inftext">
                                        <p className="more0weidgth-ni">
                                          {achiever?.name}
                                        </p>
                                        <p>{achiever?.title}</p>
                                        <p>{achiever?.batch}</p>
                                      </div>
                                    </div>
                                  </Col>
                                ))}
                            </Row>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                </Col>
                <Col>
                  <div className="related-links">
                    <p>
                      <span>Related</span> Links.
                    </p>
                    <Nav variant="pills" className="flex-column tab-ret-ach">
                      {["2024", "2023", "2022", "2021", "2020"].map((year) => (
                        <Nav.Item key={year}>
                          <Nav.Link eventKey={year}>
                            High Achievers {year}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </div>
      <LearningPartners />
    </>
  );
};

export default GemofGems;
