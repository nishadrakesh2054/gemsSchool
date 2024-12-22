import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import DotTexts from "../helper/DotTexts";
import PageBanner from "../helper/PageBanner";
import UnderLine from "../helper/UnderLine";
import LearningPartners from "../partners/LearningPartners";
import "./hallof.scss";

const HallofFame = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("Term");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/awardee.php/",
    };

    axios
      .request(options)
      .then(function (response) {
        setEmployeeData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Extract unique years and sort them in descending order
  const uniqueYears = [
    ...new Set(employeeData.map((employee) => employee.year)),
  ].sort((a, b) => b - a);

  const titles = ["Employee of the Term", "Employee of the Year"];
  const defaultActiveYear = "2024";

  const handleSelect = (eventKey) => {
    if (eventKey.includes("Employee of the Term")) {
      setCurrentTitle("Term");
    } else if (eventKey.includes("Employee of the Year")) {
      setCurrentTitle("Year");
    }
  };

  return (
    <div className="gems-of-gems HallofFame">
      <PageBanner from="Hall of Fame " />
      <Container>
        <div className="gems-row">
          <div className="gems-og-tex-head">
            <DotTexts text="Employee" color="#A9A3A3" />
            <p className="hem-gem">
              Hall of <span> Fame.</span>
            </p>
          </div>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={`Employee of the Term ${defaultActiveYear}`}
            onSelect={handleSelect}
          >
            <Row>
              <Col md={9} className="col-row-gems">
                <div className="high-ach">
                  <p>
                    Employee of the <span>{currentTitle}.</span>
                  </p>
                  <UnderLine width="50px" height="2px" />

                  <div className="list-of-hig-achi">
                    <Tab.Content>
                      {uniqueYears.map((year) => (
                        <React.Fragment key={year}>
                          <Tab.Pane eventKey={`Employee of the Term ${year}`}>
                            <Row
                              xs={1}
                              md={2}
                              lg={4}
                              className="heoght-achiver"
                            >
                              {employeeData
                                .filter(
                                  (employee) =>
                                    employee.year === year &&
                                    employee.title === "Employee of the Term"
                                )
                                .map((employee, idx) => (
                                  <Col key={idx}>
                                    <div className="employees">
                                      <div className="category-icon-title text-center mb-3">
                                        <div className="category-icon">
                                          <img
                                            src={employee.feature}
                                            alt="emp"
                                          />
                                        </div>
                                        <div className="category-title">
                                          <div className="name-degi">
                                            <h4>{employee.name}</h4>
                                            <p className="mb-0">
                                              {employee.desig}
                                            </p>
                                            <p>{employee.content}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                ))}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey={`Employee of the Year ${year}`}>
                            <Row
                              xs={1}
                              md={2}
                              lg={4}
                              className="heoght-achiver"
                            >
                              {employeeData
                                .filter(
                                  (employee) =>
                                    employee.year === year &&
                                    employee.title === "Employee of the Year"
                                )
                                .map((employee, idx) => (
                                  <Col key={idx}>
                                    <div className="employees">
                                      <div className="category-icon-title text-center mb-3">
                                        <div className="category-icon">
                                          <img
                                            src={employee.feature}
                                            alt="emp"
                                          />
                                        </div>
                                        <div className="category-title">
                                          <div className="name-degi">
                                            <h4>{employee.name}</h4>
                                            <p className="mb-0">
                                              {employee.desig}
                                            </p>
                                            <p>{employee.content}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                ))}
                            </Row>
                          </Tab.Pane>
                        </React.Fragment>
                      ))}
                    </Tab.Content>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="related-links">
                  <p>
                    <span>Related</span> Links.
                  </p>
                  <Nav
                    variant="pills"
                    className="flex-column tab-ret-ach tabs-message-about"
                  >
                    <Accordion
                      defaultActiveKey={`Employee of the Term ${defaultActiveYear}`}
                    >
                      {titles.map((title) => (
                        <Accordion.Item eventKey={title} key={title}>
                          <Accordion.Header>{title}</Accordion.Header>
                          <Accordion.Body>
                            {uniqueYears.map((year) => (
                              <Nav.Link
                                eventKey={`${title} ${year}`}
                                key={`${title} ${year}`}
                              >
                                {title} {year}
                              </Nav.Link>
                            ))}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Nav>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
      <LearningPartners />
    </div>
  );
};

export default HallofFame;
