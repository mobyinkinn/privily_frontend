import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../utils/Button";
import Vector from "../assets/ContactVector.svg"
const ContactUss = () => {
  return (
    <Stack bgcolor={"#FFF5F4"} direction={{ lg: "row", md: "column" }}>
      <Stack gap={3} p={"130px 80px 130px 80px"} width={"40%"}>
        {/* <Typography
          color={"#FE372F"}
          fontWeight={"bold"}
          variant="h4"
          width={"350px"}
        >
          Speak to a workplace Strategy Adviser
        </Typography>
        <Typography width={"500px"}>
          Chat to one of our experts regarding your workplace challenges and how
          Privily can help you manage your hybrid work strategy, simplify the
          booking process and provide an effortless technology solution to
          occupancy and collaboration.
        </Typography>
        <Typography>Submit the form to arrange a free call today.</Typography> */}
        <img src={Vector} alt="" />
      </Stack>
      <Stack
        bgcolor={"white"}
        borderRadius={"10px"}
        m={5}
        p={5}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Typography textAlign={"center"} variant="h4" fontWeight={"bold"}>
          Your Contact details ?
        </Typography>
        <form>
          <Typography p={1}>Name:</Typography>
          <input
            type="text"
            placeholder="Full Name"
            className="Input-fields"
          ></input>
          <Typography p={1}>Email Address:</Typography>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="Input-fields"
            // value={email}
            // onChange={(e) => setemail(e.target.value)}
          ></input>

          <Typography p={1}>Enter Phone Number:</Typography>
          <input
            type="number"
            placeholder="Phone Number"
            className="Input-fields"
          ></input>
          <Typography p={1}>Message:</Typography>
          <input
            type="text"
            placeholder="Message"
            className="Input-fields"
          ></input>

          <Stack alignItems={"center"} pt={3}>
            <Button
              //   onClick={GetRegester}
              sx={{
                bgcolor: "#FF1200",
                color: "white",
                width: "130px",
                borderRadius: "40px",
                padding: "5px 10px 5px 10px",
                fontWeight: "bold",
              }}
            >
              Get Connect
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default ContactUss;
