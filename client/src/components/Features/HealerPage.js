import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";
import Weblinks from "./Weblinks";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function HealerPage({ id }) {
  const {healers} = useContext(HealersServicesContext)
  const [expanded, setExpanded] = useState(false);
  let healer = healers.find((h) => id === h.id)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
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
        style={{ width: "87%", margin: "0 auto" }}
        dangerouslySetInnerHTML={{ __html: healer.bio }}
      />
      <Box className="accordions" paddingTop={3}>
      <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Healer Contact Info
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
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Helpful Web Links
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
      <Weblinks links={healer.weblinks}/>
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  );
}

export default HealerPage;
