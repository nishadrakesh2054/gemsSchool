import React from "react";
import { Table } from "react-bootstrap";

const ExamProc = () => {
  return (
    <>
      <div className="exam-prode">
        <p>
          GEMS students who do not apply within the deadline given to them and
          applicants from other schools who are eligible will have to appear for
          a written examination, which will be conducted in the following
          subjects:
        </p>
        <div className="table-exam-prode">
          <Table responsive>
            <thead>
              <tr>
                <th>Stream</th>
                <th>Subjects</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Science</td>
                <td className="under-lonf-td">
                  <p>a. English</p>
                  <p>b. Combined Science (Chemistry and Physics)</p>{" "}
                  <p>c. Mathematics</p>
                </td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>Non - Science</td>
                <td className="under-lonf-td">
                  <p>a. English</p>
                  <p>b. Mathematics</p>
                </td>
                <td>1 hour</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p className="mt-4">
          1. The written examination will consist of multiple-choice questions
          to test aptitude and subjective questions to test critical thinking
          ability.
          <br /> <br />
          2. Questions will be based on the secondary-level curriculum.
          <br /> <br />
          3.Candidates who qualify for the written entrance examination will be
          called for an interview.
          <br /> <br />
          4. Students must be accompanied by their parents or guardians during
          the interview.
          <br /> <br />
          5. Admission is granted after the final short-listing following the
          interview.
          <br /> <br />
          6. Once the student is admitted to the High School, the admission
          fees, including the annual fees, will not be refunded in case of the
          cancellation or withdrawal of the admission by the admitted student.
        </p>
      </div>
    </>
  );
};

export default ExamProc;
