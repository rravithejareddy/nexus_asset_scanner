import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import { Grid } from "@mui/material";
import MAMLogo from "../data/Images/MAMLogo.png";
import MRLogo from "../data/Images/MetrologyReportingLogo.svg";
import MMLogo from "../data/Images/MetrologyMentorlogo.svg";
import mockData from "../data/assetData.json";


const NavButtonLayout = (props:any) => {
  const [data, setData] = useState<any>(null);
  const {objectId} = props;
  let MAMLink = `https://nexus.hexagon.com/metrology-asset-manager/assetDetail/${objectId}`;

  useEffect(() => {
    if (objectId) {
      const item = mockData.find((data) => data.ObjectID === objectId);
      setData(item || null);
    }
  }, [objectId]);

  console.log(" Data in navbuttonlayout: ", JSON.stringify(data));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Grid item xs={4} sm={4} md={3}>
        <NavButton
          background={MAMLogo}
          label="Metrology Asset Manager"
          url={MAMLink}
        />
      </Grid>
      <Grid item xs={4} sm={4} md={3}>
        <NavButton
          background={MRLogo}
          label="Metrology Reporting"
          url="https://example.com/page2"
        />
      </Grid>
      {data?.AssetType !== 'Tracker' || data?.AssetType !== 'Arm' && <Grid item xs={4} sm={4} md={3}>
        <NavButton
          background={MMLogo}
          label="Metrology Mentor"
          url="https://dev.nexus.hexagon.com/mm/app/hardwareSelectionTool?hOperation=editMachine&mGuid=32f0de0c-7447-4bb1-818e-42933475ccb1&mName=HIC_GLB_C_Chr&hMaxMachines=10"
        />
      </Grid>}
    </Grid>
  );
};

export default NavButtonLayout;
