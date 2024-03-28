import React from "react";
import { Route, Routes } from "react-router";
import { useMediaQuery } from "react-responsive";
import Home from "./Home";
import Navbar from "./utils/Navbar";
import MainPods from "./PodsDetails/MainPods";
import Footer from "./utils/Footer"
import MainDashboard from "./dashboard/MainDashboard";
import MainAbout from "./About/MainAbout";
import Maindiscovery from "./Podsdiscovery/Maindiscovery";
import MainCorporate from "./Forcorporate/MainCorporate";
import MainContact from "./Contactus/MainContact";
import Login from "./utils/Login";
import BookaPod from "./PodsDetails/BookaPod";
import Details from "./PodsDetails/Details";
import UserProfile from "./dashboard/UserProfile";
import PrivacyPolicy from "./dashboard/PrivacyPolicy";
import Bookings from "./dashboard/Bookings";
import Termsandcondition from "./dashboard/Termsandcondition";
import Bookinghistory from "./dashboard/Bookinghistory";
import Mainnotification from "./Notifications/Mainnotification";
import HomePopUp from "./Homeparts/parts/HomePopUp";
import RatingModal from "./Notifications/RatingModal";
const Main = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <>
      <Routes>
        {isMobile ? (
          <Route exact path="/" element={<HomePopUp isMobile={isMobile} />} />
        ) : (
          <Route exact path="/" element={<Home id={"home"} />} />
        )}
        {/* <Route exact path="/" element={<HomePopUp/>}></Route>*/}
        <Route exact path="/home" element={<Home id={"home"} />}></Route>
        <Route path="/podsdetails/:slug" element={<Details />} />
        <Route path="/Dashboard" element={<MainDashboard />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/bookingshistory/:UID" element={<Bookinghistory />} />
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<Termsandcondition />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Aboutus" element={<MainAbout />}></Route>
        <Route path="/Podsdiscovery" element={<Maindiscovery />}></Route>
        <Route path="/notifications" element={<Mainnotification />}></Route>
        
        {/* <Route
          path="/notifications/:user_id/:pods_id"
          element={<RatingModal />}
        ></Route> */}

        <Route path="/Forcorporate" element={<MainCorporate />}></Route>
        <Route
          path="/podsdetails/booking-pods/:id"
          element={<BookaPod />}
        ></Route>
        <Route path="/ContactUs" element={<MainContact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
