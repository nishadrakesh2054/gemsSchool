import React from "react";
import { Spinner } from "react-bootstrap";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading-gem">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
