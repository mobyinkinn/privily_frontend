
import { Stack, Typography, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Blank from "./Blank";
import axios from "axios";
import RatingModal from "./RatingModal";
import { useNavigate } from "react-router-dom";

const Mainnotification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCardClick = (id) => {
    setSelectedNotification({id});
  };

  const handleModalClose = () => {
    setSelectedNotification(null);
  };

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const userId = JSON.parse(
          localStorage.getItem("apiResponseData")
        ).userId;

        const response = await axios.get(
          `https://privily.co/api/review-pods/${userId}`
        );

        setNotifications(response.data.pods_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

  getNotifications();

    const intervalId = setInterval(() => {
      const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;
      axios
        .get(`https://privily.co/api/review-update/${userId}`)
        .then((response) => {
          // Handle the response as needed, e.g., update state
          console.log("Review Update API called successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error calling Review Update API:", error);
        });
    }, 15*60*1000); // 15 minutes in milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Stack bgcolor={"White"} p={2}>
        <Typography fontWeight={"bold"} textAlign={"center"} variant="h5">
          Notification
        </Typography>
      </Stack>
      {notifications.length > 0 ? (
        notifications.slice().reverse()?.map((notification, index) => (
          <Stack
            key={index}
            bgcolor={"white"}
            onClick={() =>
              handleCardClick(notification.id)
            }
          >
            {selectedNotification &&
              selectedNotification.id === notification.id &&
              (
                <RatingModal
                  id={notification.id}
                  onClose={handleModalClose}
                />
              )}
            <Stack
              bgcolor={"White"}
              mt={2}
              p={"16px 24px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography variant="h5" fontWeight={"bold"}>
                  Your Booking is completed !!
                </Typography>
                <Stack direction={"row"} gap={1}>
                  <Typography>{notification.date}</Typography>
                  <Typography>
                    {notification.start_time}-{notification.end_time}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography>Its Time to Rate us Tap on me !!</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))
        ) : (
          <Blank />
          )}
          <Stack width={"100px"} height={"6.5vh"}></Stack>
    </>
  );
};

export default Mainnotification;
