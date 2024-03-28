import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import bannerCor from "../../assets/Corporatesvg.jpg";
import Button from "../../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CorModal from "./CorModal";
import ThanksExe from "./ThanksExe";

const Corporate = () => {
  const [CormodalOpen, setCorModalOpen] = useState(false);
  const [ThanksModal, setThanksModal] = useState(false);
const openCorModal = () => {
  setCorModalOpen(true);
  setThanksModal(false); // Ensure ThanksModal is closed when CorModal opens
};
  return (
    <Stack>
      <Stack
        p={{
          lg: "50px 80px 50px 80px",
          md: "30px 57px 21px 57px",
          sm: "30px 60px 29px 60px",
          xs: "30px 20px 10px 20px",
        }}
        position={"relative"}
      >
        <img src={bannerCor} alt="" />
        <Button
          endIcon={<ArrowForwardIosRoundedIcon color="white" />}
          // onClick={() => {
          //   setCorModalOpen(true);
          // }}
          onClick={openCorModal}
          sx={{
            display: "flex",
            color: "white",
            bgcolor: "#FE372F",
            position: "absolute",
            width: "fit-content",
            p: 2,
            left: "50%",
            top: "55%",
            transform: "translateX(-50%)",
            // right: { xs: 20, sm: 30, md: 400, lg: 600 },
            // bottom: { xs: 2, sm: 65, md: 250, lg: 350, xl: 20 },
            fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "20px" },
            height: { xs: "20px", sm: "35px", md: "44px" },
            fontWeight: "bold",
          }}
        >
          Corporate pods
        </Button>
        {/* {CormodalOpen && <CorModal setCorModalOpen={setCorModalOpen} />} */}
        {CormodalOpen && (
          <CorModal
            setCorModalOpen={setCorModalOpen}
            setThanksModal={setThanksModal}
          />
        )}
        {ThanksModal && <ThanksExe setThanksModal={setThanksModal} />}
        <Typography
          position={"absolute"}
          bgcolor={"white"}
          width={"60%"}
          p={2}
          left={"19%"}
          bottom={"26%"}
          transform={"translateX(-50%)"}
          borderRadius={"20px"}
          fontSize={"16px"}
          display={{ lg: "block", md: "none", sm: "none", xs: "none" }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
      </Stack>
      <Box
        width={"100%"}
        height={"100px"}
        display={{
          xs: "block",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      ></Box>
    </Stack>
  );
};

export default Corporate;
