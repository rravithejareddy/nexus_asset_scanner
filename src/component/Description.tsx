import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import machine1 from "../data/Images/AT960.svg";
import machine2 from "../data/Images/GLOBAL9x8AdvantageEVO.svg";
import machine3 from "../data/Images/RomerArm7.svg";
import cmmImage from "../data/Images/Hexagon_CMM_MI_GLOBAL S_09x08_TOUCH_Right_Product_Photo.jpg";
import LTImage from "../data/Images/Leica-Absolute-Tracker-AT960-M.jpg";
import armImage from "../data/Images/Absolute-Arm-7-Axis-product-image.jpg";

import mockData from "../data/assetData.json";

const Description = (props:any) => {
  // const fixedObjectID = '3ca985c0-9a87-43a8-af1f-6fe89a65f41a';
  console.log("Object Id in Description : " + props.objectId);
  const URLObjectId = props.objectId;

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    if (URLObjectId) {
      const item = mockData.find((data) => data.ObjectID === URLObjectId);
      setData(item || null);
    }
  }, [URLObjectId]);

  const getImageForAssetType = (assetType: string) => {
    switch (assetType) {
      case 'CMM':
        return cmmImage;
      case 'Tracker':
        return LTImage;
      case 'Arm':
        return armImage;
      default:
        return null;
    }
  };

  const timestamp = data?.HMISystem?.LastDeviceTelemetry?.Timestamp ?? null;
  const localTime = timestamp
    ? new Date(timestamp).toLocaleString()
    : "No telemetry data available";

    const imageSrc = getImageForAssetType(data?.AssetType ?? '');

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
            {imageSrc && (
              <Box
                component="img"
                src={imageSrc}
                alt="Asset"
                sx={{ maxHeight: 200, maxWidth: 200 }}
              />
            )}
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "flex-end" },
              justifyContent: { xs: "center", md: "flex-start" },
              p: ".5rem",
              margin: ".5rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Card variant="outlined" sx={{ p: ".5rem" }} raised={true}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {data?.Name}
              </Typography>
              <Grid container spacing={1}>
                {[
                  { label: "Asset Type", value: data?.AssetType },
                  { label: "Model", value: data?.Model },
                  { label: "Last Telemetry Timestamp", value: localTime },
                  { label: "Description", value: data?.Description },
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={6} sx={{ textAlign: "right", pr: 2 }}>
                      <Typography variant="body1">
                        <strong>{item.label}:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "left" }}>
                      <Typography variant="body1">{item.value}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Description;
