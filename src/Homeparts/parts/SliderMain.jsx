import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { news } from "./dummydata"
import Button from "../../utils/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MyPod from "../../assets/podsImage.png"
const SliderMain = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      {news.map((val, index) => (
        <Box
          key={val.id}
          sx={{
            minWidth: { xs: "95vw", sm: "45vw", md: "26vw" },
          }}
          px={{ xs: 1, md: 2 }}
        >
          <Box
            sx={{
              minWidth: "100%",
              height: "437px",
              zIndex: "0",
              borderRadius: "30px",
              border: "1px solid #dbdbd9",
              "&:hover": {
                border: "1px solid #ffcd00",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "200px",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"230px"}
                width={"100%"}
              >
                <img
                  src={MyPod}
                  alt="First Image"
                  height={"230px"}
                  style={{
                    position: "relative",
                    zIndex: 0,
                    borderRadius:"30px 30px 0 0"
                  }}
                />
              </Box>
              <Stack p={4}>
                <Box display="flex" flexDirection="column" rowGap="19px">
                  <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                    <Box display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <CalendarMonthOutlinedIcon sx={{ color: "#ffcc00" }} />
                      <Typography
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        color={"grey"}
                      >
                        {val.date}
                      </Typography>
                    </Box>
                    <Typography fontWeight="bold" fontSize={"18px"}>
                      {val.Title}
                    </Typography>
                    <Typography
                      fontSize={"14.5px"}
                      color={"grey"}
                      // lineHeight={1.5}
                      letterSpacing={"0.3px"}
                    >
                      {val.des}
                    </Typography>
                   
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SliderMain;
