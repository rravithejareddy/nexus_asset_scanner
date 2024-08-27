import React from "react";
import { Box, Typography } from "@mui/material";

interface Buttons {
  background: string;
  label: string;
  url: string;
}

const NavButton: React.FC<Buttons> = (props) => {
  const { background, label, url } = props;
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="null"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        mt: 4,
      }}
    >
      <Box
        component="img"
        src={background}
        alt={label}
        sx={{
          height: "6rem",
          width: "6rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow:
            "rgba(60, 64, 67, 0.8) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
          borderRadius: "30px",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          },
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onClick={handleClick}
      />
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          mt: 1,
          color: "black",
          textAlign: "center",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default NavButton;
