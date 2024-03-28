
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layouts from "./Layouts";

const App = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  useEffect(() => {
    // Check if userId exists in localStorage
    const apiResponseData = localStorage.getItem("apiResponseData");
    if (!apiResponseData) {
      // Handle the case where the user is not logged in
      console.error("User is not logged in.");
      return; // Exit useEffect early
    }

    const userId = JSON.parse(apiResponseData).userId;
    const callReviewUpdateApi = async () => {
      try {
        const response = await axios.get(
          `https://privily.co/api/review-update/${userId}`
        );
        console.log("Review Update API called successfully:", response.data);
        // Handle the response as needed, e.g., update state
      } catch (error) {
        console.error("Error calling Review Update API:", error);
      }
    };
    const callReviewCancelApi = async () => {
      try {
        const response = await axios.get(
          `https://privily.co/api/review-cancel/${userId}`
        );
        console.log("Review Update API called successfully:", response.data);
        // Handle the response as needed, e.g., update state
      } catch (error) {
        console.error("Error calling Review Update API:", error);
      }
    };

    // Call the API initially
    callReviewUpdateApi();
    callReviewCancelApi();

    // Set up an interval for periodic API calls
    const intervalId = setInterval(() => {
      callReviewUpdateApi();
      callReviewCancelApi();
    }, 30000); // 15 minutes in milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchNotifications = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;
      const response = await axios.get(
        `https://privily.co/api/review-pods/${userId}`
      );
      const podsDataLength = response.data.pods_data.length;
      setHasNewNotifications(podsDataLength > 0);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications(); // Fetch notifications when the component mounts

    const intervalId = setInterval(() => {
      fetchNotifications(); // Fetch notifications every 10 seconds
    }, 30000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);
  return (
    <Layouts hasNewNotifications={hasNewNotifications}/>
  )
};

export default App;
