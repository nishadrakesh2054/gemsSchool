import React from "react";
import { Container, Row, Tab } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import manavcsr from "../../assets/ManavSewaAshram.jpg";
import img1 from "../../assets/abt-2.jpg.png";
import csr1 from "../../assets/csr1.jpg.png";
import "../../pages/about/about.scss";
import PageBanner from "../helper/PageBanner";
import UnderLine from "../helper/UnderLine";
import LearningPartners from "../partners/LearningPartners";
import "./LearningPedagogy.scss";

const CSR = () => {
  const location = useLocation();

  const showCSR = location.pathname === "/gems-csr";

  return (
    <>
      <div className="AboutUs">
        <PageBanner from="CSR" />
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="CSR">
            <div className="about-page">
              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="CSR">
                    <div className="csr LearningPedagogy">
                      <div className="head-text-le-pda">
                        <p>
                          Corporate Social Responsibility <span>(CSR).</span>
                        </p>
                        <UnderLine width="50px" height="2px" />
                      </div>
                      <div className="dometex-ped-img">
                        <p>
                          At GEMS School, corporate social responsibility (CSR)
                          is an integral part of our philosophy. Our vision
                          statement itself incorporates the goal of a sense of
                          commitment and responsibility towards the community
                          and society. Corporate social responsibility
                          encompasses the use of ethical practices as well as
                          environmental, social, and financial responsibility.
                          In terms of environmental responsibility, proper
                          segregation of waste is done to reduce pollution and
                          assist in proper disposal. The use of polythene bags
                          is banned on the school campus. The planting of trees
                          alongside the road leading from Satdobato towards
                          Dhapakhel is also part of our contribution to the
                          environmental well-being of our community. <br />{" "}
                          <br />
                          As a 'Bishista Shreni' category school, we are also
                          committed to the well-being of our employees as well
                          as providing the quality of education as per the
                          expectations of our patrons, the parents of our
                          students, the students themselves, and the community.
                          We are committed to fostering a culture of sustainable
                          environmental practices, community engagement, ethical
                          practices, and philanthropic outreach. Our students
                          regularly engage in community service projects through
                          the Social Service Club and annually contribute
                          clothing and stationery to the local orphanage, as
                          well as provide various items for the elderly from
                          time to time. <br /> <br />
                          As a part of the CSR, GEMS has adopted a government
                          school, the{" "}
                          <a href="#shree-krishna">
                            Shree Krishna Madhyamik Vidyalaya,
                          </a>{" "}
                          in the locality via a MOU to provide help to their
                          school infrastructure and has set up an infirmary and
                          trained two teachers to provide basic medical help to
                          the students and staff. Besides this, we also have an
                          MOU with the{" "}
                          <a href="#life-visinon">Life Vision Academy</a> in
                          Bisankhunarayan, a school for marginalized and
                          financially challenged students. We regularly provide
                          essentials to the{" "}
                          <a href="#manav-sewa"> Manav Sewa Ashram,</a> home for
                          the elderly Dhapakhel. Thus, GEMS continues to have
                          programs for reaching out to the less fortunate in
                          fulfilling our CSR commitments as well as working
                          toward our commitment and responsibility towards the
                          community and society.
                        </p>
                        <img src={img1} alt="leadning" />
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </div>
          </Tab.Container>
        </Container>
        {showCSR && (
          <>
            <div className="csr-oberlay ">
              <Container>
                <div className="head-text-le-pda" id="shree-krishna">
                  <p>
                    Shree Krishna Madhyamik Vidhyalaya, <span>Lalitpur.</span>
                  </p>
                </div>
                <div className="img-tex-csr">
                  <img
                    src="https://youthfest.com.np/images/ShreeKrishnaMadhyamikVidhyalaya.jpg"
                    alt="shree krishna"
                  />
                  <p>
                    Through our outreach program, GEMS School, in continuation
                    of its commitment to the health and well-being of students,
                    installed an infirmary at a neighboring government school,
                    Shree Krishna Madhyamik Vidhyalaya, Dhapakhel. Recognizing
                    the necessity of providing immediate medical attention and
                    care for students, GEMS School took the initiative to ensure
                    that government school students have access to basic first
                    aid and healthcare services by setting up an infirmary
                    equipped with the necessary medical supplies and comfortable
                    beds. Training was also provided for the personnel at the
                    school to address minor health problems among students and
                    staff. Through such contributions, GEMS School continues to
                    uphold its values of empathy and community support, making a
                    tangible difference in the lives of students and educators
                    alike.
                    <Link
                      to="https://youthfest.com.np/csr.html"
                      target="_blank"
                    >
                      {" "}
                      Read more
                    </Link>
                  </p>
                </div>
                <div className="head-text-le-pda mt-5" id="life-visinon">
                  <p>
                    Life Vision Academy, <span>Bishankhunarayan. </span>
                  </p>
                </div>
                <div className="img-tex-csr">
                  <img alt="life-visiobn" src={csr1} />
                  <p>
                    In a meaningful demonstration of solidarity and support,
                    GEMS School agreed to extend a helping hand to 'Life Vision
                    Academy' (a school run by CYF Nepal for marginalized and
                    financially challenged students) by providing essential
                    furniture to set up their IT lab. Through this contribution,
                    students at the Life Vision Academy now have a lab furnished
                    with the required number of desks, chairs, and storage
                    units, facilitating a conducive learning environment for
                    exploring the realms of technology. GEMS also donated 16
                    bunk beds and 32 full sets of bedding for the students. This
                    initiative underscores GEMS School's commitment to reach out
                    to the community and also provide essential facilities for
                    the less fortunate learners, who lack basic amenities.
                    <Link
                      to="https://youthfest.com.np/csr.html"
                      target="_blank"
                    >
                      {" "}
                      Read more
                    </Link>
                  </p>
                </div>

                <div className="head-text-le-pda mt-5" id="manav-sewa">
                  <p>
                    Manav Sewa Ashram,<span> Dhapakhel. </span>
                  </p>
                </div>
                <div className="img-tex-csr">
                  <img alt="life-visiobn" src={manavcsr} />
                  <p>
                    GEMS School, as part of its CSR initiative, made a
                    meaningful contribution in the form of a tangible donation
                    of electrical appliances for daily use, such as a two-door
                    refrigerator and a UV water purification system, to Manav
                    Sewa Ashram. Manav Sewa Ashram is an organization that
                    provides food, shelter, and care for the elderly, some of
                    whom suffer from mental disorders. The proceeds from the
                    GEMS Youth Fest 2023 were utilized for the donation. We look
                    forward to registering more significant contributions in the
                    future towards the aid, care, and well-being of the elderly
                    residents of the ashram.
                    <Link
                      to="https://youthfest.com.np/csr.html"
                      target="_blank"
                    >
                      {" "}
                      Read more
                    </Link>
                  </p>
                </div>
              </Container>
            </div>
          </>
        )}

        <LearningPartners pm="0rem" />
      </div>
    </>
  );
};

export default CSR;
