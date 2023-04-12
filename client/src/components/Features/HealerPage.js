import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";
import Weblinks from "./Weblinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserContext from "../../utils/userContext";
import HealerModalButton from "../Buttons/HealerModalButton";

function HealerPage({ id }) {
  const { healers, setRenderService } = useContext(HealersServicesContext);
  const { user } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  let healer = healers.find((h) => id === h.id);
  const navigate = useNavigate();

  useEffect(() => {
    setExpanded(false);
  }, [id]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleClick(id) {
    setRenderService(id);
    navigate(`/main/service/${id}`);
  }

  // WHEN I DELETE SERVICES FOR THE HEALER IN SAVEDINTERESTS, THE CHANGES AREN'T PERSISTING TO THE SVCS ACCORDION ON HEALER PAGE

  // console.log(healer);

  if (!id) {
    return (
      <Typography variant="h4" align="center">
        LOADING . . .
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">
        {healer.full_name}
      </Typography>
      <div
        style={{
          width: "84%",
          margin: "0 auto",
          paddingBottom: "8px",
          lineHeight: "1.5",
          fontSize: "23px",
          fontFamily: "georgia",
        }}
        dangerouslySetInnerHTML={{ __html: healer.bio }}
      />
      {user.email === healer.email ? (
        <Box align="center" p={3} paddingBottom={0}>
          <HealerModalButton />
        </Box>
      ) : null}
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
            <Typography sx={{ width: "75%", flexShrink: 0 }}>
              Healing Services Offered
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {healer.services.map((svc) => (
              <Chip
                key={svc.id}
                size="large"
                align="center"
                label={svc.name}
                variant="outlined"
                onClick={() => handleClick(svc.id)}
                sx={{
                  margin: "auto",
                  fontSize: 22,
                }}
              />
            ))}
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
            <Typography sx={{ width: "75%", flexShrink: 0 }}>
              Contact Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontWeight={"bold"}>
              Phone Number ~~ {healer.phone_number}
            </Typography>
            <Typography fontWeight={"bold"}>
              Address ~~ {healer.full_address}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "75%", flexShrink: 0 }}>
              Helpful Web Links
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Weblinks links={healer.weblinks} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default HealerPage;
