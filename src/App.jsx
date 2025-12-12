import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

//Navbar Components
import MainNav from "./components/Navbar/MainNav/MainNav";
import FullscreenLoader from "./components/Loaders/FullscreenLoader";

//Footer Component
import Footer from "./components/Footer/Footer";

//Lazy Load Pages
const Accessibility = lazy(() => import("./pages/Accessibility/Accessibility"));
const Activities = lazy(() => import("./pages/Activities/Activites"));
const Amenities = lazy(() => import("./pages/Amenities/Amenities"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BookCalendar = lazy(() => import("./pages/BookCalendar/BookCalendar"));
const Careers = lazy(() => import("./pages/Careers/Careers"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const CorporateTravel = lazy(() =>
  import("./pages/CorporateTravel/CorporateTravel")
);
const Cottage = lazy(() => import("./pages/Cottage/Cottage"));
const Dine = lazy(() => import("./pages/Dine/Dine"));
const Enhancements = lazy(() => import("./pages/Enhancements/Enhancements"));
const Events = lazy(() => import("./pages/Events/Evnets"));
const EventDetail = lazy(() => import("./pages/Events/EventDetail"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const ExperienceDetail = lazy(() =>
  import("./pages/Experience/ExperienceDetail")
);
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Gifts = lazy(() => import("./pages/Gifts/Gifts"));
const Hillmont = lazy(() => import("./pages/Hillmont/Hillmont"));
const Home = lazy(() => import("./pages/Home/Home"));
const Mansion = lazy(() => import("./pages/Mansion/Mansion"));
const MansionBar = lazy(() => import("./pages/MansionBar/MansionBar"));
const Packages = lazy(() => import("./pages/Packages/Packages"));
const PackagesDetail = lazy(() => import("./pages/Packages/PackagesDetails"));
const Policies = lazy(() => import("./pages/Policies/Policies"));
const Press = lazy(() => import("./pages/Press/Press"));
const Rentals = lazy(() => import("./pages/Rentals/Rentals"));
const RentalDetail = lazy(() => import("./pages/Rentals/RentalDetails"));
const Resturaunt = lazy(() => import("./pages/Restaurant/Restauraunt"));
const Rooms = lazy(() => import("./pages/Rooms/Rooms"));
const RoomsDetails = lazy(() => import("./pages/Rooms/RoomDetail"));
const SocialEvents = lazy(() => import("./pages/SocialEvents/SocialEvents"));
const EventRFP = lazy(() => import("./pages/SocialEvents/EventRFP"));
const Spa = lazy(() => import("./pages/Spa/Spa"));
const Stay = lazy(() => import("./pages/Stay/Stay"));
const Story = lazy(() => import("./pages/Story/Story"));
const Weddings = lazy(() => import("./pages/Weddings/Weddings"));
const WeddingRFP = lazy(() => import("./pages/Weddings/WeddingsRFP"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <FullscreenLoader loading={loading} onDone={() => console.log("done")} />
      <MainNav />

      <Suspense fallback={<div className="page-fallback"></div>}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Top-level pages */}
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book-now/calendar" element={<BookCalendar />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporate-travel" element={<CorporateTravel />} />
          <Route path="/cottage" element={<Cottage />} />
          <Route path="/dine" element={<Dine />} />
          <Route path="/enhancements" element={<Enhancements />} />
          <Route path="/explore" element={<Events />} />
          <Route path="/explore/:slug" element={<EventDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/hillmont" element={<Hillmont />} />
          <Route path="/mansion" element={<Mansion />} />
          <Route path="/dine/mansion-bar" element={<MansionBar />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:slug" element={<PackagesDetail />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/press" element={<Press />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rentals/:slug" element={<RentalDetail />} />
          <Route path="/dine/the-restaurant" element={<Resturaunt />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomsDetails />} />
          <Route path="/social-corporate-events" element={<SocialEvents />} />
          <Route path="/Event-rfp" element={<EventRFP />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/story" element={<Story />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/wedding-rfp" element={<WeddingRFP />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
