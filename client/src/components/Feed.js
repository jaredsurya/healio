import { Box, Typography } from '@mui/material'
import React from 'react'
import MyProfile from './MyProfile'

const Feed = ({theme}) => {
  return (
    <Box flex={7} bgcolor="#e5e9ef" p={2}>
      {/* SERVICES AND HEALERS DISPLAY */}
      <MyProfile />
    </Box>
  )
}

export default Feed
