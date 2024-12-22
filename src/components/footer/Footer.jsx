import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import foutryyear from "../../assets/logo/black-logo-40.png";
import UnderLine from "../helper/UnderLine";
import "./footer.scss";
import { footerImgae } from "./footerimgaes";
import { toast } from "react-toastify";

const Footer = () => {
	const [email, setEmail] = useState("");

	const addEmail = (e) => {
		e.preventDefault();
		const options = {
			method: "POST",
			url: "https://mis.gemsholdings.com/subscribe.php",
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({ email: email }),
		};

		axios
			.request(options)
			.then(function (response) {
				// console.log(response.data);
				toast.success("We'll get back to you!", {
					theme: "dark",
				});
				setEmail("");
			})
			.catch(function (error) {
				console.error(error);
				toast.error(error?.response?.data?.error, {
					theme: "dark",
				});
			});
	};
	return (
		<>
			<div className="footer">
				<Container className="footer-cotainer">
					<Row xs={1} md={2} lg={3}>
						<Col>
							<div className="logos">
								<img
									src={foutryyear}
									alt="fourty"
									className="logo40-years"
								/>
								<div className="gems-school">
									{/* <img src={gemslogo} alt="fourty" /> */}
									<p>
										Commemorative Forty Years of Operation
									</p>
								</div>
							</div>
							<p className="text-footer-intro">
								GEMS School is in its forty years of operation,
								this academic session, since its inception in
								the year 1984. This commemorative year will be
								celebrated and marked with special events
								throughout the academic calendar.
							</p>
							<br />
							<p className="text-footer-intro">
								A commemorative logo, merchandise, and
								souvenirs, as well as a coffee table book to
								mark this special occasion, will be released.
								Felicitation programs, an alumni meet, and a
								one-day special event will be organized during
								the academic year with an intent to acknowledge
								yet another glorious milestone in the history of
								GEMS.
							</p>
						</Col>
						<Col className="quick-linke">
							<p className="wuicl">Quick Links</p>
							<UnderLine width="50px" bg="#17D0CF" height="2px" />
							<Row className="link-row">
								<Col>
									<div className="links-list">
										<Link
											className="links-links"
											to="/about-us"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>About Us</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/academics/primary-school"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>IPC</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/academics/middle-school"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>IMYC</p>
										</Link>
									</div>
									<div className="links-list">
										<Link className="links-links">
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Thunderbolts</p>
										</Link>
									</div>

									<div className="links-list">
										<Link
											className="links-links"
											to="/alumni"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>AGES</p>
										</Link>
									</div>

									<div className="links-list">
										<Link
											className="links-links"
											to="/gems-csr"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>CSR</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/gem-of-gems"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>High Achievers </p>
										</Link>
									</div>
								</Col>
								<Col>
									<div className="links-list">
										<Link
											className="links-links"
											to="/gems-admission"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Admissions</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/gallery"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Gallery</p>
										</Link>
									</div>
									{/* <div className="links-list">
                    <Link className="links-links" to="/gem-of-gems">
                      <i className="fa-solid fa-caret-right" />{" "}
                      <p>High Achievers</p>
                    </Link>
                  </div> */}
									<div className="links-list">
										<Link
											className="links-links"
											to="/gems-upcomming-events"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Upcoming Events</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/gems-news"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Latest News</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/gems-notices"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Notices</p>
										</Link>
									</div>
									<div className="links-list">
										<Link
											className="links-links"
											to="/career"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Careers</p>
										</Link>
									</div>{" "}
									<div className="links-list">
										<Link
											className="links-links"
											to="/hall-of-fame"
										>
											<i className="fa-solid fa-caret-right" />{" "}
											<p>Hall of Fame</p>
										</Link>
									</div>
								</Col>
							</Row>
						</Col>
						<Col className="small-gallery">
							<p>Photo Gallery</p>
							<UnderLine width="50px" bg="#17D0CF" height="2px" />
							<Link to="/gallery">
								<div className="footer-imag-gallery">
									{footerImgae.map((url, idx) => (
										<img key={idx} src={url} alt="image" />
									))}
								</div>
							</Link>
						</Col>
					</Row>
					<div className="social-suscribe">
						<Row>
							<Col>
								<div className="social-footer">
									<p className="social-icon-nt">
										Social Network
									</p>
									<UnderLine
										width="50px"
										bg=" #17D0CF"
										height="2px"
									/>
									<div className="logo-coail">
										<Link
											to="https://www.facebook.com/gemsschoolnepal"
											target="_blank"
										>
											<i className="fa-brands fa-facebook-f" />
										</Link>
										<Link
											to="https://www.instagram.com/gems.school/"
											target="_blank"
										>
											<i className="fa-brands fa-instagram" />
										</Link>
										<Link
											to="https://www.youtube.com/watch?v=NorhhYh36D8&ab_channel=GEMSSchool"
											target="_blank"
										>
											<i className="fa-brands fa-youtube" />
										</Link>
										<Link
											to="https://www.linkedin.com/company/gems-school/"
											target="_blank"
										>
											<i className="fa-brands fa-linkedin" />
										</Link>
									</div>
								</div>
							</Col>
							<Col md={8} xs={12}>
								<div className="social-footer">
									<p className="social-icon-nt">
										Subscribe Newsletter
									</p>
									<UnderLine
										width="50px"
										bg=" #17D0CF"
										height="2px"
									/>
									<div className="news-lesster-form">
										<Form
											className="new-form"
											onSubmit={addEmail}
										>
											<Form.Group
												className="here-sus"
												controlId="plaseemail"
											>
												<Form.Control
													type="email"
													className="clinput"
													placeholder="Your email"
													value={email}
													onChange={(e) => {
														setEmail(
															e.target.value
														);
													}}
												/>
											</Form.Group>
											<Button type="submit">
												Subscribe now
											</Button>
										</Form>
									</div>
								</div>
							</Col>
						</Row>
					</div>
					<div className="lower-footer">
						<p>
							© 2024 - Designed & Developed by GEMS Group. All
							rights reserved
						</p>
						<div className="links-footer-lower">
							{/* <Link>License</Link>
              <Link>Privacy & Policy</Link>
              <Link>Term Of Service</Link> */}
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Footer;
