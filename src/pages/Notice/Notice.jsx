import PageBanner from "../../components/helper/PageBanner";
import DotTexts from "../../components/helper/DotTexts";
import "../News//news.scss";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import newsimg from "../../assets/logo/gems-logo.png";
import he from "he";
import LearningPartners from "../../components/partners/LearningPartners";

const Notice = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/news.php/",
    };

    axios
      .request(options)
      .then(function (response) {
        const allEvents = response.data;

        const newsEvents = allEvents.filter((event) => event.type === "NOTICE");

        setNewsList(newsEvents);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="gems-news">
        <PageBanner from="News" />
        <div className="gems-new-start">
          <Container>
            <DotTexts text="News" color="#A9A3A3" />
            <div className="new-head">
              <p>
                All <span>NOTICE</span>
              </p>
            </div>
          </Container>
          <div className="news-cards-list">
            <Container>
              <Row md={2} xs={1}>
                {newsList.map((item, idx) => (
                  <Col key={idx}>
                    <Link to={`/gems-news/${item?.id}/${item?.title}`}>
                      <div className="news">
                        <div className="image-side">
                          <img
                            src={item?.feature ? item?.feature : newsimg}
                            alt="news"
                          />
                          <div className="date-titles">
                            <p>
                              <i className="fa-regular fa-calendar-days"></i>{" "}
                              {item?.created}
                            </p>
                            <h5 className="title">{item?.title}</h5>
                            <p
                              className="few-content"
                              dangerouslySetInnerHTML={{
                                __html: he.decode(item?.content),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
            <LearningPartners pt="" pm="0" mt="0"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
