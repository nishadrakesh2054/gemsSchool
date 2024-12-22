import React, { lazy, Suspense } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import MegaEventslogo from "../../assets/logo/TBC_LOGO.png";
import UnderLine from "../helper/UnderLine";
import "./thunderbolts.scss";
import logo1 from "../../assets/some-logos-thunder/Rectangle 15.png";
import logo2 from "../../assets/some-logos-thunder/Rectangle 16.png";
import logo3 from "../../assets/some-logos-thunder/Rectangle 17.png";
import logo5 from "../../assets/some-logos-thunder/Rectangle 19.png";
import logo7 from "../../assets/some-logos-thunder/Rectangle 21.png";
import logo8 from "../../assets/some-logos-thunder/Rectangle 22.png";
import logo9 from "../../assets/some-logos-thunder/Rectangle 23.png";
import logo10 from "../../assets/some-logos-thunder/Rectangle 24.png";
import logo6 from "../../assets/some-logos-thunder/Rectangle 25.png";
import logo4 from "../../assets/some-logos-thunder/footsall.png";
import Loading from "../loading/Loading";
const CarouselMegaEvents = lazy(() => import("./CarouselMegaEvents"));

import thunder1 from "../../assets/mega-events/IMG_3284.jpg";
import thunder2 from "../../assets/about-us/DSC_0666.jpg";
import thunder3 from "../../assets/mega-events/thunder3.jpg";
import thunder4 from "../../assets/mega-events/DSC_0082.jpg";

