import { Stack, Typography } from '@mui/material'
import React from 'react'
import logo from "../assets/Logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Stack justifyContent={"center"} p={3}>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Link to={"/"} style={{ paddingRight: "200px" }}>
          <img src={logo} alt="" style={{ width: "173px", height: "50px" }} />
        </Link>
        <Stack direction={"row"} gap={9} alignItems={"center"}>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              About us
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Pods Discovery
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Booking
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              For Corporate
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar