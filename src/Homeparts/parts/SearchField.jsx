import { Stack } from '@mui/material'
import React, { useState } from 'react'
import BannerModal from '../BannerModal';
// import SearchIcon from "../../assets/Search.svg"
const SearchField = () => {
  const [BannermodalOpen, setBannerModalOpen] = useState(false);

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      pt={1}
      display={{ xs: "flex", sm: "none", md: "none", lg: "none" }}
    >
      <input
        type="text"
        placeholder="Search the Pods"
        className="Pods"
        onClick={() => setBannerModalOpen(true)}
        readOnly
      />
      {BannermodalOpen && <BannerModal setOpenModal={setBannerModalOpen} />}
    </Stack>
  );
}

export default SearchField