import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo.png";
import { Box, Stack, Typography } from '@mui/material';
import popup from "../../assets/HomePop.svg"
import Button from '../../utils/Button';
const HomePopUp = () => {
    const navigate = useNavigate();
    const handleJumpin = ()=>{
navigate("/home")
    }
  return (
    <Stack gap={1.5} pt={17}>
      <Link to={""} style={{ textAlign: "center" }}>
        <img src={logo} alt="" style={{ width: "173px", height: "50px" }} />
      </Link>
      <Box textAlign={"Center"}>
        <img src={popup} alt="" />
      </Box>
      <Stack>
        <Typography fontWeight={"bold"} variant="h3" textAlign={"center"}>
          WELCOME
        </Typography>
        <Typography fontWeight={"bold"} variant="h6" textAlign={"center"}>
          to the future of productivity
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Button
          onClick={() => {
             handleJumpin()
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
          Jump In
        </Button>
      </Stack>
    </Stack>
  );
}

export default HomePopUp