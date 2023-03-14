import { Box, Typography } from '@mui/material'
import React from 'react'
import AddressAutocomplete from '../../utils/AddressAutocomplete'
import ProfileDetailsDisplay from '../Features/ProfileDetailsDisplay'
import MyProfile from '../Buttons/AccountModalBtn'
import Welcome from '../Features/Welcome'
import Quote from '../Features/Quote'

const Feed = ({theme}) => {
  let size = "large"
  return (
    <Box flex={7} bgcolor="#f7f9ff" p={2} height='calc(100vh - 108px)' overflow={"auto"}>
      {/* SERVICES AND HEALERS DISPLAY */}
      {/* <AddressAutocomplete /> */}
      <ProfileDetailsDisplay size={size}/>
      {/* <Welcome size={size}/>
      <Quote size={size}/> */}
    </Box>
  )
}

export default Feed
