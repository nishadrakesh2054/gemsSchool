import React from "react";
import "./PhotosOfYears.scss";
import UnderLine from "../helper/UnderLine";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PhotosOfYears = () => {
  return (
    <div className="PhotosOfYears">
      <div className="year-of-phtos">
        <p className="hearder-yeat-text">
          Photos of <span>2024.</span>
        </p>
        <UnderLine width="50px" height="2px" />
      </div>
      <Row className="images-list-cards" md={2} xs={1}>
        <Col className="img-card">
          <Link
            to="https://photos.google.com/share/AF1QipNIYbOfuJRsLihPkNvrYyJM2k0G9duR2Dbu-GWae2cY6zU_QTLnd3htQIjnyXYsUA?pli=1&key=S2h6WFBlLUwtSngtQkI1RGdCUWZHdmlGWFU5dlZ3"
            target="_blank"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNBTeIwhLdiaeJEPigv00OqabLIwz-ODkfeTrOSktxa5ktFpxgVzGLKLirxgXf0t8OOIbjPLFlGnIfqE_n9qE2pI9K4niDpK2-XR3RJZf9bWMmdmZ-FB3gBaYMimospgJXQpHcAcEp49zY50uYTlBxM=w1418-h945-s-no-gm?authuser=0"
              alt="gallery"
            />
            <p>Business Plan Competition 2024</p>
          </Link>
        </Col>
        <Col className="img-card">
          <Link
            to="https://photos.google.com/share/AF1QipPBdem7VuwNF2kk2YlDMo4DuI-g7mjQ1Tkd6wJXmxBN2ODrEWpqmhokn7Tv3J_9wQ?key=Z0pHQ3hDdkhETWlmUmRzSXJkOEZUcEM2QlhSVHVB"
            target="_blank"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPbo7PNmXAX7_rwlFHoT-24EHrMIwWl3ERThPx5-Ui069Ks5aMhGcFUHlmy7ul8cBCNXZ0ltVL6ZuI5Ye3HhS4sioQORsmD0dr7SRR2kWNWN01wtld0MsLmVlO5CBxE4dE6TMmB3YJaxDKNEyfzyXVu=w1683-h945-s-no-gm?authuser=0"
              alt="gallery"
            />
            <p>GEMS Youth Fest 2024</p>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default PhotosOfYears;
