import { Box, Typography } from '@mui/material'
import React from 'react'
import AddressAutocomplete from '../Features/AddressAutocomplete'
import MyProfile from '../MyProfile'

const Feed = ({theme}) => {
  return (
    <Box flex={7} bgcolor="#f7f9ff" p={2}>
      {/* SERVICES AND HEALERS DISPLAY */}
      {/* <AddressAutocomplete /> */}
      <MyProfile />
    </Box>
  )
}

export default Feed
