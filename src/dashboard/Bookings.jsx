import {
  Box,
  Stack,
  Typography,
  CircularProgress,
  Modal,
  Button as MuiButton,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
import Appears from "./Appears"; // Import Appears component
import Button from "../utils/Button";

const Bookings = () => {
  const [details, setdetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const navigate = useNavigate();
const openDeleteModal = (bookingId) => {
  setDeleteModalOpen(true);
  setSelectedBookingId(bookingId);
};

const closeDeleteModal = () => {
  setDeleteModalOpen(false);
  setSelectedBookingId(null);
};

  const handleBackHome = () => {
    navigate(-1);
  };

 const handleBookHistory = (UID) => {
   navigate(`/bookingshistory/${UID}`);
 };

const getStatusName = (status) => {
  switch (status) {
    case "pending":
      return "Scheduled";
    case "processing":
      return "In-Use";
    case "success":
      return "Session Complete";
    case "completed":
      return "Session Rated";
    default:
      return "Unknown";
  }
};
const handleDeleteConfirmation = async () => {
  try {
    // Assuming the ID is available in the selectedBookingId state
    const bookingId = selectedBookingId;

    // Perform the delete API call with bookingId
    const response = await axios.delete(
      `https://privily.co/api/cancel-booking/${bookingId}`
    );

    // Check if the API call was successful
    if (response.status === 200) {
      // Successful cancellation
      navigate(-1)
      console.log("Booking canceled successfully");
      // You can perform any additional actions after cancellation if needed
    } else {
      // Handle error cases
      console.error("Failed to cancel booking. Status:", response.status);
    }
  } catch (error) {
    // Handle network or other errors
    console.error("Error canceling booking:", error);
  } finally {
    // Close the modal after cancellation or error
    closeDeleteModal();
  }
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;

        const response = await axios.get(
          `https://privily.co/api/booking-history/${userId}`
        );

        setdetails(response.data.historyData);
        console.log("details", response.data.historyData);
        console.log("Cards", response.data.data);
        const currentTime = new Date();
        console.log("currentTime", currentTime);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
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
          Bookings
        </Typography>
      </Stack>
      {details?.length > 0 ? (
        details
          .slice()
          .reverse()
          ?.map((d, index) => (
            <Box
              key={index}
              // onClick={() => handleBookHistory(d.UID)} // Add onClick to trigger navigation
            >
              <Stack
                key={index}
                bgcolor={"White"}
                mt={2}
                p={"16px 24px"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Stack onClick={() => handleBookHistory(d.UID)} width={"60%"}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    {d.title}
                  </Typography>
                  <Stack direction={"row"} gap={1}>
                    <Typography>{d.date}</Typography>
                    <Typography>{d.start_time}</Typography>
                  </Stack>
                </Stack>
                <Stack gap={1}>
                  <Stack>
                    <Typography textAlign={"center"}>id:{d.UID}</Typography>
                    <Typography
                      color={
                        d.status === "pending"
                          ? "red"
                          : d.status === "processing"
                          ? "orange"
                          : d.status === "success"
                          ? "Green"
                          : d.status === "completed"
                          ? "green"
                          : "black" // Default color if status doesn't match expected values
                      }
                      textAlign={"center"}
                    >
                      {getStatusName(d.status)}
                    </Typography>
                  </Stack>

                  {d.status === "pending" && (
                    <Button
                      onClick={() => openDeleteModal(d.id)}
                      sx={{
                        bgcolor: "#FF1200",
                        color: "white",
                        borderRadius: "40px",
                        fontWeight: "bold",
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                  {/* <Button
                  // onClick={openDeleteModal}
                  // onClick={() => handleCancelBooking(d.id)}
                  onClick={() => openDeleteModal(d.id)}
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    borderRadius: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </Button> */}
                  {/* {isCancelable(d.start_time) && (
                  <Button
                    onClick={() => openDeleteModal(d.id)}
                    sx={{
                      bgcolor: "#FF1200",
                      color: "white",
                      borderRadius: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    Cancel
                  </Button>
                )} */}
                </Stack>
              </Stack>
            </Box>
          ))
      ) : (
        <Appears />
      )}
      <Stack width={"100px"} height={"6.5vh"}></Stack>
      <Modal
        open={isDeleteModalOpen}
        onClose={closeDeleteModal}
        aria-labelledby="custom-modal-title"
      >
        <div className="modalBackground">
          <div className="modalContainer">
            <Stack textAlign={"center"} alignItems={"center"} gap={2}>
              <Typography fontWeight={"bold"} variant="h6">
                Are you sure you want to cancel this booking?
              </Typography>
              <Stack spacing={2} mt={2} direction="row">
                <MuiButton
                  variant="contained"
                  color="primary"
                  onClick={handleDeleteConfirmation}
                >
                  Yes
                </MuiButton>
                <MuiButton variant="outlined" onClick={closeDeleteModal}>
                  No
                </MuiButton>
              </Stack>
            </Stack>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Bookings;

