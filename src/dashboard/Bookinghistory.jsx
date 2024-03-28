
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Stack, Typography } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
const Bookinghistory = () => {
  const { UID } = useParams();
  const [bookingDetails, setBookingDetails] = useState([]);
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(-1);
  };
  const [buttonData, setButtonData] = useState([
    {
      key: "UID",
      value: "UID",
    },
    {
      key: "Pods id",
      value: "pods_id",
    },
    {
      key: "Purpose",
      value: "purpose",
    },
    {
      key: "Date",
      value: "date",
    },
    {
      key: "Start time",
      value: "start_time",
    },
    {
      key: "End time",
      value: "end_time",
    },
  ]);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(
          `https://privily.co/api/booking-details/${UID}`
        );
        setBookingDetails(response.data.podData);
      } catch (error) {
        console.error("Error fetching booking details", error);
      }
    };

    // Fetch booking details when the component mounts
    fetchBookingDetails();
  }, [UID]);

  return (
    <>
      <Stack>
        <Stack
          bgcolor={"White"}
          p={"16px 105px 16px 0px"}
          direction={"row"}
          justifyContent={"space-around"}
        >
          <KeyboardBackspaceRoundedIcon
            sx={{ pt: { sm: "0px", xs: "4px" } }}
            onClick={handleBackHome}
          />
          <Typography fontWeight={"bold"} textAlign={"center"} variant="h5">
            Booking history
          </Typography>
        </Stack>
        {bookingDetails.map((booking, index) => (
          <Stack key={index} gap={2} pt={2}>
            {buttonData.map((item, itemIndex) => (
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                p={"6px 100px"}
                bgcolor={"white"}
              >
                <Typography key={itemIndex} letterSpaceing={2}>
                  {item.key}:
                </Typography>
                <Typography key={itemIndex}>{booking[item.value]}</Typography>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Bookinghistory;
