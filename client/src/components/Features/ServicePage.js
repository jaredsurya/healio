import { Box, IconButton, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React, { useContext } from 'react'
import HealersServicesContext from '../../utils/healersServicesContext';
import Weblinks from './Weblinks';

function ServicePage({id}) {
  const {services} = useContext(HealersServicesContext)
  
  let service = services.find((s) => id === s.id)

  //console.log(service)
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
      <Weblinks links={service.weblinks}/>
    </Box>
  )
}

export default ServicePage
