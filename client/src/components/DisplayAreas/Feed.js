import { Box, Typography } from '@mui/material'
import React from 'react'
import AddressAutocomplete from '../Features/AddressAutocomplete'
import ProfileDetailsDisplay from '../Features/ProfileDetailsDisplay'
import MyProfile from '../Buttons/AccountModalBtn'

const Feed = ({theme}) => {
  return (
    <Box flex={7} bgcolor="#f7f9ff" p={2}>
      {/* SERVICES AND HEALERS DISPLAY */}
      {/* <AddressAutocomplete /> */}
      {/* <MyProfile /> */}
      <ProfileDetailsDisplay/>
    </Box>
  )
}

export default Feed
