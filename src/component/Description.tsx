import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import machine1 from "../data/Images/AT960.svg";
import machine2 from "../data/Images/GLOBAL9x8AdvantageEVO.svg";
import machine3 from "../data/Images/RomerArm7.svg";
import mockData from "../data/assetData.json";

const Description = () => {
  const img = [machine1, machine2, machine3];

  // Assuming you are using the first item in the JSON array
  const data = mockData[0];
  const timestamp = data?.HMISystem?.LastDeviceTelemetry?.Timestamp ?? null;

  // Convert timestamp to local time format if it exists
  const localTime = timestamp
    ? new Date(timestamp).toLocaleString()
    : "No telemetry data available";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 1,
        width: "100%",
        height: { xs: "50vh", md: "40vh" },
      }}
    >
      <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            height: "100%",
            mt: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
          direction={{ xs: "row", md: "column" }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={img[1]}
              alt="Machine"
              sx={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              p: ".5rem",
              margin: ".5rem",
            }}
          >
            <Card variant="outlined" sx={{ p: ".5rem" }} raised={true}>
              <Typography variant="h6" gutterBottom>
                {data.Name}
              </Typography>
              <Typography variant="body1">
                <strong>Asset Type:</strong> {data.AssetType}
              </Typography>
              <Typography variant="body1">
                <strong>Model:</strong> {data.Model}
              </Typography>
              <Typography variant="body1">
                <strong>Last Telemetry Timestamp:</strong>
                {localTime}
              </Typography>
              <Typography variant="body1">
                <strong>Description:</strong> {data.Description}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Description;
