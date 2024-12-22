import React from "react";
import { Container } from "react-bootstrap";
import UnderLine from "../helper/UnderLine";
import Carousel from "react-multi-carousel";
import afterImg from "../../assets/after.png";
import "../partners/leaning.scss";
import "./testi.scss";

const Testimonial = ({ heading, data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      // slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="testimonials LearningPartners">
        <Container className="testi-container">
          <p className="learning-text ">Testimonial.</p>
          <UnderLine width="50px" height="2px" bg="#17D0CF" />

          <div className="leaning-carousel ">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // Render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="testimional-text">
                <p>
                  "GEMS is a prestigious institution that was designed to
                  produce global change makers. I have had the opportunity to
                  study in amazing institutions in India and USA after passing
                  from GEMS and I can confidently say, GEMS has a standard equal
                  to its western counterparts. <br /> I am also grateful to
                  teachers and mentors who pushed me to achieve things that I
                  never felt were in my grasp. Looking back, I have memories
                  which I will never forget. Life lessons and values that my
                  Gurus have taught me, still heavily defines who I am and what
                  I do till this date. I will be forever grateful to GEMS. Thank
                  you!"
                </p>
                <p className="name-degi">
                  Jubin Rajbhandari |{" "}
                  <span>
                    Missile Systems Engineer, US Department of Defense
                  </span>{" "}
                  <br />
                  <span>GEMS 2062 Batch</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "I enrolled in GEMS in 2054 BS as a student of Grade 1 and was
                  a student here for 10 years and it has made me become who I am
                  today. This institution has taught me teamwork, effective
                  communication, being friendly, disciplined and well-groomed.
                  Besides studies, the teachers and administrators encouraged us
                  to take part in extracurricular activities. <br /> The faculty
                  genuinely cares for each student and wants to see them succeed
                  not only academically but in all areas of their lives. As an
                  alumnus of the school, I can well assure families of upcoming
                  students that their children are in the best hands with the
                  teachers and the staff."
                </p>
                <p className="name-degi">
                  Dr. Anuja Upadhyay | <span>MBBS, MS ENT</span> <br />
                  <span>GEMS 2063 Batch</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "Thank you for wonderful years of personal growth and
                  significant development. I must express the value this school
                  has brought to my life. I studied there for 13 years. The
                  school is driven to ensure that we have all that it takes to
                  be exemplary in academics as well as in our professional
                  lives. It would not have been possible without all my
                  teachers, who always encouraged me to do more to find my true
                  capabilities. Thank you."
                </p>
                <p className="name-degi">
                  Dr. Mohini Shrestha |{" "}
                  <span>
                    Senior Ophthalmologist at Hetauda Community Eye Hospital
                  </span>{" "}
                  <br />
                  <span>A Level, Class of 2006</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "GEMS holds a special place in my journey to success. Since my
                  early days in grade 1 through high school at GIHE, GEMS has
                  provided not just education but a foundation for growth. The
                  school's impeccable infrastructure and dedicated teachers
                  fostered an environment where learning flourished
                  effortlessly. This foundation proved instrumental as I pursued
                  and earned my law degrees in both Nepal and the USA. Thanks to
                  GEMS, I gained fluency in both Nepali and English, which has
                  been essential in my legal career in Nepal and the USA. <br />{" "}
                  <br />
                  Beyond academics, the school's diverse extracurricular
                  activities opened doors to a balanced life, showing me the
                  importance of blending studies with holistic development. My
                  memories of GEMS are a testament to how those formative years
                  have paved the way for a fulfilling adulthood. I owe much of
                  my achievements to the invaluable lessons learned in those 12
                  years and the opportunities embraced at GEMS School."
                </p>
                <p className="name-degi">
                  Pragya Panta | <span>BBM,LLB-KU </span> <br />
                  <span> Class of 2015</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "My educational journey at GEMS(Graded English Medium School)
                  has been an invaluable start to my academic and professional
                  career. GEMS, renowned as one of the best private schools in
                  Nepal, is known for its quality education. During my 14 years
                  at GEMS, I have been nurtured by this exceptional institution.{" "}
                  <br />
                  The school has provided me with a strong educational
                  foundation that has been crucial in shaping who I am today. In
                  addition to its academic excellence, GEMS focuses on
                  extracurricular activities such as sports, cultural festivals,
                  and educational workshops, all of which contribute to a
                  all-rounded development and help students stand out in their
                  respective fields. <br /> Thanks to the robust education,
                  exceptional mentorship, and invaluable guidance I received at
                  GEMS, I successfully completed my B.Tech in Computer Science
                  Engineering in India. Currently, I am pursuing my Masters in
                  Information Technology with a specialization in Cyber Security
                  from Australia.
                  <br /> I extend my heartfelt gratitude to GEMS for laying the
                  groundwork for my future endeavors. Thank you."
                </p>
                <p className="name-degi">
                  Er. Anurag Rupakhetee | <span>Computer Science Engineer</span>{" "}
                  <br />
                  <span>Class of 2014</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "The two years of my schooling at GEMS have been as amazing as
                  I had expected. The phase in which you get to become a new and
                  a better person in high school has helped and perfectly guided
                  me through the two years of study at GEMS. GEMS has helped me
                  to muster the courage to speak in front of a crowd through
                  various programs including the Business Plan Competition, Ad
                  Making Competition, etc. The number of platforms and
                  opportunities this school provides is countless. Being a
                  cricketer and an enthusiastic sports person, I got many
                  opportunities to showcase my talent through various
                  extracurricular activities on campus and beyond. In the past
                  two years, the teachers and the non-teaching staff of my
                  school have guided me to become a better version of the person
                  I was two years ago."
                </p>
                <p className="name-degi">
                  Prallav Bhakta Maharjan | <span>Student</span> <br />
                  <span>NEB, Class of 2024</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "Having spent two of the most eventful years of my life at
                  GEMS including getting the amazing opportunity to serve as the
                  Student Council President, I can proudly state that the
                  inclusive and supportive atmosphere at GEMS has helped me
                  thrive, unlocking my full potential as a learner both in
                  academic and intrapersonal settings. My teachers here have
                  always been the best mentors and role models, they are
                  professionals who are genuinely excited by the subject matter,
                  which in turn inspires us to try harder. The culture at GEMS
                  has allowed me to make lifelong connections, venture on
                  ambitious leadership projects and grow to be my most confident
                  and capable self."
                </p>
                <p className="name-degi">
                  Sonakshi Shrestha | <span>Student</span>
                  <br />
                  <span>A Level, Class of 2024</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "Looking back on my two years at GEMS, I realize it was so
                  much more than just a school. It was a place where every day
                  felt like an adventure, whether I was tackling tough math
                  problems or sharing laughter with friends in the cafeteria.
                  These years were a whirlwind of growth, thanks to the
                  challenging academics and the diverse range of extracurricular
                  activities offered. But what made it truly special were the
                  friendships I formed during chaotic physics experiments and
                  last-minute study sessions. GEMS isn't just where I earned a
                  certificate it is where I collected a treasure of memories and
                  experiences that will stay with me forever."
                </p>
                <p className="name-degi">
                  Grace Bohra | <span>Student</span> <br />
                  <span>A Level, Class of 2024</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "I am grateful to be able to share my experience as a student
                  of GEMS. Throughout my time in this institution, I did not
                  feel lacking in any sort of facility or support. The congenial
                  environment of this institution is what distinguishes it from
                  other schools. The teachers are not just knowledgeable; they
                  are passionate about making the teaching-learning activity
                  more interactive and comprehensive to all the students. GEMS
                  lays a great amount of emphasis on students' total character
                  formation and academic accomplishments. The plethora of
                  extra-curricular activities provided by this school has also
                  encouraged me to push myself outside of my comfort zone and
                  unfurl many skills. Overall, I had a great time in this
                  institution as it has helped me to pave my career path and
                  participate in a wide range of competitions both in academics
                  and sports."
                </p>
                <p className="name-degi">
                  Rig K.C. | <span>Student</span> <br />
                  <span>NEB, Class of 2024</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  // style={{ position: "absolute" }}
                />
              </div>
              <div className="testimional-text">
                <p>
                  "High school is the stepping stone to craft the future career
                  in a student’s life, and I am delighted to have GEMS as my
                  stepping stone. After 10 years of schooling at GEMS, I
                  enrolled in grade 11 to enhance my hidden talents and
                  strengths. I remain grateful to GEMS for preparing me to
                  obtain high grades in my SEE exam with a 4 GPA. Alongside
                  this, I've had an opportunity to take part in extra-curricular
                  activities as I always loved playing football and represented
                  my school in various inter-school competitions. I feel
                  privileged to be part of the Student Council, through which I
                  could learn the rudimentary skills required for teamwork and
                  leadership. The best faculty members and the High School
                  facilities have made my high school productive and helped to
                  pave a distinct and goal-oriented path for my future."
                </p>
                <p className="name-degi">
                  Aayusha Regmi | <span>Student</span> <br />
                  <span>NEB, Class of 2025</span>
                </p>
                <img
                  src={afterImg}
                  alt="after"
                  className="afterimg"
                  style={{ position: "absolute" }}
                />
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
