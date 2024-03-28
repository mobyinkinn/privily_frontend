import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import podsImg from "../../assets/podsImage.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";

const ProductSlider = () => {
    const features = [
      {
        icon: (
          <ChairRoundedIcon
            sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
          />
        ),
      },
      {
        icon: (
          <WifiRoundedIcon
            sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
          />
        ),
      },
      {
        icon: (
          <NotificationsOffRoundedIcon
            sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
          />
        ),
      },
    ];
    const navigate = useNavigate();
    const [Cards, setCards] = useState([]);
     const handlecardClicks = (slug) => {
       navigate(`/podsdetails/${slug}`);
     };
     useEffect(() => {
       const getCastingCallsdetails = async () => {
         try {
           const response = await axios.get("https://privily.co/api/allpods", {
             headers: {
               "Content-Type": "application/x-www-form-urlencoded",
             },
           });
           setCards(response.data.data);
           console.log("resp", response);
           console.log("Cards", response.data.data);
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       };

       getCastingCallsdetails();
     }, []);
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
  return (
    <Stack sx={{ width: { lg: "90%", xs: "93%" }, margin: "auto" }}>
      <Carousel responsive={responsive} className="hii">
        {Cards.map((d, index) => (
          <Card
            sx={{
              width: { lg: "90%", md: "30%", sm: "95%", xs: "95%" },
              //   maxWidth: "380px",
              borderRadius: "25px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            key={index}
            onClick={() => {
              handlecardClicks(d.slug);
              window.scrollTo(0, 0);
            }}
          >
            <Stack
              alignItems="center"
              spacing={2}
              p={{ lg: "10px", md: 2, sm: 2, xs: 1 }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <img
                  src={`https://privily.co/storage/podsimage/${d.featuredImage}`}
                  alt=""
                  className="Images-correct"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
              </Box>
            </Stack>
            <Stack sx={{ p: "2px 10px 10px 17px" }}>
              <Typography
                fontSize={{ lg: "24px", xs: "15px" }}
                fontWeight={"bold"}
                textAlign={"left"}
                gutterBottom
              >
                {d.title}
              </Typography>
              <Typography
                fontSize={{ lg: "17px", xs: "10px" }}
                textAlign={"left"}
                gutterBottom
              >
                {d.address}
              </Typography>
              <Stack
                direction={"row"}
                gap={{ lg: "30px", sm: "10px", xs: 1 }}
                display={"flex"}
              >
                {features.map((feature, index) => (
                  <Stack key={index} direction={"row"} gap={3}>
                    <Stack justifyContent={"center"} color={"grey"}>
                      {" "}
                      {feature.icon}
                    </Stack>
                  </Stack>
                ))}
                <Stack
                  gap="4px"
                  direction="row"
                  alignItems={"center"}
                  sx={{
                    bgcolor: "#1D9740",
                    color: "white",
                    // width: { lg: "80px"},
                    borderRadius: "40px",
                    padding: { lg: "5px 15px 5px 15px", xs: "2px 7px 3px 7px" },
                    fontWeight: "bold",
                    fontSize: {
                      lg: "26px",
                      md: "20px",
                      sm: "16px",
                      xss: "17px",
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
            </Stack>
            {/* <Stack p={"0 18px 18px 18px"}>
            <Typography fontSize={10}>{d.title}</Typography>
            <Typography fontSize={10}>{d.body}</Typography>
          </Stack> */}
          </Card>
        ))}
      </Carousel>
    </Stack>
  );
}

export default ProductSlider