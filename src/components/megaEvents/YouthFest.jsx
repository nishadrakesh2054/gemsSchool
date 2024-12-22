import React, { lazy, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MegaEventslogo from "../../assets/logo/youthfest.png";
import ytfe4 from "../../assets/mega-events/2.jpg";
import ytfe1 from "../../assets/mega-events/DSC_0057.jpg";
import ytfe3 from "../../assets/mega-events/DSC_0170.jpg";
import UnderLine from "../helper/UnderLine";
import Loading from "../loading/Loading";
import "./thunderbolts.scss";
const CarouselMegaEvents = lazy(() => import("./CarouselMegaEvents"));

const YouthFest = () => {
	const photos = [ytfe1, ytfe3, ytfe4];
	return (
		<div className="thunderbolts-mega-events">
			<Container>
				<Row className="thunder-bolts-row mb-0">
					<Col md={4}>
						<div className="thunderbolts-img mb-0">
							<img src={MegaEventslogo} alt="thunderbolts" />
						</div>
					</Col>
					<Col>
						<div className="thunderbolts-cup-text">
							<div className="thundebolts-geaher">
								<p>
									YOUTH FEST <span> 2023.</span>
								</p>{" "}
								<UnderLine width="50px" height="2px" />
							</div>

							<p>
								“GEMS Youth Fest” is a mega event organized
								every year by GEMS School with the active
								involvement of the GEMS Student Council. This
								year, we organised the eleventh edition of the
								event on February 24, 2024, which attracted an
								even bigger audience than in previous years.
								Over 7000 people, mainly school and college
								students, visited the YouthFest, attesting to
								its popularity. This year, many new attractions
								were added for everyone to enjoy.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="thunderbolt-carousel-mesag LearningPartners">
				<Container>
					<Suspense fallback={<Loading />}>
						<CarouselMegaEvents
							fb="https://www.facebook.com/gemsyouthfest/"
							insta="https://www.instagram.com/gemsyouthfest2024/"
							yt="https://www.youtube.com/watch?v=cfMADCAWQAs&ab_channel=GEMSSchool"
							photos={photos}
						/>
					</Suspense>
				</Container>
			</div>
			<div className="thunbolt-2024-cup">
				<Container>
					<div className="headin-cup-2024">
						<p>
							Corporate Social Responsibility<span> (CSR).</span>
						</p>
						<UnderLine width="50px" height="2px" />
					</div>
					<div className="somrtexts-2024">
						<p>
							At GEMS School, corporate social responsibility
							(CSR) is an integral part of our philosophy. Our
							vision statement itself incorporates the goal of a
							sense of commitment and responsibility towards the
							community and society. Corporate social
							responsibility encompasses the use of ethical
							practices as well as environmental, social, and
							financial responsibility. In terms of environmental
							responsibility, proper segregation of waste is done
							to reduce pollution and assist in proper disposal.
							The use of polythene bags is banned on the school
							campus. The planting of trees alongside the road
							leading from Satdobato towards Dhapakhel is also
							part of our contribution to the environmental
							well-being of our community.
							<Link to="/gems-csr"> Read more</Link>
						</p>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default YouthFest;
