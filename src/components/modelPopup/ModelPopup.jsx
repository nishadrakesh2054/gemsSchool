import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modelpop.scss";
import { Link } from "react-router-dom";

const ModelPopup = ({ show, onHide, title, text, image, link, classname }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="popup-model"
    >
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className="body-popup">
        {text && <p style={{ whiteSpace: "pre-wrap" }}>{text}</p>}
        {image &&
          (link ? (
            <Link
              to={link}
              target="_blank"
              style={{ width: "100%", display: "block" }}
            >
              <img src={image} alt="Popup content" className={classname} />
            </Link>
          ) : (
            <img src={image} alt="Popup content" />
          ))}
      </Modal.Body>
    </Modal>
  );
};

export default ModelPopup;
