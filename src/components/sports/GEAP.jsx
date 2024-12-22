import React from "react";
import { Container, Table } from "react-bootstrap";

const GEAP = () => {
  return (
    <>
      <div className="geap">
        <Container>
          {/* <div className="geamp-text">
            <p>
              G-EAP (GEMS Extended Activities Programme) is an exclusive
              programme for younger kids where your child will be going through
              7 - 10 activities in a year to install the love and passion for
              sports and activities in themselves. They would be provided 2 days
              in a week with 60 minutes of skill training and development time
              regularly for 5 weeks with 1 week kept as reflection week for all
              activities.
            </p>
          </div> */}
        </Container>
        <div className="table-activities">
          <div className="acti-names">
            <p>Activities at GEMS</p>
          </div>
          <Container>
            <div className="sub-lis-row">
              <Table className="sub-list-table" bordered responsive>
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>G-EAP (Grade 1-5)</th>
                    <th> BIA (Grade 6-9)</th>
                    <th>BIA (Grade 6-9)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Football</td>
                    <td>Football</td>
                    <td>Football</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Futsal</td>
                    <td>Cricket</td>
                    <td>Cricket</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Basketball</td>
                    <td>Basketball</td>
                    <td>Basketball</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Athletics</td>
                    <td>Badminton</td>
                    <td>Badminton</td>
                  </tr>{" "}
                  <tr>
                    <td>5</td>
                    <td>Cricket</td>
                    <td>Volleyball</td>
                    <td>Volleyball</td>
                  </tr>{" "}
                  <tr>
                    <td>6</td>
                    <td>Gymnastics</td>
                    <td>Tennis</td>
                    <td>Tennis</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Taekwondo</td>
                    <td>Table Tennis</td>
                    <td>Table Tennis</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Judo</td>
                    <td>Futsal</td>
                    <td>Futsal</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td></td>
                    <td>Violin</td>
                    <td>Swimming</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td></td>

                    <td>Percussion</td>
                    <td>Vocal</td>
                  </tr>
                  <tr>
                    <td>11</td> <td></td>
                    <td>Vocal</td>
                    <td>Drum</td>
                  </tr>{" "}
                  <tr>
                    <td>12</td>
                    <td></td>

                    <td>Flute</td>
                    <td>Piano</td>
                  </tr>{" "}
                  <tr>
                    <td>13</td>
                    <td></td>

                    <td>Sitar</td>
                    <td>Guitar</td>
                  </tr>{" "}
                  <tr>
                    <td>14</td>
                    <td></td>

                    <td>Piano</td>
                    <td>Art and Design</td>
                  </tr>{" "}
                  <tr>
                    <td>15</td>
                    <td></td>

                    <td>Guitar</td>
                    <td>Craft and Design</td>
                  </tr>{" "}
                  <tr>
                    <td>16</td>
                    <td></td>

                    <td>Drum</td>
                    <td>Dance</td>
                  </tr>{" "}
                  <tr>
                    <td>17 </td>
                    <td></td>

                    <td>Dance</td>
                    <td>Theater and Drama</td>
                  </tr>{" "}
                  <tr>
                    <td>18</td>
                    <td></td>

                    <td>Art and Design</td>
                    <td>Taekwondo</td>
                  </tr>{" "}
                  <tr>
                    <td>19</td>
                    <td></td>

                    <td>Craft and Design</td>
                    <td>Judo</td>
                  </tr>{" "}
                  <tr>
                    <td>20</td>
                    <td></td>

                    <td>Theater and Drama</td>
                    <td>Archery</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td></td>

                    <td>Taekwondo</td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <td>22</td>
                    <td></td>

                    <td>Judo</td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <td>23</td>
                    <td></td>

                    <td>Archery</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="note-for-child">
              <p>
                <span>NOTE: </span>
                Children will be assigned to participate in a combination of six
                to seven activities listed above.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default GEAP;
