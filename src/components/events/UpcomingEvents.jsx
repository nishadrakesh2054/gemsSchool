import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/event.php",
    };

    axios
      .request(options)
      .then(function (response) {
        const allEvents = response.data;

        // console.log(newsEvents);
        setEvents(allEvents);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return { day, month, year };
  };

  return (
    <>
      <div className="evenst-main">
        {events.slice(0, 3).map((item, idx) => {
          const { day, month, year } = formatDate(item?.odate); //odate = opening date
          return (
            <Link to={`/gems-events/${item?.id}/${item?.title}`} key={idx}>
              <div className="news evenst">
                <div className="image-side">
                  <div className="calneder-date">
                    <h3>{day}</h3>
                    <p>{month}</p>
                    <p>{year}</p>
                  </div>
                  <div className="date-titles">
                    <h5>{item?.title}</h5>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <Link to="/gems-upcomming-events" className="view-news">
          View all Events
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </Link>
      </div>
    </>
  );
};

export default UpcomingEvents;
