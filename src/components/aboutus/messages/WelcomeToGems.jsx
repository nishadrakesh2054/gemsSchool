import React from "react";
import UnderLine from "../../helper/UnderLine";
import big from "../../../assets/about-us/S_S06431.jpg";
import img1 from "../../../assets/about-us/DSC_0666.jpg";
import img2 from "../../../assets/about-us/S_S06724.jpg";

const WelcomeToGems = () => {
  return (
    <>
      <div className="imges-kids">
        <div className="bigimage">
          <img src={big} alt="..studetn" />
        </div>
        <div className="small-imgs">
          <img src={img2} alt="..studetn" />
          <img src={img1} alt="..studetn" />
        </div>
      </div>
      <div className="welcome-togem">
        <p className="wel-gem">
          Welcome to <span>GEMS.</span>
        </p>
        <UnderLine width="50px" height="2px" bg=" #17D0CF" />
        <div className="sometext">
          <p>
            Since its humble beginning at Sanepa, GEMS school today stands at
            the forefront of school education in Nepal, through the hard work,
            dedication, and due foresight of its visionary founders and the
            diligence of its staff. We now stand as a top-rated school in the
            country, offering schooling from class one right up to high school
            [NEB], as well as the Cambridge A Level course. <br /> <br /> We are
            the recipient of numerous National and Regional Awards and accolades
            for our SEE results, as well as attainment of World Rankings by our
            A Level students in the CAIE examinations. <br /> <br /> We warmly
            welcome you to go through our website.
          </p>
          <br />
          <p></p>
        </div>
      </div>
      <div className="welcome-togem">
        <p className="wel-gem">
          Who We <span>Are.</span>
        </p>
        <UnderLine width="50px" height="2px" bg=" #17D0CF" />
        <div className="sometext">
          <p>
            GEMS School was established in 1984 AD in Sanepa, Lalitpur, with 78
            students and 18 staff members, initially with classes from Nursery
            to grade III. Since then, it has evolved into a full-fledged
            secondary school, and in August 2000 AD, the classes from 4 to 10
            were shifted from Sanepa to the newly constructed school complex in
            Dhapakhel. The high school section was started in 2008 AD. <br />{" "}
            <br /> In 2015 AD, primary classes 2 and 3 were also shifted to
            Dhapakhel, while grade 1 was moved to the present school complex in
            2018 AD.
          </p>
          <br />
          <p>
            GEMS has excellent infrastructure with state-of-the-art facilities.
            The buildings are spacious and houses spacious classrooms, a
            conference hall, administrative offices, and well-equipped science
            and computer labs. The playing fields, swimming pool, futsal,
            basketball, and volleyball courts, an archery range, as well as
            tennis courts, apart from the music and martial arts training rooms,
            provide for more than 26 activities.
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeToGems;
