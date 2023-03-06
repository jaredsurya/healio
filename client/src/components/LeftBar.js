import { Box, Typography } from '@mui/material'
import React from 'react'

const LeftBar = ({theme}) => {

// CANNOT SET BREAKPOINTS IN SX SETTINGS

  return (
    <Box flex={3} bgcolor="red" p={2} >
      LEFT BAR
      {/* Conditional rendering of Services/Healers/Map
      Switch Statement */}
    </Box>
  )
}

export default LeftBar
