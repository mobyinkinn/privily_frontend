import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../utils/Button";
import DirectionsIcon from "@mui/icons-material/Directions";
import StarIcon from "@mui/icons-material/Star";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";
import ChargingStationRoundedIcon from "@mui/icons-material/ChargingStationRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import Faqs from "./Faq";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import Imageslider from "./Imageslider";
import BookingModal from "./BookingModal";
import Modal from "../utils/Modal";
// const features = [
//   {
//     icon: <ChairRoundedIcon />,
//     text: "Comfortable chairs",
//   },
//   { icon: <WifiRoundedIcon />, text: "Unlimited Wi-fi" },
//   { icon: <NotificationsOffRoundedIcon />, text: "Sound Proof" },
//   { icon: <ChargingStationRoundedIcon />, text: " Charging " },
//   { icon: <KeyRoundedIcon />, text: " 24/7 Access" },
// ];
const features = [
  {
    icon: (
      <GridViewIcon
        sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
      />
    ),
    text: " Ventilated",
  },
  {
    icon: (
      <NotificationsOffRoundedIcon
        sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
      />
    ),
    text: "Sound Proof",
  },
  {
    icon: (
      <ChairRoundedIcon
        sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
      />
    ),
    text: "Comfortable Seating",
  },
  {
    icon: (
      <WifiRoundedIcon
        sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
      />
    ),
    text: "Wifi from hosting facility",
  },

  {
    icon: (
      <ChargingStationRoundedIcon
        sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
      />
    ),
    text: " Electric Connection ",
  },
];
const Details = () => {
 
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [detail, setdetail] = useState();
  
  const location = useLocation();
  // const handleBookpage=(id)=>{
  //   const token = JSON.parse(localStorage.getItem("apiResponseData")).token;
  //   if (token){
  //     navigate(`/podsdetails/booking-pods/${id}`);
  //   } else {
  //     setModalOpen(true)
  //   }
  // }
  // const handleBookpage = (id) => {
  //   const userDataString = localStorage.getItem("apiResponseData");

  //   if (userDataString) {
  //     const userData = JSON.parse(userDataString);
  //     const token = userData && userData.token;

  //     if (token) {
  //       // User data is present and has a token, navigate to the API
  //       navigate(`/podsdetails/booking-pods/${id}`);
  //     } else {
  //       // User data is present but doesn't have a token, open the login/signup modal
  //       setModalOpen(true);
  //     }
  //   } else {
  //     // User data is not present, open the login/signup modal
  //     setModalOpen(true);
  //   }
  // };
// const handleBookpage = (id) => {
//   const userDataString = localStorage.getItem("apiResponseData");

//   if (userDataString) {
//     const userData = JSON.parse(userDataString);
//     const token = userData && userData.token;

//     if (token) {
//       // User data is present and has a token, navigate to the API
//       navigate(`/podsdetails/booking-pods/${id}`);
//     } else {
//       // User data is present but doesn't have a token
//       // Store the intended destination in local storage
//       localStorage.setItem(
//         "intendedDestination",
//         `/podsdetails/booking-pods/${id}`
//       );

//       // Open the login/signup modal
//       setModalOpen(true);
//     }
//   } else {
//     // User data is not present, open the login/signup modal
//     setModalOpen(true);
//   }
// };
const handleDirectionsClick = () => {
  // Check if the detail object and its location details are available
  if (detail && detail.location) {
    // Extract latitude and longitude from the location object
    const { lat, lon } = detail.location;

    // Construct the Google Maps URL with the updated query parameter
    const mapsURL = `https://maps.app.goo.gl/fbMsihMAnAttbMjx7?g_st=ic&ll=${lat},${lon}`;

    // Open the URL in a new tab/window
    window.open(mapsURL, "_blank");
  }
};
const handleBookpage = async (id) => {
  const userDataString = localStorage.getItem("apiResponseData");

  if (userDataString) {
    const userData = JSON.parse(userDataString);
    const token = userData && userData.token;

    if (token) {
      // User data is present and has a token, navigate to the booking page
      navigate(`/podsdetails/booking-pods/${id}`);
    } else {
      // User data is present but doesn't have a token, open the login/signup modal
      // Pass the intended route as state to use after successful login
      setModalOpen({
        isOpen: true,
        intendedRoute: `/podsdetails/booking-pods/${id}`,
      });
    }
  } else {
    // User data is not present, open the login/signup modal
    // Pass the intended route as state to use after successful login
    setModalOpen({
      isOpen: true,
      intendedRoute: `/podsdetails/booking-pods/${id}`,
    });
  }
};





  const MarketplaceDetail = async (slug) => {
    try {
      const response = await axios.get(`https://privily.co/api/pods/${slug}`);
      setdetail(response.data.data);
      console.log("repo", detail);
      console.log("asfadaasd", response);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (location.pathname.split("/podsdetails/")[1]) {
      MarketplaceDetail(location.pathname.split("/podsdetails/")[1]);
    }
  }, [location]);

  
  return (
    <Stack bgcolor={"white"}>
      {detail && (
        <>
          <Imageslider detail={detail} />
          <Stack
            gap={{ xs: 2 }}
            direction={{
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
              xss: "row",
            }}
            justifyContent={"space-between"}
            p={{
              lg: "34px 130px 24px 130px",
              md: "44px 130px 24px 130px",
              sm: "44px 90px 20px 90px",
              xs: "44px 30px 30px 30px",
            }}
          >
            <Stack gap={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={{ lg: "40px", md: "30px", sm: "25px", xs: "22px" }}
              >
                {detail.title}
              </Typography>
              <Typography>{detail.address}</Typography>

              <Stack direction={"row"} gap={2}>
                <Button
                  endIcon={<StarIcon />}
                  sx={{
                    bgcolor: "#1D9740",
                    color: "white",
                    width: "80px",
                    borderRadius: "40px",
                    padding: "5px 10px 5px 10px",
                    fontWeight: "bold",
                    "&:hover": {
                      bgcolor: "#1D9740",
                      color: "white",
                    },
                  }}
                >
                  {detail.rating}
                </Button>
                <Button
                  onClick={() => {
                    handleBookpage(detail.id);
                  }}
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    width: "130px",
                    borderRadius: "40px",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Book Now
                </Button>
              </Stack>
            </Stack>
            <Stack alignItems={"flex-start"}>
              <Button
                onClick={handleDirectionsClick}
                startIcon={<DirectionsIcon fontSize="30px" color="#FF1200" />}
                sx={{
                  color: "#FF1200",
                  borderRadius: "40px",
                  padding: {
                    lg: "5px 10px 5px 10px",
                    md: "5px 10px 5px 10px",
                    sm: "2px 7px 2px 7px",
                  },
                  fontWeight: "bold",
                  border: "3px solid #FF1200",

                  width: {
                    xs: "123px",
                    xss: "125px",
                    sm: "125px",
                    md: "170px",
                    lg: "200px",
                  },
                  //   height: { xs: "20px", sm: "35px", md: "50px", lg: "60px" },
                }}
              >
                Directions
              </Button>
            </Stack>
          </Stack>
          <Stack
            sx={{
              content: "''",
              height: "1px",
              width: "100%",
              bgcolor: "lightgrey",
            }}
          ></Stack>
          <Stack
            p={{
              lg: "24px 130px 24px 130px",
              md: "24px 130px 24px 130px",
              sm: "20px 90px 20px 90px",
              xs: "30px 40px",
            }}
            gap={2}
          >
            <Typography
              fontWeight={"bold"}
              fontSize={{ lg: "35px", md: "30px", sm: "25px", xs: "20px" }}
            >
              Features
            </Typography>
            {features.map((feature, index) => (
              <Stack key={index} direction={"row"} gap={3}>
                <Stack justifyContent={"center"} color={"grey"}>
                  {" "}
                  {feature.icon}
                </Stack>
                <Typography variant="h6">{feature.text}</Typography>
              </Stack>
            ))}
          </Stack>
          <Faqs />
          <Stack alignItems={"Center"} pb={5}>
            <Button
              onClick={() => {
                handleBookpage(detail.id);
              }}
              sx={{
                bgcolor: "#FF1200",
                fontSize: "20px",
                color: "white",
                width: "150px",
                borderRadius: "40px",
                padding: "5px 10px 5px 10px",
                fontWeight: "bold",
              }}
            >
              Book Now
            </Button>
            {modalOpen && (
              <Modal modalOpen={modalOpen} setOpenModal={setModalOpen} />
            )}
          </Stack>
          <Stack
            width={"100%"}
            height={"30px"}
            display={{ lg: "none", md: "none", sm: "none", xs: "block" }}
          ></Stack>
        </>
      )}
    </Stack>
  );
};

export default Details;
