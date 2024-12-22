import React, { useEffect, useState } from "react";
import "./events.scss";
import { Container, Col, Row } from "react-bootstrap";
import UnderLine from "../helper/UnderLine";
import { Link } from "react-router-dom";
import UpcomingEvents from "./UpcomingEvents";
import Notices from "./Notices";
import axios from "axios";
import newsimg from "../../assets/logo/gems-logo.png";

const Events = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/news.php/",
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        const allEvents = response.data;

        const newsEvents = allEvents.filter((event) => event.type === "NEWS");

        setNewsList(newsEvents);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="events">
        <Container>
          <Row className="events-row" xs={1} md={3}>
            <Col className="news-cols">
              <p className="header-evnets-text">
                Latest <span>Happenings.</span>
              </p>
              <UnderLine width="50px" height="2px" bg="#17D0CF" />

              {newsList.slice(0, 2).map((item, idx) => (
                <Link to={`/gems-news/${item?.id}/${item?.title}`} key={idx}>
                  <div className="news">
                    <div className="image-side">
                      <img
                        src={item?.feature ? item?.feature : newsimg}
                        alt=".news"
                      />
                      <div className="date-titles">
                        <p>
                          <i className="fa-regular fa-calendar-days"></i>{" "}
                          {item.odate}
                        </p>
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              <Link to="/gems-news" className="view-news">
                View All News{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </Link>
            </Col>
            <Col className="news-cols">
              <p className="header-evnets-text">
                Upcoming <span>Events.</span>
              </p>
              <UnderLine width="50px" height="2px" bg="#17D0CF" />
              <UpcomingEvents />
            </Col>
            <Col className="news-cols">
              <p className="header-evnets-text">
                Important <span>Notices.</span>
              </p>
              <UnderLine width="50px" height="2px" bg="#17D0CF" />
              <Notices />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Events;
