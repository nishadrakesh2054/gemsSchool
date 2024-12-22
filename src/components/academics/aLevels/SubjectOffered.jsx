import React from "react";
import { Container, Table, Row } from "react-bootstrap";

const SubjectOffered = () => {
  return (
    <>
      <div>
        <Container>
          <p className="ipc-expalin pt-5 ">
            Credits ‘A’ refers to a full two-year course that carries 1.0
            credits, and ‘AS’ refers to a one-year course that carries 0.5
            credits. Students need to select a minimum of three A-level subjects
            and one AS subject from the given list. They can opt for a
            combination of subjects as per their interests. Help can be sought
            from the Students Counsellor for selecting the subject combinations.
          </p>
          <div className="sub-lis-row p-0">
            <Table className="sub-list-table">
              <thead>
                <tr>
                  <th>Physics (A)</th>
                  <th> Economics (A)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chemistry (A)</td>
                  <td>Information Technology (A)</td>
                </tr>
                <tr>
                  <td>Biology (A)</td>
                  <td>Psychology (A)</td>
                </tr>
                <tr>
                  <td>Mathematics (A)</td>
                  <td>Sociology (A)</td>
                </tr>
                <tr>
                  <td>English General Paper (AS)</td>
                  <td>Art and Design (A)</td>
                </tr>{" "}
                <tr>
                  <td>Computer Science (A)</td>
                  <td>Literature in English (A)</td>
                </tr>{" "}
                <tr>
                  <td>Accounting (A)</td>
                  <td>Global Perspectives and Research (A)</td>
                </tr>
                <tr>
                  <td>Business (A)</td>
                  <td>Law (A)</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SubjectOffered;
