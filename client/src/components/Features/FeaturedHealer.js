import { Box } from '@mui/material'
import React, { useContext } from 'react'
import SwitcherContext from '../../utils/switcherContext';

function FeaturedHealer(size) {
  const { feed, setFeed } = useContext(SwitcherContext);

  if(size === "large") {
  return (
    <Box>
      FEATURED HEALER
    </Box>
  )
  } else {
    return (
      <Box onClick={() => setFeed("featuredhealer")}>
        FEATURED HEALER,
        avatar,
        specializes in
      </Box>
    )
  }
}

export default FeaturedHealer
