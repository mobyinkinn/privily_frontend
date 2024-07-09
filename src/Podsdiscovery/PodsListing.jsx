import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";
import StarIcon from "@mui/icons-material/Star";
import ChargingStationRoundedIcon from "@mui/icons-material/ChargingStationRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import Button from "../utils/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PodslistingSlider from "./PodslistingSlider";
import BookingModal from "../PodsDetails/BookingModal";
import Modal from "../utils/Modal";
const PodsListing = () => {
  const features = [
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
        <NotificationsOffRoundedIcon
          sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
        />
      ),
      text: "Sound Proof",
    },
    {
      icon: (
        <ChargingStationRoundedIcon
          sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
        />
      ),
      text: " Electric Connection ",
    },
    {
      icon: (
        <GridViewIcon
          sx={{ fontSize: { xss: "15px", xs: "13px", lg: "30px" } }}
        />
      ),
      text: " Ventilated",
    },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedLocation = queryParams.get("location");
  const [Cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // const handleLocationChange = (location) => {
  //   navigate(`/podsdiscovery?location=${location}`);
  // };

  const handlecardClicks = (slug) => {
    navigate(`/podsdetails/${slug}`);
  };
  // const handleBookclicks = (id) => {
  //   navigate(`/podsdetails/booking-pods/${id}`);
  // };
  const handleBookclicks = async (id) => {
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
  useEffect(() => {
    const getCastingCallsdetails = async () => {
      try {
        const response = await axios.post(
          "https://privily.co/api/livesearch",
          {
            location: selectedLocation,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        const sortedCards = response.data.data.sort((a, b) => {
          // You can adjust the sorting logic based on your specific requirements
          return a.id - b.id;
        });
        setCards(sortedCards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCastingCallsdetails();
  }, [selectedLocation]);
  return (
    <>
      <Stack
        // display={{lg:"flex", md:"flex",sm:"flex", xss:"none"}}
        direction={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={{ lg: 5, xs: 3 }}
        p={{ lg: 10, md: 8, sm: "30px 50px", xss: "30px 0px", xs: "22px 15px" }}
      >
        {/* <Box>
          <Typography variant="h6">Select Location:</Typography>
          <select
            onChange={(e) => handleLocationChange(e.target.value)}
            value={selectedLocation}
          >
            <option value=""></option>
            <option value="India">India</option>
            <option value="South africa">South Africa</option>
          </select>
        </Box> */}
        {Cards.map((d, index) => (
          <Stack
            sx={{
              gap: { lg: "50px" },
              p: {
                lg: "32px 40px 16px",
                md: "20px 0",
                sm: "20px 0",
                xss: "20px",
                xs: "13px",
              },
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xss: "column",
                xs: "column",
              },
              width: {
                lg: "100%",
                md: "70%",
                sm: "76%",
                xss: "80%",
                xs: "90%",
              },
              justifyContent: "space-between",
              //   maxWidth: "380px",
              borderRadius: "25px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            key={index}
          >
            <PodslistingSlider images={d.image} />

            <Stack
              gap={{ lg: "30px", xss: "15px", xs: "15px" }}
              pl={{ xss: "18px", xs: "20px" }}
            >
              <Stack
                p={{ md: "0 44px", sm: "0 44px" }}
                // width={"67%"}
                // sx={{ p: "2px 10px 10px 17px" }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={{ lg: "space-between", md: "none" }}
                display={{
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                  xss: "",
                  xs: "",
                }}
              >
                <Stack gap={"10px"}>
                  <Typography
                    fontSize={{
                      lg: "25px",
                      md: "20px",
                      xss: "23px",
                      xs: "21px",
                    }}
                    fontWeight={"bold"}
                    textAlign={"left"}
                  >
                    {d.title}
                  </Typography>
                  <Typography
                    fontSize={{ lg: "20px", xss: "14px", xs: "13px" }}
                    textAlign={"left"}
                  >
                    {d.address}
                  </Typography>
                  <Stack
                    direction={"row"}
                    gap={{ lg: 2, md: "22px", sm: "22px", xs: 1 }}
                    display={{
                      lg: "flex",
                      md: "flex",
                      sm: "flex",
                      xss: "flex",
                      xs: "flex",
                    }}
                    flexWrap={"wrap"}
                  >
                    {features.map((feature, index) => (
                      <Stack key={index} direction={"row"} gap={3}>
                        <Stack
                          justifyContent={"center"}
                          alignItems={"center"}
                          color={"grey"}
                          direction={"row"}
                          gap={1}
                        >
                          {" "}
                          {feature.icon}
                          <Typography
                            display={"flex"}
                            alignItems={"center"}
                            fontSize={{
                              lg: "1rem",
                              md: "0.9rem",
                              xss: "0.7rem",
                            }}
                          >
                            {feature.text}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
                <Stack
                  display={{ lg: "flex", xss: "none", xs: "none" }}
                  gap="8px"
                  direction="row"
                  sx={{
                    bgcolor: "#1D9740",
                    color: "white",
                    // width: { lg: "80px"},
                    borderRadius: "40px",
                    padding: { lg: "5px 15px 5px 15px", xs: "2px 7px 3px 7px" },
                    fontWeight: "bold",
                    height: "fit-content",
                    fontSize: {
                      lg: "26px",
                      md: "20px",
                      sm: "16px",
                      xss: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  {d.rating}
                  <StarIcon
                    sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
                  />
                </Stack>
              </Stack>
              <Stack
                p={{ lg: "0 40px" }}
                direction={"row"}
                justifyContent={{
                  lg: "start",
                  md: "center",
                  sm: "center",
                  xss: "center",
                }}
                gap={5}
              >
                <Button
                  onClick={() => {
                    handlecardClicks(d.slug);
                    window.scrollTo(0, 0);
                  }}
                  sx={{
                    bgcolor: "white",
                    color: "grey",
                    width: "130px",
                    border: "1px solid lightgrey",
                    borderRadius: "40px",
                    padding: "5px 10px 5px 10px",
                    fontWeight: "bold",
                  }}
                >
                  Learn more
                </Button>
                <Button
                  onClick={() => handleBookclicks(d.id)}
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    width: "130px",
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
            </Stack>
            {/* <Stack p={"0 18px 18px 18px"}>
            <Typography fontSize={10}>{d.title}</Typography>
            <Typography fontSize={10}>{d.body}</Typography>
          </Stack> */}
          </Stack>
        ))}
      </Stack>
      <Box
        width={"100%"}
        height={"80px"}
        display={{
          xs: "block",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      ></Box>
    </>
  );
};

export default PodsListing;
