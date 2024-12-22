import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import DotTexts from "../../components/helper/DotTexts";
import PageBanner from "../../components/helper/PageBanner";
import ThunderBolts from "../../components/megaEvents/ThunderBolts";
import YouthFest from "../../components/megaEvents/YouthFest";
import LearningPartners from "../../components/partners/LearningPartners";
import "./mega.scss";
import tbc from "../../assets/page-banner/IMG_2748.jpg";

const MegaEvents = () => {
  const events = [
    {
      eventKey: "THUNDERBOLTS CUP",
      title: "THUNDERBOLTS CUP",
      component: <ThunderBolts />,
    },
    { eventKey: "YOUTH FEST", title: "YOUTH FEST", component: <YouthFest /> },
  ];

  return (
    <div className="MegaEvents">
      <PageBanner from="Mega Events" bg={tbc} />
      <div className="gems-events">
        <DotTexts text="GEMS EVENTS" color="#A9A3A3" />
        <div className="mesagevents-text">
          Mega <span>Events.</span>
        </div>
      </div>
      <div className="mega-container">
        <Tabs
          defaultActiveKey={events[0].eventKey}
          id="mega-events-tabs"
          className="mb-3 mega-tabs"
        >
          {events.map(({ eventKey, title, component }) => (
            <Tab eventKey={eventKey} title={title} key={eventKey}>
              {component}
            </Tab>
          ))}
        </Tabs>
      </div>
      <LearningPartners pm="0" mt="0" pt="0" />
    </div>
  );
};

export default MegaEvents;
