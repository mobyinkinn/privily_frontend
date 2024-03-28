import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";
import "./login.css";
import axios from "axios";
const Login = () => {
  const [activebtn, setActivebtn] = useState(1);
  const [email, setemail] = useState("");
  const [username, setusername] = useState("")
  const buttonData = [
    { label: "Login", value: 1, hoverBorderRadius: "20px 0 0 0" },
    { label: "Sign up", value: 2, hoverBorderRadius: "0" },
  ];
  const handleupperclicks = (stepIndex) => {
    if (stepIndex > activebtn + 1) {
      console.log("You can't skip steps.");
      return;
    }

    if (stepIndex === activebtn - 1) {
      // If moving backward to a previous step, allow it without further validation
      setActivebtn(stepIndex);
      return;
    }
    if (activebtn === 1) {
      setActivebtn(stepIndex);
    } else if (activebtn === 2) {
      setActivebtn(stepIndex);
    }
  };
  const GetRegester = async () => {
    try {
      let res = await axios.post(
        "https://privily.co/php-api/Pods%20Details/register_form",
        {
          email: "sd",
          name: "jatin",
          phone_number: 9829292929,
          password: 1234,
        }
      );

    } catch (error) {
      //alert
      console.log(error);
    }
  };
  return (
    <Stack width={"425px"} height={"700px"} justifyContent={"end"}>
      <Stack>
        <Stack
          height={"57px"}
          bgcolor={"#F7F5FF"}
          borderBottom={"1px solid #CEC1FF"}
        >
          <Stack direction={"row"}>
            {buttonData.map((button) => (
              <Button
                key={button.value}
                sx={{
                  width: "223px",
                  height: "57px",
                  textTransform: "none",
                  backgroundColor:
                    activebtn === button.value ? "#DFD7FE" : "none",
                  color: activebtn === button.value ? "black" : "grey",
                  borderRadius:
                    activebtn === 1
                      ? "0px"
                      : activebtn === 2
                      ? "0px"
                      : "0px 0px 0px 0px",
                  "&:hover": {
                    color: activebtn === button.value ? "black" : "grey",
                    backgroundColor:
                      activebtn === button.value ? "#DFD7FE" : "none",
                    transition: "none",
                    borderRadius:
                      activebtn === button.value
                        ? button.hoverBorderRadius
                        : "0px",
                  },

                  transition: "none",
                  fontSize: "16px",
                  fontWeight: activebtn === button.value ? 600 : 400,
                }}
                onClick={() => handleupperclicks(button.value)}
              >
                <Box
                  width={"24px"}
                  height={"24px"}
                  borderRadius={"50%"}
                  bgcolor={"white"}
                  mb={0.1}
                  mr={1}
                >
                  {button.value}
                </Box>
                {button.label}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Stack>
          {activebtn === 1 && (
            <>
              <Typography p={1}>Email Address:</Typography>
              <input
                type="text"
                placeholder="Email"
                className="Input-fields"
              ></input>
              <Typography p={1}>Password:</Typography>
              <input
                type="password"
                placeholder="Enter Password"
                className="Input-fields"
              ></input>
              <Stack alignItems={"center"} pt={3}>
                <Button
                  type="submit"
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    width: "130px",
                    borderRadius: "40px",
                    padding: "5px 10px 5px 10px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </>
          )}
          {activebtn === 2 && (
            <>
              <Typography p={1}>Name:</Typography>
              <input
                type="text"
                placeholder="Full Name"
                className="Input-fields"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              ></input>
              <Typography p={1}>Email Address:</Typography>
              <input
                type="text"
                placeholder="Email"
                className="Input-fields"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></input>

              <Typography p={1}>Password:</Typography>
              <input
                type="password"
                placeholder="Enter Password"
                className="Input-fields"
              ></input>
              <Typography p={1}>Enter Mobile Number:</Typography>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                className="Input-fields"
              ></input>

              <Stack alignItems={"center"} pt={3}>
                <Button
                  type="submit"
                  // onClick={GetRegester}
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    width: "130px",
                    borderRadius: "40px",
                    padding: "5px 10px 5px 10px",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Button>
              </Stack>
              <Typography display={"flex"} justifyContent={"center"} pt={2}>
                Already have a Privily Account?{" "}
                <span
                  className="New-register"
                  onClick={() => {
                    setActivebtn(1);
                  }}
                >
                  Log in
                </span>
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
