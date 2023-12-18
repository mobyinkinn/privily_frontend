import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const Button = styled(MuiButton)({
  
  color: "black",
  backgroundColor: "white",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 0,
  textTransform: "none",
  borderRadius:"50px",

  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

export default Button;


// import { Button as MuiButton } from "@mui/material";
// import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
// import { styled } from "@mui/system";

// const CustomButton = styled(MuiButton)({
//   width: 200,
//   height: 60,
//   color: "black",
//   backgroundColor: "white",
//   paddingLeft: 5,
//   paddingRight: 5,
//   borderRadius: "50px", // Fixed typo here, changed from `borderRadius: 0` to `borderRadius: "50px"`
//   textTransform: "none",

//   "&:hover": {
//     backgroundColor: "white",
//     color: "black",
//   },
// });

// const ButtonWithIcon = () => {
//   return (
//     <CustomButton endIcon={<ArrowForwardIosRoundedIcon />}/>
     
//   );
// };

// export default ButtonWithIcon;
