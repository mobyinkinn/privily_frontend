
import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import Button from "../utils/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BannerModal({ setOpenModal }) {
  const navigate = useNavigate();

  const handleLocationClick = async (location) => {
    try {
      const response = await axios.post(
        "https://privily.co/api/livesearch",
        {
          location: location,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response, "response user type");

      // Redirect to PodsListing page with the updated data
      navigate(`/podsdiscovery?location=${location}`);
      setOpenModal(false)
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

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

  return (
    <div className="modalBackground">
      <Stack>
        <div className="modalContainer">
          <Typography
            fontSize={{ lg: "40px", xs: "20px" }}
            fontWeight={"bold"}
            color={"#ED3327"}
            textAlign={"center"}
          >
            Find pods closer to you?
          </Typography>

          <Stack p={{ lg: "20px 40px 40px 40px", xs: "20px 20px" }} gap={1}>
            <Button
              onClick={() => handleLocationClick("Durban")}
              sx={{ border: "1px solid lightgrey" }}
            >
              Durban
            </Button>
            <Button
              onClick={() => handleLocationClick("Midrand")}
              sx={{ border: "1px solid lightgrey" }}
              disabled
            >
              Midrand(Coming soon)
            </Button>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

export default BannerModal;

