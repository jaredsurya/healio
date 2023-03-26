import { Typography } from '@mui/material';
import React from 'react'

function ServicePage({service}) {
  console.log(service)

  if (!service) {
    return (
      <Typography variant="h4" align="center">
        LOADING . . .
      </Typography>
    );
  }

  return (
    <div>
      
    </div>
  )
}

export default ServicePage
