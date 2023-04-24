import {
  Box,
  Button,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import SwitcherContext from "../../utils/switcherContext";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import HealersServicesContext from "../../utils/healersServicesContext";
import { useNavigate } from "react-router-dom";

function SortedHealerService({ size }) {
  const { setFeed } = useContext(SwitcherContext);
  let navigate = useNavigate()
  const {
    services,
    healers,
    setRenderHealer,
    setRenderService,
  } = useContext(HealersServicesContext);
  const [showServices, setShowServices] = useState(true);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1.3),
    textAlign: "center",
    boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.3)",
    color: theme.palette.text.primary,
    "&:hover": { cursor: "pointer" },
    display: "inline-block",
    fontSize: "16pt",
  }));

  function sortedServices() {
    return services
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((service) => (
        <Box key={service.id} p={.3} display="inline-block">
          <Item onClick={() => showService(service.id)}>{service.name}</Item>
        </Box>
      ));
  }

  function showService(id){
    setRenderService(id)
    navigate(`/main/service/${id}`)
  }

  function sortedHealers() {
    return healers
      .sort((a, b) => a.full_name.localeCompare(b.full_name))
      .map((healer) => (
        <Box key={healer.id} p={.3} display="inline-block">
          <Item onClick={() => showHealer(healer.id)}>{healer.full_name}</Item>
        </Box>
      ));
  }

  function showHealer(id){
    setRenderHealer(id)
    navigate(`/main/healer/${id}`)
  }

  function onServicesClick() {
    setShowServices(true);
  }

  function onHealersClick() {
    setShowServices(false);
  }

  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center">
          Click the buttons below to explore the featured services and who
          offers them.
        </Typography>
        <Box id="buttons" align="center" paddingTop={2} paddingBottom={2} justifyItems={"space-between"}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onServicesClick()}
            size="large"
            style={{ borderWidth: showServices ? '4px' : '1px' }}
          >
            Services
          </Button>
          <AllInclusiveIcon
            style={{
              fontSize: "2.8rem",
              color: "#0e643e",
              verticalAlign: "middle",
              padding: "12px",
            }}
          />
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => onHealersClick()}
            style={{ borderWidth: showServices ? '1px' : '4px' }}
          >
            Healers
          </Button>
        </Box>
        <Stack
          direction="column"
          spacing={1.4}
          sx={{ textAlign: "center" }}
        >
          {showServices ? sortedServices() : sortedHealers()}
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box id="buttons" align="center" justifyItems={"space-between"}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onServicesClick()}
            style={{ borderWidth: showServices ? '3px' : '1px' }}
          >
            Services
          </Button>
          <AllInclusiveIcon
            onClick={() => setFeed("sortedhealerservice")}
            style={{
              fontSize: "2rem",
              color: "#0e643e",
              verticalAlign: "middle",
              padding: "12px",
              cursor: "pointer"
            }}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onHealersClick()}
            style={{ borderWidth: showServices ? '1px' : '3px' }}
          >
            Healers
          </Button>
        </Box>
        <Box height={"332px"} overflow="auto">
          <Stack
            direction="column"
            spacing={0.4}
            sx={{ textAlign: "center" }}
          >
            {showServices ? sortedServices() : sortedHealers()}
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default SortedHealerService;
