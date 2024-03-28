// import React, { useState } from "react";
// import { Rating } from "react-simple-star-rating";

// export function Ratings() {
//   const [rating, setRating] = useState(0);

//   // Catch Rating value
//   const handleRating = (rate: number) => {
//     setRating(rate);

//     // other logic
//   };
//   // Optinal callback functions
//   const onPointerEnter = () => console.log("Enter");
//   const onPointerLeave = () => console.log("Leave");
//   const onPointerMove = (value: number, index: number) =>
//     console.log(value, index);

//   return (
//     <div className="App">
//       <Rating
//         onClick={handleRating}
//         onPointerEnter={onPointerEnter}
//         onPointerLeave={onPointerLeave}
//         onPointerMove={onPointerMove}
//         /* Available Props */
//       />
//     </div>
//   );
// }

import { Stack } from "@mui/material";
import React, { useState } from "react";

const Ratings = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (count) => {
    setRating(count);
    onChange(count); // Pass the selected star count to the parent component
  };

  return (
    <Stack direction={"row"} justifyContent={"Center"}>
      {[1, 2, 3, 4, 5].map((count) => (
        <span
          key={count}
          onClick={() => handleStarClick(count)}
          style={{ cursor: "pointer",fontSize:"40px", color:"orange", }}
        >
          {count <= rating ? "★" : "☆"}
          
        </span>
      ))}
    </Stack>
  );
};

export default Ratings;
