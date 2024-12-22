import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DotTexts from "../helper/DotTexts";
import UnderLine from "../helper/UnderLine";
import "./EmployeeYear.scss";
import { Link } from "react-router-dom";

const EmployeeYear = () => {
  const [employeesOfTheYear, setEmployeesOfTheYear] = useState([]);
  const [employeesOfTheTerm, setEmployeesOfTheTerm] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/awardee.php/",
    };

    axios
      .request(options)
      .then(function (response) {
        const allEmployees = response.data;

        // Sort by year in descending order
        const sortedEmployees = allEmployees.sort((a, b) => b.year - a.year);

        const empOfYear = sortedEmployees.filter(
          (employee) => employee.title === "Employee of the Year"
        );
        setEmployeesOfTheYear(empOfYear);

        const empOfTheTerms = sortedEmployees.filter(
          (employee) => employee.title === "Employee of the Term"
        );
        setEmployeesOfTheTerm(empOfTheTerms);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="EmployeeYear LearningPartners">
      <Container className="mb-5">
        <DotTexts text="GemS STAFFS" justify="flex-start" color="#A9A3A3" />
        <p className="learning-text">
          <span>Employee</span> of the Term.
        </p>
        <UnderLine width="50px" height="2px" bg="#17D0CF" />

        <div className="leaning-carousel EmployeeYear-carou">
          <Row xs={1} md={2} lg={5}>
            {employeesOfTheTerm.slice(0, 5).map((employee, idx) => (
              <Col key={idx}>
                <div className="employees" key={idx}>
                  <div className="category-icon-title text-center mb-3">
                    <div className="category-icon">
                      <img src={employee.feature} alt="emp" />
                    </div>
                    <div className="category-title">
                      <div className="name-degi">
                        <h4>{employee.name}</h4>
                        <p className="mb-0"> {employee.desig}</p>
                        <p>{employee.content} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="sermore-empo">
          <Link to="/hall-of-fame">
            See more <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </Container>
      <Container>
        <Container>
          <p className="learning-text">
            <span>Employee</span> of the Year.
          </p>
          <UnderLine width="50px" height="2px" bg="#17D0CF" />

          <div className="leaning-carousel EmployeeYear-carou">
            <Row xs={1} md={2} lg={5}>
              {employeesOfTheYear.slice(0, 5).map((employee, idx) => (
                <Col key={idx}>
                  <div className="employees" key={idx}>
                    <div className="category-icon-title text-center mb-3">
                      <div className="category-icon">
                        <img src={employee.feature} alt="emp" />
                      </div>
                      <div className="category-title">
                        <div className="name-degi">
                          <h4>{employee.name}</h4>
                          <p className="mb-0">{employee.desig}</p>
                          <p>{employee.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="sermore-empo">
            <Link to="/hall-of-fame">
              See more <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default EmployeeYear;
