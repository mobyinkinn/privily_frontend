import React from "react";
import { Stack, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomFaq = ({ data }) => {
  const [expanded, setExpanded] = React.useState(null);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Stack
      p={{
        lg: "24px 130px 24px 130px",
        md: "24px 130px 24px 130px",
        sm: "20px 90px 20px 90px",
        xs: "40px",
      }}
    >
      {data.rows.map((row, index) => (
        <Stack
          key={index}
          sx={{
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            padding="11px 11px 11px 0"
            onClick={() => handleExpand(index)}
            sx={{ cursor: "pointer" }}
          >
            <Stack>
              <Typography
                fontSize={{ lg: "35px", md: "30px", sm: "25px", xs: "20px" }}
                fontWeight="bold"
              >
                {row.title}
              </Typography>
              {row.arrowIcon && (
                <Typography color="grey">{row.arrowIcon}</Typography>
              )}
            </Stack>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Stack>
          <Collapse in={expanded === index}>
            <Stack padding="16px">
              {typeof row.content === "string" ? (
                <Typography>{row.content}</Typography>
              ) : (
                <div>{row.content}</div>
              )}
            </Stack>
          </Collapse>
        </Stack>
      ))}
    </Stack>
  );
};

export default CustomFaq;
