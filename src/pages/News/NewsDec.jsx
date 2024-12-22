import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./newdec.scss";
import PageBanner from "../../components/helper/PageBanner";
import newsimg from "../../assets/logo/gems-logo.png";
import he from "he"; // Import 'he' library for HTML entity decoding
import LearningPartners from "../../components/partners/LearningPartners";
import Loading from "../../components/loading/Loading";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const NewsDec = () => {
	const [news, setNews] = useState(null);
	const [newsContent, setNewsContent] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showImages, setShowImages] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					`https://mis.gemsholdings.com/api/v1/news.php?id=${id}`
				);
				if (response.data && response.data.length > 0) {
					console.log(response.data);
					// Decode HTML entities in the content
					const decodedContent = response.data[0].content;
					setNewsContent({
						...response.data[0],
						content: he.decode(decodedContent),
					});
					console.log(newsContent);
				} else {
					setError("No news found");
				}
			} catch (error) {
				setError("Failed to fetch news");
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, [id]);

	if (loading) return <Loading />;
	if (error) return <div>{error}</div>;

	return (
		<div className="NewsDec">
			<PageBanner from="News" />
			<Container>
				<button
					type="button"
					onClick={() => setShowImages(true)}
					className="border-0 clas-image-btn"
				>
					<div className="news-image">
						<img
							src={
								newsContent?.feature
									? newsContent.feature
									: newsimg
							}
							alt={news?.id || "news"}
						/>
					</div>
				</button>
				<div className="title-newsw">
					<p>{newsContent.title}</p>{" "}
					<p className="date-news">{newsContent?.odate}</p>
				</div>
				<div className="content-news">
					{/* Use dangerouslySetInnerHTML to render decoded HTML content */}
					<div
						dangerouslySetInnerHTML={{
							__html: newsContent.content,
						}}
					/>
				</div>
			</Container>
			<LearningPartners pm="0" />
			{/* <Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={[
					{ src: "/image1.jpg" },
					{ src: "/image2.jpg" },
					{ src: "/image3.jpg" },
				]}
			/> */}
		</div>
	);
};

export default NewsDec;
