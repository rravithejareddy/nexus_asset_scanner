import React from "react";
import Header from "../component/Header";
import Description from "../component/Description";
import NavButton from "../component/NavButton";
import { Box } from "@mui/material";

const Home = () => {
  const handleQRScannerClick = () => {
    // Add QR Scanner functionality here
  };

  const handleOpenAppClick = () => {
    // Add Open App functionality here
  };

  return (
    <div style={styles.app}>
      <Header />
      <Box>
        <Box>
          <Description />
        </Box>
      </Box>
      <NavButton />
    </div>
  );
};

const styles = {
  app: {
    maxWidth: "100%",
    margin: "0 auto",
    paddinBottom: ".25rem",
  },
};
export default Home;
