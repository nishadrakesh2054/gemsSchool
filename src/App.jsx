import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
import Navigation from "./components/navigations/Navigation";
import ScrollToTopButton from "./components/helper/ScrollToTopButton";
// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Academics = lazy(() => import("./pages/academics/Academics"));
const Admission = lazy(() => import("./pages/admission/Admission"));
const MegaEvents = lazy(() => import("./pages/megaEvents/MegaEvents"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const VidyaApp = lazy(() => import("./components/academics/vidyapp/VidyaApp"));
const AcademicScholarship = lazy(() =>
  import("./components/academics/schlorship/AcademicScholarship")
);
const Sports = lazy(() => import("./pages/sports/Sports"));
const Careers = lazy(() => import("./pages/careers/Careers"));
const JobOpening = lazy(() => import("./pages/careers/JobOpening"));
const JobDes = lazy(() => import("./pages/careers/JobDes"));
const CSR = lazy(() => import("./components/aboutus/CSR"));
const Alumni = lazy(() => import("./pages/alumni/Alumni"));
const News = lazy(() => import("./pages/News/News"));
const ALevels = lazy(() => import("./components/academics/aLevels/ALevels"));
const HighSchool = lazy(() =>
  import("./components/academics/highSchool/HighSchool")
);
const MiddleSchool = lazy(() =>
  import("./components/academics/middleSchool/MIddleSchool")
);
const SecondarySchool = lazy(() =>
  import("./components/academics/secondarySchool/SecondarySchool")
);
const NewsDec = lazy(() => import("./pages/News/NewsDec"));
const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const DecUpcommingEvents = lazy(() =>
  import("./pages/Events/DecUpcommingEvents")
);
const UpcommingEvents = lazy(() => import("./pages/Events/UpcommingEvents"));
const HallofFame = lazy(() => import("./components/aboutus/HallofFame"));
const SchoolSchlorship = lazy(() =>
  import("./components/academics/schlorship/SchoolSchlorship")
);
const Notice = lazy(() => import("./pages/Notice/Notice"));
const NoticeDec = lazy(() => import("./pages/Notice/NoticeDec"));
const GemofGems = lazy(() => import("./pages/GemGems/GemofGems"));

const App = () => {
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300); // Show button when scrolled down more than 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideFooterPaths = [
    "/job-openings",
    "/jobs-at-gems", // Base path for job descriptions
  ];

  // Check if the current path matches any of the paths in hideFooterPaths
  const showFooter = !hideFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gems-csr" element={<CSR />} />

          <Route path="/academics/primary-school" element={<Academics />} />
          <Route path="/academics/middle-school" element={<MiddleSchool />} />
          <Route
            path="/academics/secondary-school"
            element={<SecondarySchool />}
          />
          <Route
            path="/academics/school-schlorship"
            element={<SchoolSchlorship />}
          />
          <Route path="/academics/high-school" element={<HighSchool />} />
          <Route path="/academics/a-level" element={<ALevels />} />
          <Route path="/academics/vidya-app" element={<VidyaApp />} />
          <Route
            path="/academics/academic-scholarship"
            element={<AcademicScholarship />}
          />

          <Route path="/gems-admission" element={<Admission />} />
          <Route path="/mega-events" element={<MegaEvents />} />
          <Route path="/sports-activities" element={<Sports />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/job-openings" element={<JobOpening />} />
          <Route path="/jobs-at-gems/:id/:title" element={<JobDes />} />
          <Route path="/gems-news" element={<News />} />
          <Route path="/gems-news/:id/:title" element={<NewsDec />} />
          <Route path="/gems-notices" element={<Notice />} />
          <Route path="/gems-notices/:id/:title" element={<NoticeDec />} />
          <Route path="/gems-upcomming-events" element={<UpcommingEvents />} />
          <Route
            path="/gems-events/:id/:title"
            element={<DecUpcommingEvents />}
          />

          <Route path="/gem-of-gems" element={<GemofGems />} />
          <Route path="/hall-of-fame" element={<HallofFame />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      {showFooter && <Footer />}
      {showScrollToTop && <ScrollToTopButton />}{" "}
      {/* Conditionally render the button */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
