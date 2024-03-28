import React from "react";
import Right from "../assets/Right.svg";
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Redirect to the home page after 3 seconds
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [navigate]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Stack>
          <Stack textAlign={"Center"} alignItems={"center"} gap={2}>
            <img
              src={Right}
              alt=""
              style={{ width: "161px", height: "103px" }}
            />
            <Stack gap={1}>
              <Typography fontWeight={"bold"} variant="h4">
                We have sent you an message on mail
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
               Kindly check !!!
              </Typography>
            </Stack>
            
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Confirmation;
