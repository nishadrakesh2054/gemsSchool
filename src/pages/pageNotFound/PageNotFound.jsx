import React from "react";
import "./pagenotdouns.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pagenotdouns">
      <Container>
        <h1>Page not found</h1>
        <div className="ot">
          <Link to="/">Go Back</Link>
        </div>
      </Container>
    </div>
  );
};

export default PageNotFound;
