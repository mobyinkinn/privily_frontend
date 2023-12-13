import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const Button = styled(MuiButton)({
  width: 200,
  height: 60,
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
