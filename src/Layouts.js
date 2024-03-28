import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Main from "./Main";
import Navbar from "./utils/Navbar";

// class Layouts extends Component {
//   render() {
//     return (
//       <BrowserRouter basename={process.env.PUBLIC_URL}>
//         {/* <ToastContainer hideProgressBar={true} /> */}
//         <Navbar/>
//         <Main />
//       </BrowserRouter>
//     );
//   }
// }
const Layouts = ({ hasNewNotifications }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar hasNewNotifications={hasNewNotifications} />
      <Main />
    </BrowserRouter>
  );
};

export default Layouts;
