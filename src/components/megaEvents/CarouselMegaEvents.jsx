import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import thunder0 from "../../assets/mega-events/thunder3.jpg";
import "./thunderbolts.scss";

const CarouselMegaEvents = ({ fb, yt, insta, photos }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 3,
			slidesToSlide: 3,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

  console.log(photos)

	return (
		<div className="leaning-carousel EmployeeYear-carou thun-caroys">
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				// ssr={true} // Render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="all .5s"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{photos
					? photos?.map((src, index) => (
							<div
								className="thunder-bolts-car-images"
								key={index}
							>
								<div className="upder-row-imags">
									<img
										src={src}
										alt={`thunder ${index}`}
										loading="lazy"
									/>
								</div>
							</div>
					  ))
					: [thunder0].map(
							(src, index) => (
								<div
									className="thunder-bolts-car-images"
									key={index}
								>
									<div className="upder-row-imags">
										<img
											src={src}
											alt={`thunder ${index}`}
											loading="lazy"
										/>
									</div>
								</div>
							)
					  )}
			</Carousel>
			<div className="share-scoa-links">
				<p>
					Social Media Links{" "}
					<span>
						<Link to={fb} target="_blank">
							<i className="fa-brands fa-facebook"></i>
						</Link>
					</span>
					<span>
						<Link to={insta} target="_blank">
							<i className="fa-brands fa-instagram"></i>
						</Link>
					</span>
					<span>
						<Link to={yt} target="_blank">
							<i className="fa-brands fa-youtube"></i>
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

export default CarouselMegaEvents;
