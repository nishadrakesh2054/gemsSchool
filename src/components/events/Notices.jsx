import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mis.gemsholdings.com/api/v1/news.php/",
    };

    axios
      .request(options)
      .then(function (response) {
        const allEvents = response.data;
        // Filter events to only include those with type "NEWS"
        const noticesEvents = allEvents.filter(
          (event) => event.type === "NOTICE"
        );
        // console.log(noticesEvents);
        setNotices(noticesEvents);
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
        {notices.slice(0, 3).map((item, idx) => {
          const { day, month, year } = formatDate(item?.odate);
          return (
            <Link to={`/gems-news/${item?.id}/${item?.title}`} key={idx}>
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

        <Link to="/gems-notices" className="view-news">
          View all Notices
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Notices;
