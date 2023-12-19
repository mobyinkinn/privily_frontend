import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Main from "./Main";

class Layouts extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <ToastContainer hideProgressBar={true} /> */}
        <Main/>
      </BrowserRouter>
    );
  }
}

export default Layouts;
