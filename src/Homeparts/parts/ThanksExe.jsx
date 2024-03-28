import React, { useEffect } from 'react'
import { Stack, Typography } from "@mui/material";
import Right from "../../assets/Right.svg";
import { useState } from 'react';

const ThanksExe = ({ setThanksModal }) => {
    useEffect(() => {
      const handleCloseModal = (e) => {
        if (e.target.classList.contains("modalBackground")) {
          setThanksModal(false);
        }
      };

      window.addEventListener("click", handleCloseModal);

      return () => {
        window.removeEventListener("click", handleCloseModal);
      };
    }, [setThanksModal]);
  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{width:"280px"}}>
        <Stack textAlign={"Center"} alignItems={"center"} gap={2} p={5}>
          <img src={Right} alt="" style={{ width: "161px", height: "103px" }} />
          <Stack gap={1}>
            <Typography fontWeight={"bold"} variant="h4" color={"#3AA30D"}>
              Thank You!
            </Typography>
          </Stack>
          <Typography>
            Are company executive will contact you shortly
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

export default ThanksExe