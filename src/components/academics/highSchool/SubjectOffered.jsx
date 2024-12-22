import React from "react";
import { Container, Table, Row } from "react-bootstrap";

const SubjectOffered = () => {
  return (
    <>
      <div>
        <Container>
          <div className="sub-lis-row">
            <Table className="sub-list-table">
              <thead>
                <tr>
                  <th>English</th>
                  <th> Social Studies & Life Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nepali</td>
                  <td>Mathematics</td>
                </tr>
                <tr>
                  <td>Mathematics</td>
                  <td>Economics</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>Marketing</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Business Maths</td>
                </tr>{" "}
                <tr>
                  <td>Biology</td>
                  <td>Accounting</td>
                </tr>{" "}
                <tr>
                  <td> Computer Science</td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/* <p className="ipc-expalin">
            The students opting for Marketing in their Grade 12 will have to
            undertake an International Certification Programme under the Digital
            Marketing Institute (DMI) mandatorily which is specially designed
            for our high school students of the NEB and A Level to leverage the
            opportunities of getting related jobs while they attend university
            degrees.
          </p> */}
        </Container>
      </div>
    </>
  );
};

export default SubjectOffered;
