import React from "react";
import Header from "../component/Header";
import Description from "../component/Description";
import NavButton from "../component/NavButton";
import { Box } from "@mui/material";

interface HomeProps {
  objectId?: string;
}

const Home: React.FC<HomeProps> = ({ objectId }) => {
  return (
    <div style={styles.app}>
      <Header />
      <Box>
        <Box>
          <Description objectId={objectId} />
        </Box>
      </Box>
      <NavButton objectId={objectId}/>
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
