import { Stack } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from "../../assets/Search.svg"
const SearchField = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"Center"} pt={1} display={{xs:"flex",sm:"none",md:"none",lg:"none"}}>
      <input type="text" placeholder="Search the Pods" className="Pods" />
      <img
        src={SearchIcon}
        alt=""
        style={{
          position: "absolute",
          left: "30px",
          top: "4.1%",
          transform: "translateY(-50%)",
        }}
      />
    </Stack>
  );
}

export default SearchField