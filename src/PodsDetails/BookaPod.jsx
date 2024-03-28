import React, { useEffect, useRef, useState } from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import "./BookingModal.css";
import Button from "../utils/Button";
import ThanksCom from "./ThanksCom";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";

const BookaPod = () => {
  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()); // Get the last two digits of the year
    return `${month}-${day}-${year}`;
  };
  const [Booking, setBooking] = useState({});
  const [isAccepted, setIsAccepted] = useState(false);
  const [page, setpage] = useState(1);
   const [prestarttime, setPrestarttime] = useState([]);
  const [endDate, setEndDate] = useState(new Date());
   const [bookingSuccess, setBookingSuccess] = useState(false);
  // const [captchaImage, setCaptchaImage] = useState("");
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [isEndDropdownOpen, setEndDropdownOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    purpose: "",
    start_time: "",
    end_time: "",
    recaptcha: "",
    date: "",
    user_id:"",
  });
  console.log("bookingData", bookingData);
  const [errors, setErrors] = useState({
    purpose: "",
    start_time: "",
    end_time: "",
    date: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const handleFieldError = (field, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  const navigate = useNavigate();
  const location = useLocation();
const SendTermsandCondition=()=>{
  navigate("/terms-and-conditions");
}
const SendPrivacyPolicy=()=>{
  navigate("/privacy-policy");
}
  const handlebackHome = () => {
    if (page === 1) {
      navigate(-1);
    } else setpage(page - 1);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const handleTimeSelection = (selectedTime) => {
  setBookingData((prevData) => ({
    ...prevData,
    start_time: selectedTime,
  }));
  setDropdown2Open(false); // Close the dropdown after selection if needed
};
const handleEndTimeSelection = (selectedTime) => {
  setBookingData((prevData) => ({
    ...prevData,
    end_time: selectedTime,
  }));
  setEndDropdownOpen(false); // Close the end time dropdown after selection if needed
};

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Update the bookingData state with the selected date
    setBookingData((prevData) => ({
      ...prevData,
      date: formatDate(date),
    }));
  };
  const user_Id = JSON.parse(localStorage.getItem("apiResponseData")).userId;
  const handleClickNext = async () => {
      try {
        if (
          !bookingData.purpose ||
          !bookingData.start_time ||
          !bookingData.end_time ||
          !bookingData.date  
        ) {
          if (!bookingData.purpose)
            handleFieldError("purpose", "Please fill in this field");
          if (!bookingData.start_time)
            handleFieldError("start_time", "Please fill in this field");
          if (!bookingData.end_time)
            handleFieldError("end_time", "Please fill in this field");
          if (!bookingData.date) {
            const formattedToday = formatDate(new Date());
            setBookingData((prevData) => ({
              ...prevData,
              date: formattedToday,
            }));
          }
          return;
        }
        const id = location.pathname.split("/podsdetails/booking-pods/")[1];
        // const formattedDate = formatDate(endDate);
        const response = await axios.post(
          `https://privily.co/api/save-pods/${id}`,
          {
            purpose: bookingData.purpose,
            start_time: bookingData.start_time,
            end_time: bookingData.end_time,
            recaptcha: recaptchaValue,
            date: bookingData.date,
            user_id: user_Id,

          }
        );

        if (response.data.status === "Success") {
          console.log("response", response);
         setBookingSuccess(true);
        } else {
          alert(`Booking failed: ${response.data.msg}`);
        }
      } catch (error) {
        console.error("Error making API call: ", error);
      }
    
  };

 
 
  const fetchTimeSlots = async (id, formattedDate) => {
    try {
      const response = await axios.get(
        `https://privily.co/api/get-pods/${id}/${formattedDate}`
      );
      // Convert the objects into arrays before setting the state
      setPrestarttime(response.data.prestarttime || []);
      const startTimeArray = Object.values(response.data.startTime || {});
      const endTimeArray = Object.values(response.data.endTime || {});

      setBooking({
        ...response.data,
        startTime: startTimeArray,
        endTime: endTimeArray,
      });
    } catch (error) {
      console.error("Error fetching time slots: ", error);
    }
  };
const handleAcceptanceChange = (event) => {
  setIsAccepted(event.target.checked);
};
 const isFormValid = () => {
   // Check if all fields are filled and the checkbox is checked
   return (
     
     isAccepted
   );
 };
 const categoriesDropdownRef = useRef(null);
 const endtimeDropdownRef = useRef(null);

  const endtime = Booking.endTime;
  const starttime = Booking.startTime;
   useEffect(() => {
     if (location.pathname.split("/podsdetails/booking-pods/")[1]) {
       const id = location.pathname.split("/podsdetails/booking-pods/")[1];
       const formattedDate = formatDate(endDate);
       fetchTimeSlots(id, formattedDate);
     }
   }, [location, endDate]);

useEffect(() => {
  function handleClickOutside(event) {
    // Check if the click is outside the categories dropdown
    if (
      categoriesDropdownRef.current &&
      !categoriesDropdownRef.current.contains(event.target)
    ) {
      setDropdown2Open(false);
    }

    // Check if the click is outside the followers dropdown
  }
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);
useEffect(() => {
  function handleEndClickOutside(event) {
    if (
      endtimeDropdownRef.current &&
      !endtimeDropdownRef.current.contains(event.target)
    ) {
      setEndDropdownOpen(false);
    }
  }
  
  document.addEventListener("click", handleEndClickOutside);
  return () => {
    document.removeEventListener("click", handleEndClickOutside);
  };
}, [])

  return (
    <>
      <Stack direction={"row"} gap={18} p={2}>
        <KeyboardBackspaceRoundedIcon
          sx={{ pt: { sm: "0px", xs: "4px" } }}
          onClick={() => {
            handlebackHome();
          }}
        />
        <Typography variant="h5" fontWeight={"bold"}>
          {page === 1 ? "Book" : ""}
        </Typography>
      </Stack>
      <Stack
        // position="relative"
        height={"50vh"}
        gap={2}
        justifyContent={page === 4 ? "center" : ""}
      >
        <>
          <Stack p={"0 30px"}>
            <Typography p={1}>Select Purpose:</Typography>
            <select
              id="Purpose"
              value={bookingData.purpose}
              onChange={handleInputChange}
              name="purpose"
              className="Input-fieldss"
              aria-placeholder="Select Purpose"
            >
              <option value="">Select Purpose</option>
              <option value="Meeting">Online Meeting</option>
              <option value="Deep Work">Deep Work</option>
              <option value="Phone Call">Phone Call</option>
            </select>
            {errors.purpose && (
              <Typography color="red">{errors.purpose}</Typography>
            )}
            <Typography p={1}>Select Date:</Typography>

            <ReactDatePicker
              className="Input-neww"
              selected={endDate}
              onChange={handleEndDateChange}
            />
            {errors.endDate && (
              <Typography color="red">{errors.endDate}</Typography>
            )}
            <Typography p={1}>Select Time:</Typography>

            <Stack direction={"row"} gap={"29px"}>
              {/* <select
                  type="select"
                  placeholder="Start time"
                  className="Input-fields"
                  value={bookingData.start_time}
                  onChange={handleInputChange}
                  name="start_time"
                >
                  <option value="">Start Time</option>
                  {starttime?.map((media) => (
                    <option key={media.media_id} value={media.media_id}>
                      {media}
                    </option>
                  ))}
                </select> */}
              <Stack>
                <Box>
                  <input
                    onClick={() => setDropdown2Open(!isDropdown2Open)}
                    value={bookingData.start_time}
                    name="start_time"
                    className="Input-fields"
                    type="text"
                    placeholder="Select Start Time"
                    onChange={handleInputChange}
                    ref={categoriesDropdownRef}
                  />

                  {isDropdown2Open && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        position: "fixed",
                        top: "61%", // Adjust as needed
                        left: "43%", // Adjust as needed
                        transform: "translate(-50%, -50%)",
                        border: "1px solid #9277FF",
                        borderRadius: "10px",
                        maxHeight: "350px", // Set maximum height for scrolling
                        overflowY: "auto", // Enable vertical scrolling
                        width: "64%",
                        backgroundColor: "#F1F7FD",
                        padding: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "14px",
                        flexWrap: "wrap",
                        zIndex: 10,
                      }}
                    >
                      {starttime.map((media, index) => (
                        <Stack
                          key={index}
                          direction={"row"}
                          gap={3}
                          width={"78px"}
                        >
                          <Stack gap={1}>
                            <Typography
                              fontSize={"15px"}
                              p={"4px 8px"}
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              border={"1px solid #AAA9A9"}
                              borderRadius={"20px"}
                              onClick={() => handleTimeSelection(media)}
                            >
                              {media}
                            </Typography>
                          </Stack>
                        </Stack>
                      ))}
                    </div>
                  )}
                </Box>
                {errors.start_time && (
                  <Typography color="red">{errors.start_time}</Typography>
                )}
              </Stack>
              {/* <select
                  type="select"
                  placeholder="End Time"
                  className="Input-fields"
                  value={bookingData.end_time}
                  onChange={handleInputChange}
                  name="end_time"
                >
                  <option value="">End Time</option>
                  {endtime?.map((media) => (
                    <option value={media}>{media}</option>
                  ))}
                </select> */}
              <Stack>
                <Box>
                  <input
                    onClick={() => setEndDropdownOpen(!isEndDropdownOpen)}
                    value={bookingData.end_time}
                    name="end_time"
                    className="Input-fields"
                    type="text"
                    placeholder="Select End Time"
                    onChange={handleInputChange}
                    ref={endtimeDropdownRef}
                  />

                  {isEndDropdownOpen && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        position: "fixed",
                        top: "61%", // Adjust as needed
                        left: "56%", // Adjust as needed
                        transform: "translate(-50%, -50%)",
                        border: "1px solid #9277FF",
                        borderRadius: "10px",
                        maxHeight: "350px", // Set maximum height for scrolling
                        overflowY: "auto", // Enable vertical scrolling
                        width: "64%",
                        backgroundColor: "#F1F7FD",
                        padding: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "14px",
                        flexWrap: "wrap",
                        zIndex: 10,
                      }}
                    >
                      {endtime.map((media, index) => (
                        <Stack
                          key={index}
                          direction={"row"}
                          gap={3}
                          width={"78px"}
                        >
                          <Stack gap={1}>
                            <Typography
                              fontSize={"15px"}
                              p={"4px 8px"}
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              border={"1px solid #AAA9A9"}
                              borderRadius={"20px"}
                              onClick={() => handleEndTimeSelection(media)}
                            >
                              {media}
                            </Typography>
                          </Stack>
                        </Stack>
                      ))}
                    </div>
                  )}
                </Box>
                {errors.end_time && (
                  <Typography color="red">{errors.end_time}</Typography>
                )}
              </Stack>
            </Stack>
            <ReCAPTCHA
              style={{ paddingLeft: "5px", paddingTop: "20px" }}
              sitekey="6LehI0kpAAAAAA9pG_onUZ2o2Qa-PWB16PkXTJcd"
              // sitekey="6LesqkkpAAAAAMlEtJHUDYR4F_7QQ7VgQIB9yBbH"
              onChange={handleRecaptchaChange}
            />
            <Stack direction={"row"}>
              <Checkbox
                checked={isAccepted}
                onChange={handleAcceptanceChange}
                color="primary"
              />
              <Stack justifyContent={"center"}>
                <Typography>
                  I accept the{" "}
                  <span
                    onClick={SendTermsandCondition}
                    style={{ color: "#FF1200" }}
                  >
                    terms and conditions{" "}
                  </span>
                  and{" "}
                  <span
                    onClick={SendPrivacyPolicy}
                    style={{ color: "#FF1200" }}
                  >
                    {" "}
                    privacy policies.
                  </span>
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack alignItems={"center"}>
            {bookingSuccess ? (
              <ThanksCom />
            ) : (
              <Button
                onClick={handleClickNext}
                disabled={!isFormValid()}
                sx={{
                  bgcolor: "#FF1200",
                  color: "white",
                  width: "130px",
                  borderRadius: "40px",
                  padding: "5px 10px 5px 10px",
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: "#FF1200",
                    color: "white",
                  },
                }}
              >
                Book Now
              </Button>
            )}
          </Stack>
        </>
      </Stack>
    </>
  );
};

export default BookaPod;


