import React, { useState, useEffect } from "react";
import ModelPopup from "./ModelPopup";
import getready from "../../assets/notic/getready.jpg";


const MultiplePopups = () => {
  const [popups, setPopups] = useState([
  
    {
      id: "popup2",
      show: false,
      title: null,
      text: null,
      image: getready,
      link: "https://www.instagram.com/thunderboltsDC/",
      classname: "popup2",
    },
  ]);

  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);

  useEffect(() => {
    if (currentPopupIndex < popups.length) {
      setPopups((prevPopups) =>
        prevPopups.map((popup, index) =>
          index === currentPopupIndex ? { ...popup, show: true } : popup
        )
      );
    } else {
      // All popups have been shown
      console.log("All popups have been displayed and closed.");
      // You can add any additional action here
    }
  }, [currentPopupIndex]);

  const handleHide = () => {
    setPopups((prevPopups) =>
      prevPopups.map((popup, index) =>
        index === currentPopupIndex ? { ...popup, show: false } : popup
      )
    );
    setCurrentPopupIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      {popups.map((popup, index) => (
        <ModelPopup
          key={popup.id}
          show={popup.show}
          onHide={handleHide}
          {...popup}
        />
      ))}
    </>
  );
};

export default MultiplePopups;
