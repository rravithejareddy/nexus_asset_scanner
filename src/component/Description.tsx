import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import cmmImage from "../data/Images/Hexagon_CMM_MI_GLOBAL S_09x08_TOUCH_Right_Product_Photo.jpg";
import LTImage from "../data/Images/Leica-Absolute-Tracker-AT960-M.jpg";
import armImage from "../data/Images/Absolute-Arm-7-Axis-product-image.jpg";
import mockData from "../data/assetData.json";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Description = (props: any) => {
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
      case "CMM":
        return cmmImage;
      case "Tracker":
        return LTImage;
      case "Arm":
        return armImage;
      default:
        return null;
    }
  };

  const timestamp = data?.HMISystem?.LastDeviceTelemetry?.Timestamp ?? null;
  const localTime = timestamp
    ? new Date(timestamp).toLocaleString()
    : "No telemetry data available";

  const imageSrc = getImageForAssetType(data?.AssetType ?? "");

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "50vh" },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
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
              flexDirection: "column",
              justifyContent: "center",
              p: 2,
              textAlign: "left",
            }}
          >
            <Card variant="outlined" sx={{ p: 2, ml: 2 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {data?.Name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {[
                  { label: "Asset Type", value: data?.AssetType },
                  { label: "Model", value: data?.Model },
                  { label: "Last Telemetry Timestamp", value: localTime },
                  { label: "Description", value: data?.Description },
                  { label: "Service End Date", value: "2025-10-05" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      width: "100%",
                      mb: 1,
                      flexDirection: { xs: "row", md: "row" },
                    }}
                  >
                    <Box sx={{ flex: "1", textAlign: "left", pr: 2 }}>
                      <Typography variant="body1">
                        <strong>{item.label}:</strong>
                      </Typography>
                    </Box>
                    <Box sx={{ flex: "1", textAlign: "left" }}>
                      <Typography variant="body1">{item.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  sx={{
                    backgroundColor: "#a2d769",
                    fontWeight: "600",
                    borderRadius: "8px",
                  }}
                  href="https://support.hexagonmi.com/s/"
                  variant="contained"
                  endIcon={<ContactSupportIcon />}
                >
                  Contact Support
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Description;
