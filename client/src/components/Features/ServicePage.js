import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React, { useContext, useState } from 'react'
import HealersServicesContext from '../../utils/healersServicesContext';
import Weblinks from './Weblinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ServicePage({id}) {
  const {services} = useContext(HealersServicesContext)
  const [expanded, setExpanded] = useState(false);
  let service = services.find((s) => id === s.id)

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
      <Box display="flex" position="relative" justifyContent="flex-end">
        <IconButton position="absolute">
          <EditOutlinedIcon color='primary' fontSize="large"/>
        </IconButton>
      </Box>
      <Typography variant='h3' gutterBottom align='center'>{service.name}</Typography>
      <Box sx={{width: "87%", margin: "0 auto"}}>
      <Typography >{service.description}</Typography>
      </Box>
      <Box className="accordions" paddingTop={3}>
      <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {service.name} Practicioners
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={"bold"}>
            ADD IN HEALER BUBBLES HERE
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
      <Weblinks links={service.weblinks}/>
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  )
}

export default ServicePage
