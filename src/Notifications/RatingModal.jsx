import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import axios from "axios";
import Button from "../utils/Button";
import { Stack } from "@mui/material";
import ThanksCom from "../PodsDetails/ThanksCom";
import ReviewThanks from "./ReviewThanks";

const RatingModal = ({ id, onClose }) => {
  const [ratings, setRatings] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showThanksCom, setShowThanksCom] = useState(false);

  const closeModal = () => {
    setShowThanksCom(false);
    onClose();
  };

  const sendFeedback = async () => {
    try {
      if (!ratings || !feedback.trim()) {
        console.error("Ratings and feedback are required");
        return;
      }

      const response = await axios.post(
        `https://privily.co/api/user-rating/${id}`,
        {
          ratings: ratings,
          feedback: feedback.trim(),
        }
      );


      // Show ThanksCom modal if the status is success
      if (response.data.status === "Success") {
        setShowThanksCom(true);
      } else {
        // Handle other status scenarios if needed
        console.error("Feedback submission failed");
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains("modalBackground")) {
        closeModal();
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [closeModal]);

  return (
    <div className="modalBackground">
      <Stack className="modalContainer" gap={2}>
        {showThanksCom ? (
          <ReviewThanks />
        ) : (
          <>
            <Ratings onChange={(value) => setRatings(value)} />
            <textarea
              placeholder="Provide your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              cols="50"
            />
            <Stack alignItems={"center"}>
              <Button
                onClick={sendFeedback}
                sx={{
                  bgcolor: "#FF1200",
                  color: "white",
                  width: "220px",
                  borderRadius: "40px",
                  padding: "5px 10px 5px 10px",
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: "#FF1200",
                    color: "white",
                  },
                }}
              >
                Submit Feedback
              </Button>
            </Stack>
            
          </>
        )}
      </Stack>
    </div>
  );
};

export default RatingModal;
