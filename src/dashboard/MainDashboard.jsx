import {
  Box,
  Modal,
  Stack,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import React, { useState } from 'react'
import Button from "../utils/Button";
import { useNavigate} from "react-router";

const MainDashboard = () => {
  const navigate = useNavigate();
   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const features = [
    {
      text: "Profile",
      route: "/profile",
    },
    {
      text: "Bookings",
      route: "/bookings",
    },
    {
      text: "Privacy policy",
      route: "/privacy-policy",
    },
    {
      text: "Terms & Conditions",
       route: "/terms-and-conditions",
    },
    
  ];
   
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };
  const logout = () => {
    localStorage.removeItem("apiResponseData");
    navigate("/home");
    window.location.reload();
  };
  const handleDeleteConfirmation = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;

      // Perform the delete API call with userId
      const response = await fetch(
        `https://privily.co/api/delete-profile/${userId}`,
        {
          method: "DELETE",
          headers: {
            // Add any necessary headers (e.g., authorization token)
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the API call was successful (status code 200)
      if (response.ok) {
        // Successful deletion
         localStorage.removeItem("apiResponseData");
         navigate("/home");
        console.log("Profile deleted successfully");
        // You can perform any additional actions after deletion if needed
      } else {
        // Handle error cases
        console.error("Failed to delete profile. Status:", response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error deleting profile:", error);
    } finally {
      // Close the modal after deletion or error
      closeDeleteModal();
    }
  };
  const handleNextPage = (route) => {
    navigate(route);
  };
  return (
    <>
      <Stack bgcolor={"White"} p={2}>
        <Typography fontWeight={"bold"} textAlign={"Center"} variant="h5">
          Settings
        </Typography>
      </Stack>

      <Stack p={3} gap={2}>
        {features.map((d) => (
          <Typography
            bgcolor={"white"}
            p={2}
            borderRadius={1}
            onClick={() => handleNextPage(d.route)}
          >
            {d.text}
          </Typography>
        ))}
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"} pt={3} gap={2}>
        <Button
          onClick={logout}
          sx={{
            bgcolor: "#FF1200",
            color: "white",
            width: "130px",
            borderRadius: "40px",
            padding: "10px 10px 10px 10px",
            fontWeight: "bold",
          }}
        >
          Logout
        </Button>
        <Button
          onClick={openDeleteModal}
          sx={{
            bgcolor: "#FF1200",
            color: "white",
            borderRadius: "40px",
            padding: "10px 15px",
            fontWeight: "bold",
          }}
        >
          Delete My Profile
        </Button>
      </Stack>
      <Modal
        open={isDeleteModalOpen}
        onClose={closeDeleteModal}
        aria-labelledby="custom-modal-title"
      >
        <div className="modalBackground">
          <div className="modalContainer">
            <Stack textAlign={"center"} alignItems={"center"} gap={2}>
              <Typography fontWeight={"bold"} variant="h6">
                Are you sure you want to delete your profile permanently?
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

export default MainDashboard