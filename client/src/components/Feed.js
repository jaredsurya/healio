import { Box, Typography } from '@mui/material'
import React from 'react'
import AutocompleteComponent from './AutocompleteComponent'
import MyProfile from './MyProfile'

const Feed = ({theme}) => {
  return (
    <Box flex={7} bgcolor="#f7f9ff" p={2}>
      {/* SERVICES AND HEALERS DISPLAY */}
      <AutocompleteComponent />
      {/* <MyProfile /> */}
    </Box>
  )
}

export default Feed
