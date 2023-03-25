import { Box, Button, Divider, Paper, Stack, styled, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SwitcherContext from "../../utils/switcherContext";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HealersServicesContext from "../../utils/healersServicesContext";

function SortedHealerService({size}) {
  const { feed, setFeed } = useContext(SwitcherContext);
  const { services, setServices, healers, setHealers } = useContext(HealersServicesContext);
  const [showServices, setShowServices] = useState(true)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    "&:hover": { cursor: "pointer" }
  }));

  function sortedServices(){
    return services.sort((a, b) => a.name.localeCompare(b.name)).map(service => (
      <Item key={service.id}>{service.name}</Item>
    ));
  }

  function sortedHealers(){
    return healers.sort((a, b) => a.full_name.localeCompare(b.full_name)).map(healer => (
      <Item key={healer.id}>{healer.full_name}</Item>
    ));
  }

  function onServicesClick(){
    setShowServices(true)
    //return jsx with list of services
  }

  function onHealersClick(){
    setShowServices(false)
    //return jsx with list of healers
  }


  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center">Click the buttons below to explore the featured services and who offers them.</Typography>
        <Box id="buttons" align="center" justifyItems={"space-between"}>
          <Button variant="outlined" color="secondary" onClick={() => onServicesClick()}>Services</Button>
          <AllInclusiveIcon style={{fontSize: "2rem", color: "#0e643e", verticalAlign: "middle", padding: "12px"}}/>
          <Button variant="outlined" color="secondary" onClick={() => onHealersClick()}>Healers</Button>
        </Box>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          { showServices ? sortedServices() : sortedHealers() }
          {/* display healers or services here */}
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box >
        <Box id="buttons" align="center" justifyItems={"space-between"}>
          <Button variant="outlined" color="secondary" onClick={() => onServicesClick()}>Services</Button>
          <AllInclusiveIcon onClick={() => setFeed("sortedhealerservice")} style={{fontSize: "2rem", color: "#0e643e", verticalAlign: "middle", padding: "12px"}}/>
          <Button variant="outlined" color="secondary" onClick={() => onHealersClick()}>Healers</Button>
        </Box>
        <Box height={"400px"} overflow="auto">
          <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={1}
          >
          { showServices ? sortedServices() : sortedHealers() }
          </Stack>
          {/* MAKE A STACK HERE THAT HAS A DIVIDER BETWEEN THEM. MAKE AVATARS FOR EACH HEALER THAT IS ASSOCIATED WITH A SERVICE, VICE VERSA */}
          {/* display healers or services here */}
        </Box>
      </Box>
    );
  }
}

export default SortedHealerService;
