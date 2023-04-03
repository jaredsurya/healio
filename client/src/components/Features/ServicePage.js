import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useContext, useState, useEffect } from "react";
import HealersServicesContext from "../../utils/healersServicesContext";
import Weblinks from "./Weblinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserContext from "../../utils/userContext";
import { Add, Check, Favorite, FavoriteBorder } from "@mui/icons-material";

function ServicePage({ id }) {
  const { services, savedServices, setSavedServices, isAssociated, setIsAssociated } = useContext(HealersServicesContext);
  const { user } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  let service = services.find((s) => id === s.id);

  // HAVE TO SET the toggle plus or check to match whether the user and the service have been set (associated) before
  // NEED that to effect the boolean value of "isAssociated"

  // function adjustAssociated(){
  // }
  // console.log("SS", savedServices)
  // console.log("s",service)
  useEffect(() => {
    setIsAssociated(savedServices.some((s) => s.id === service.id))

  },[service, user])

  function handleAssociation() {
    if (!isAssociated) {
      console.log(isAssociated);
      fetch("/user_services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: service.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSavedServices(data);
          setIsAssociated(true);
        })
        .catch((err) => console.log(err));
    } else if (isAssociated) {
      fetch(`/user_services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setSavedServices(data)
          setIsAssociated(false)
        })
        .catch((err) => console.log(err));
    }
  }
  

  useEffect(() => {
    user.services.find((svc) => svc.id === id)
      ? setIsAssociated(true)
      : setIsAssociated(false);
  }, [user]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!service) {
    return (
      <Typography variant="h4" align="center">
        LOADING . . .
      </Typography>
    );
  }
  // INCLUDE button if user_type is healer for editing, then popup modal (dialog)
  return (
    <Box>
      <Box display="flex" position="relative" justifyContent="space-between">
        <Tooltip
          title={
            user.user_type === "visitor"
              ? isAssociated
                ? "Remove from Favorites"
                : "Save to Favorites"
              : isAssociated
              ? "Remove From My Services"
              : "Add to My Services"
          }
        >
          <IconButton position="absolute" onClick={handleAssociation}>
            {user.user_type === "visitor" ? (
              isAssociated ? (
                <Favorite fontSize="large" color="secondary" />
              ) : (
                <FavoriteBorder fontSize="large" color="secondary" />
              )
            ) : isAssociated ? (
              <Check fontSize="large" color="secondary" />
            ) : (
              <Add fontSize="large" color="primary" />
            )}{" "}
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit Page">
          <IconButton position="absolute">
            <EditOutlinedIcon color="primary" fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="h3" gutterBottom align="center">
        {service.name}
      </Typography>
      <Box sx={{ width: "87%", margin: "0 auto" }}>
        <Typography>{service.description}</Typography>
      </Box>
      <Box className="accordions" paddingTop={3}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {service.name} Practicioners
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontWeight={"bold"}>
              ADD IN HEALER BUBBLES HERE
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Helpful Web Links
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Weblinks links={service.weblinks} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default ServicePage;
