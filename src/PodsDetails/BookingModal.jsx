import React, { useEffect, useState } from "react";
import "./BookingModal.css";
import { Stack, Typography } from "@mui/material";
import logo from "../assets/Logo.png";
import Button from "../utils/Button";
import axios from "axios";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
function BookingModal({ setOpenModal }) {
  const [email, setemail] = useState("");
  const [Popup, setPopup] = useState(1);
  const handleClickNext = () => {
    setPopup(Popup + 1);
  };
  const handleBackClick=()=>{
    setPopup(Popup-1)
  }
  
  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains("modalBackground")) {
        setOpenModal(false);
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [setOpenModal]);

  // const toggleUserType = () => {
  //   setIsReturningUser((prev) => !prev);
  // };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <KeyboardBackspaceRoundedIcon
            sx={{ pt: { sm: "0px", xs: "30px" } }}
            onClick={() => {
              handleBackClick()
            }}
          />
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <Stack alignItems={"center"}>
          <img
            src={logo}
            style={{ width: "240px", height: "75px" }}
            alt="Logo"
          ></img>
        </Stack>
        <Stack alignItems={"center"}></Stack>
        <Stack p={"20px 40px 40px 40px"}>
          <>
            {Popup === 1 ? (
              <>
                <Typography p={1}>Select Purpose:</Typography>
                <select
                  id="Purpose"
                  name="Purpose"
                  className="Input-fieldss"
                  aria-placeholder="Select Purpose"
                >
                  <option value="volvo">Meeting</option>
                  <option value="fiat"></option>
                  <option value="audi"></option>
                </select>
                <Typography p={1}>Select Date:</Typography>
                <input
                  type="select"
                  placeholder="Select Date"
                  className="Input-fields"
                ></input>
                <Typography p={1}>Select Time:</Typography>
                <input
                  type="select"
                  placeholder="Select Time"
                  className="Input-fields"
                ></input>
              </>
            ) : Popup === 2 ? (
              <>
                <Typography p={1}>Mobile Number:</Typography>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="Input-fields"
                ></input>
                <Typography p={1}> Enter Your Email :</Typography>
                <input
                  type="text"
                  placeholder="Email"
                  className="Input-fields"
                ></input>
                {/* <Typography p={1}>OTP:</Typography>
                <input
                  type="password"
                  placeholder="********"
                  className="Input-fields"
                ></input> */}
              </>
            ) : (
              <>
                <Typography p={1}>OTP:</Typography>
                <input
                  type="password"
                  placeholder="********"
                  className="Input-fields"
                ></input>
              </>
            )}

            <Stack alignItems={"center"} pt={3}>
              <Button
                onClick={handleClickNext}
                sx={{
                  bgcolor: "#FF1200",
                  color: "white",
                  width: "130px",
                  borderRadius: "40px",
                  padding: "5px 10px 5px 10px",
                  fontWeight: "bold",
                }}
              >
                Next
              </Button>
            </Stack>
          </>
        </Stack>
      </div>
    </div>
  );
}

export default BookingModal;
