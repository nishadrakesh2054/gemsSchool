import PageBanner from "../../components/helper/PageBanner";
import DotTexts from "../../components/helper/DotTexts";
import "./news.scss";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import newsimg from "../../assets/logo/gems-logo.png";
import he from "he";
import LearningPartners from "../../components/partners/LearningPartners";

const UpcommingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/event.php/",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const allEvents = response.data;

        setEvents(allEvents);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="gems-news">
      <PageBanner from="Upcoming Events" />
      <div className="gems-new-start">
        <Container>
          <DotTexts text="Upcoming Events" color="#A9A3A3" />
          <div className="new-head">
            <p>
              Upcoming <span>Events.</span>
            </p>
          </div>

          <Link
            to="https://calendar.google.com/calendar/u/0/r?cid=Y18zZTlkM2M1MjJjMDM3NmQwODc4MTk5ZTAxMmNjODIxM2VkYWVmYjQ0MTlkZTBkMjRmZjRiNjFkNjVjMTFlNWMzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
            className="view-news view-evenst"
            target="_blank"
          >
            Check Calendar{" "}
            <span>
              <i className="fa-solid fa-calendar-days"></i>
            </span>
          </Link>
        </Container>
        <div className="news-cards-list">
          <Container>
            <Row md={3} xs={1}>
              {events?.map((item, idx) => (
                <Col key={idx}>
                  <Link to={`/gems-events/${item?.id}/${item?.title}`}>
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
                          {item?.content && (
                            <p
                              className="few-content"
                              dangerouslySetInnerHTML={{
                                __html: he?.decode(item?.content),
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
          <LearningPartners pm="0" />
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