const ThunderBolts = () => {
  const photos = [thunder1, thunder2, thunder3, thunder4];
  return (
    <div className="thunderbolts-mega-events">
      <Container>
        <Row className="thunder-bolts-row">
          {/* <Col md={4}></Col> */}
          <Col>
            <div className="thunderbolts-img">
              <img src={MegaEventslogo} alt="thunderbolts" />
            </div>
            <div className="thunderbolts-cup-text">
              <div className="thundebolts-geaher">
                <p>
                  THUNDERBOLTS <span>CUP 2023.</span>
                </p>{" "}
                <UnderLine width="50px" height="2px" />
              </div>

              <p>
                At GEMS, the Thunderbolt is a symbol that exhibits the
                attributes that we would like to inculcate in our students. A
                never "say die spirit", never losing heart even in defeat, but
                reflecting on the weakness and working to overcome the same , by
                becoming more goal-oriented, and determined. The GEMS
                Thunderbolts work relentlessly, in order to achieve victory and
                do not get deterred by any setbacks. In order to pass on this
                message THE THUNDERBOLTS CUP was conceptualized, to bring
                together the schools in Nepal with the main aim to help develop,
                upgrade and promote a progressive sports culture at the school
                level in the country. <br /> <br />
                The Thunderbolts Cup was organized following an Olympic-style
                point format where the participating schools were offered a
                total of 10 events under 24 different sub-categories where the
                school that accumulated the most points, was awarded the
                Thunderbolts Cup and a cash prize of NRS.5 Lakh.
                <br /> <br /> The tournaments were conducted from the 23 rd of
                September to the 8 th October 2023. A total of 134 schools
                participated and a total of 2399 students took part, including
                GEMS students. A total of 393 playing hours was utilized and 6
                schools from outside the valley participated including two
                government schools. <br /> <br /> GEMS were the winners with 31
                points followed by Sainik Awasiya Mahavidhyalaya, Bhaktapur, in
                second place with 21 points and Nepal Police School, Kavre, as
                the 2 nd runner up with 18 points.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="thunderbolt-carousel-mesag LearningPartners">
        <Container>
          <Suspense fallback={<Loading />}>
            <CarouselMegaEvents
              insta="https://www.instagram.com/thunderbolts.cup/"
              fb="https://www.facebook.com/thunderbolts.cup/"
              yt="https://www.youtube.com/channel/UCfuQP0EgHrQnqy-nEDpD39A"
              photos={photos}
            />
          </Suspense>
        </Container>
      </div>
      <div className="some-logos-thunderbolts">
        <Container>
          <div className="logos-inline-tghunder">
            <div className="logo-texts">
              <img src={logo1} alt="tunder-logo" />
              <p>Football</p>
            </div>
            <div className="logo-texts">
              <img src={logo2} alt="tunder-logo" />
              <p>Cricket</p>
            </div>
            <div className="logo-texts">
              <img src={logo3} alt="tunder-logo" />
              <p>Basketball</p>
            </div>
            <div className="logo-texts">
              <img src={logo4} alt="tunder-logo" />
              <p>Futsal</p>
            </div>
            <div className="logo-texts">
              <img src={logo5} alt="tunder-logo" />
              <p>Badminton</p>
            </div>
            <div className="logo-texts">
              <img src={logo6} alt="tunder-logo" />
              <p>Archery</p>
            </div>
            <div className="logo-texts">
              <img src={logo7} alt="tunder-logo" />
              <p>Volleyball</p>
            </div>
            <div className="logo-texts">
              <img src={logo8} alt="tunder-logo" />
              <p>Swimming</p>
            </div>
            <div className="logo-texts">
              <img src={logo9} alt="tunder-logo" />
              <p>Table Tennis</p>
            </div>
            <div className="logo-texts">
              <img src={logo10} alt="tunder-logo" />
              <p>Taekwondo</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="thunder-bolts-winner-table">
        <Container>
          <div className="thunder-winnder-text">
            <p className="her-text-rin">
              THUNDERBOLTS CUP 2023 <span>WINNER.</span>
            </p>
            <p>
              We encourage our students to come out of their comfort zone so
              that growth can take place. One of the areas that we strongly
              stress is building self-confidence, resilience, physical fitness,
              a positive outlook, and a collaborative team spirit in our
              students through sports and activities. These platforms provide
              them opportunities to gain those soft skills that will prepare
              them for their future life, which cannot be imparted within the
              four walls of a classroom alone.
            </p>
            <div className="table-einnser-thunderbolts">
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>School</th>
                    <th>First (5pt)</th>
                    <th>Second (3pt)</th>
                    <th>Thirds (1pt)</th>
                    <th>Total Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>First</td>
                    <td>GEMS School</td>
                    <td>2</td>
                    <td>6</td>
                    <td>3</td>
                    <td>31</td>
                  </tr>{" "}
                  <tr>
                    <td>Second</td>
                    <td>Sainik Awasiya Mahavidhyalaya</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>21</td>
                  </tr>{" "}
                  <tr>
                    <td>Third</td>
                    <td>Nepal Police School, Kavre</td>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Fourth</td>
                    <td>Rato Bangala School</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>Fifth</td>
                    <td>Nisarga Batika School</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Sixth</td>
                    <td>Xavier International School</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Seventh</td>
                    <td>AVM School</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Eighth</td>
                    <td>Ullens School</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Ninth</td>
                    <td>Kathmandu World School</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
      <div className="thunbolt-2024-cup">
        <Container>
          <div className="headin-cup-2024">
            <p>
              THUNDERBOLTS CUP <span>2024.</span>
            </p>
            <UnderLine width="50px" height="2px" />
          </div>
          <div className="somrtexts-2024">
            <p>
              As we reflect on the success of the Thunderbolts Cup 2023, we are
              happy to announce the second exhilarating edition of this
              mega-sporting event. <br /> <br />
              At GEMS, the Thunderbolt is the beacon of resilience,
              determination, and an unwavering sports spirit. The Thunderbolts
              Cup embodies these values, serving as a platform to celebrate the
              pursuit of sporting excellence, the thrill of the competition, and
              the camaraderie forged through sporting events. <br /> <br /> The
              second edition of this mega event promises to deliver an
              unforgettable experience for participants and spectators alike.
              From November 15 to December 24, schools from across Nepal will be
              converging at GEMS School to compete in the 24 sub-categories of
              sporting events.
              <br /> <br />
              The Olympic-type point format will be followed, and the schools
              will engage in a fiercely competitive spirit to accumulate the
              highest points possible. The stakes are high, as the winning
              school will be awarded the Thunderbolts Cup and a cash prize of
              NRS 5 lakh. The Thunderbolts Cup 2024 offers a fresh opportunity
              for all schools to showcase their best sporting talent. Whether a
              seasoned athlete or a newcomer, everyone will have an opportunity
              to be part of this celebration. <br /> <br />
              We invite all schools to join us as we ignite the flames of
              competition, inspire athletes to excel, and celebrate the
              boundless potential of the human spirit. The Thunderbolts Cup is a
              testament to the power of sports to unite, inspire, and transform
              lives. We request that you rally your school teams to unleash
              their inner spirit of the Thunderbolt and journey together towards
              sporting excellence.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ThunderBolts;
