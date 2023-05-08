import { Box, Chip, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SwitcherContext from "../../utils/switcherContext";
import HealersServicesContext from "../../utils/healersServicesContext";

function FeaturedHealer({ size }) {
  return (<Typography>Featured Healer: Stretch Goal, COMING SOON</Typography>)
  // const { feed, setFeed } = useContext(SwitcherContext);
  // const { healers } = useContext(HealersServicesContext);
  // const [featured, setFeatured] = useState([]);

  // useEffect(() => {
  //   const getRandomHealer = () => {
  //     const randomIndex = Math.floor(Math.random() * healers.length);
  //     const healer = healers[randomIndex];
  //     setFeatured(healer);
  //   };
  //   getRandomHealer();
  //   const interval = setInterval(getRandomHealer, 86400000); // runs every 10 seconds
  //   return () => clearInterval(interval);
  // }, [healers]);

  // if (size === "large") {
  //   return <Box>FEATURED HEALER</Box>;
  // } else {
  //   return (
  //     <Box onClick={() => setFeed("featuredhealer")}>
  //       {featured.length > 0 ? (
  //         <Typography variant="h5">~{featured.full_name}~</Typography>
  //       ) : (
  //         <Typography fontWeight={"bold"}>
  //           NO featured healer currently
  //         </Typography>
  //       )}
  //       {featured.services.map((svc) => (
  //         <Chip key={svc.id}>{svc.name}</Chip>
  //       ))}
  //     </Box>
  //   );
  // }
}

export default FeaturedHealer;
