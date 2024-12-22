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

const DecUpcommingEvents = () => {
  const [news, setNews] = useState(null);
  const [newsContent, setNewsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://mis.gemsholdings.com/api/v1/event.php?id=${id}`
        );
        if (response.data && response.data.length > 0) {
          //   console.log(response.data);
          // Decode HTML entities in the content
          const decodedContent = response.data[0].content;
          setNewsContent({
            ...response.data[0],
            content: he.decode(decodedContent),
          });
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

  //   console.log(newsContent);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <div className="NewsDec">
      <PageBanner from="Upcoming Events" />
      <Container>
        <div className="news-image">
          <img
            src={newsContent?.feature ? newsContent.feature : newsimg}
            alt={news?.id || "news"}
          />
        </div>
        <div className="title-newsw">
          <p>{newsContent.title}</p>{" "}
          <p className="date-news">{newsContent?.odate}</p>
          <p>to</p>
          <p className="date-news">{newsContent?.cdate}</p>
        </div>
        <div className="content-news">
          {/* Use dangerouslySetInnerHTML to render decoded HTML content */}
          <div dangerouslySetInnerHTML={{ __html: newsContent.content }} />
        </div>
      </Container>
      <LearningPartners pm="0" />
    </div>
  );
};

export default DecUpcommingEvents;
