import React from "react";
import ReactCardCarousel from "react-card-carousel";
import Pod1 from "../../assets/Pod1.png";
import Pod2 from "../../assets/Pod2.png";
import Pod3 from "../../assets/Pod3.png";

const CONTAINER_STYLE = {
  position: "relative",
  width: "100%",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

const CARD_STYLE = {
  height: "400px",
  width: "400px",
  paddingTop: "80px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "12px",
  textTransform: "uppercase",
  borderRadius: "10px",
  boxSizing: "border-box",
  position: "relative",
};

const IMAGE_STYLE = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};

const COLORS = ["#2D2D2D", "#FBD2A6", "#F7ABA9"]; // Add more colors as needed
const IMAGES = [Pod1, Pod2, Pod3]; // Add more image sources as needed

const MyCarousel = () => {
  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        {COLORS.map((color, index) => (
          <div key={index} style={{ ...CARD_STYLE, background: color }}>
            <img src={IMAGES[index]} alt="" style={IMAGE_STYLE} />
          </div>
        ))}
      </ReactCardCarousel>
    </div>
  );
};

export default MyCarousel;
