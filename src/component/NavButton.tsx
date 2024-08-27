import React from "react";
import { Grid, Button, Box } from "@mui/material";
import Logo from "../data/Images/hexagon-logo.svg";

const NavButton = (props:any) => {
  const appLink = ["App 1", "App 2", "App 3"];
  console.log("NavButton Props: " + props.objectId);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%", mt: "1rem" }}
      direction={{ xs: "row", md: "row" }}
    >
      {appLink.map((nav, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            sx={{
              margin: "0.5rem",
              width: { xs: "80%", sm: "60%", md: "50%" },
              height: { xs: "80px", sm: "100px", md: "120px" },
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Machine"
              sx={{ height: "30px", width: "30px", mb: 1 }}
            />
            <Box>{nav}</Box>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavButton;
