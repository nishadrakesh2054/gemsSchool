import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../News/newdec.scss";
import PageBanner from "../../components/helper/PageBanner";
import newsimg from "../../assets/logo/gems-logo.png";
import he from "he"; // Import 'he' library for HTML entity decoding
import Loading from "../../components/loading/Loading";

const NoticeDec = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://mis.gemsholdings.com/api/v1/news.php?id=${id}`
        );
        if (response.data && response.data.length > 0) {
          // Decode HTML entities in the content
          const decodedContent = response.data[0].content;
          setNews({ ...response.data[0], content: he.decode(decodedContent) });
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
    <>
      <div className="NewsDec">
        <PageBanner from="News" />
        <Container>
          <div className="news-image">
            <img
              src={news?.feature ? news.feature : newsimg}
              alt={news?.id || "news"}
            />
          </div>
          <div className="content-news">
            {/* Use dangerouslySetInnerHTML to render decoded HTML content */}
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NoticeDec;
