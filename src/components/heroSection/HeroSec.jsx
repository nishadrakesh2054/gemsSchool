import React from "react";
import { Carousel, Button } from "react-bootstrap";
import hero1 from "../../assets/hero/hero-sec/computer.jpg";
import hero3 from "../../assets/hero/hero-sec/he1.jpg";
import hero5 from "../../assets/hero/hero-sec/IMG_2748.jpg";
import hero4 from "../../assets/hero/hero-sec/pd.jpg";
import "./herosec.scss";
import Buttons from "../buttons/Buttons";

const HeroSec = () => {
  const toEnquiry = () => {
    window.location.href = "https://mis.gemsholdings.com/interest.php";
  };
  return (
    <>
      <section id="slide" className="slider-section">
        <Carousel className="hero-carousel" indicators={false}>
          <Carousel.Item className="hero-caro-item">
            <img src={hero3} alt=".gems" className="carou-img" />
            <Carousel.Caption className="hero-carou-cap">
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
                <div>GEMS SCHOOL</div>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
              </p>

              <h3>
                {" "}
                <span>Lead,</span> Kindly <span>Light</span>
              </h3>
              <div className="buttons-admissions mt-3">
                <Buttons
                  //   background="#006DAD"
                  text="Register Your Interest"
                  funs={toEnquiry}
                />
                {/* <Buttons background="#006DAD" text="Admission form" />
        <Buttons background="#006DAD" text="Download admission form" /> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="hero-caro-item">
            <img src={hero1} alt=".gems" className="carou-img" />
            <Carousel.Caption className="hero-carou-cap">
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
                <div>GEMS SCHOOL</div>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
              </p>

              <h3>
                {" "}
                <span>Innovative</span> Solution <br /> for{" "}
                <span>Education</span>
              </h3>
              <div className="buttons-admissions mt-3">
                <Buttons
                  //   background="#006DAD"
                  text="Register Your Interest"
                  funs={toEnquiry}
                />
                {/* <Buttons background="#006DAD" text="Admission form" />
        <Buttons background="#006DAD" text="Download admission form" /> */}
              </div>
              {/* <Button className="btn-cources">
                Our Courses <i className="fa-solid fa-caret-right"></i>
              </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="hero-caro-item">
            <img src={hero5} alt=".gems" className="carou-img" />
            <Carousel.Caption className="hero-carou-cap">
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
                <div>GEMS SCHOOL</div>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
              </p>

              <h3>
                {" "}
                <span>THUNDERBOLTS </span> SPORTS AND{" "}
                <span>ACTIVITIES PROGRAMME</span>
              </h3>

              <div className="buttons-admissions mt-3">
                <Buttons
                  //   background="#006DAD"
                  text="Register Your Interest"
                  funs={toEnquiry}
                />
                {/* <Buttons background="#006DAD" text="Admission form" />
        <Buttons background="#006DAD" text="Download admission form" /> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="hero-caro-item">
            <img src={hero4} alt=".gems" className="carou-img" />
            <Carousel.Caption className="hero-carou-cap">
              <p>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
                <div>GEMS SCHOOL</div>
                <span>
                  <i className="fa-solid fa-circle"></i>

                  <i className="fa-solid fa-circle"></i>
                </span>
              </p>

              <h3>
                {" "}
                <span>TEACHERS’ </span> PROFESSIONAL <br />{" "}
                <span>DEVELOPMENT</span>
              </h3>

              <div className="buttons-admissions mt-3">
                <Buttons
                  //   background="#006DAD"
                  text="Register Your Interest"
                  funs={toEnquiry}
                />
                {/* <Buttons background="#006DAD" text="Admission form" />
        <Buttons background="#006DAD" text="Download admission form" /> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default HeroSec;
