import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import MultiplePopups from "../components/modelPopup/MultiplePopups";

// Lazy-loaded components
const LazyAboutUs = lazy(() => import("../components/aboutus/AboutUs"));
const LazyEvents = lazy(() => import("../components/events/Events"));
const LazyGetInTouch = lazy(() =>
  import("../components/getinTouch/GetInTouch")
);
// Eager load critical components
import HeroSec from "../components/heroSection/HeroSec";
const LazyHighAchievers = lazy(() =>
  import("../components/highAchievers/HighAchievers")
);
const LazyLearningPartners = lazy(() =>
  import("../components/partners/LearningPartners")
);
const LazyProspectus = lazy(() =>
  import("../components/prospectus/Prospectus")
);
const LazyFrequentlyAsked = lazy(() =>
  import("../components/questions/FrequentlyAsked")
);
const LazySendaMessage = lazy(() =>
  import("../components/sendamessage/SendaMessage")
);
const LazyTestimonial = lazy(() =>
  import("../components/testimonial/Testimonial")
);
const LazyThunderbolts = lazy(() =>
  import("../components/thunderbolts/Thunderbolts")
);
const LazyVidyapp = lazy(() => import("../components/vidyapp/Vidyapp"));
const LazyWhyGems = lazy(() => import("../components/whyGems/WhyGems"));

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      <HeroSec />
      <Suspense fallback={<Loading />}>
        <LazyAboutUs />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyWhyGems />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyThunderbolts />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyEvents />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyVidyapp />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyFrequentlyAsked />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyLearningPartners />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyTestimonial />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyHighAchievers />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyProspectus />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazySendaMessage />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyGetInTouch />
      </Suspense>
      <MultiplePopups />
    </>
  );
};

export default Home;
