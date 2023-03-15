import { Box } from '@mui/material'
import React, { useContext } from 'react'
import SwitcherContext from '../../utils/switcherContext';

function Ad() {
  const { feed, setFeed } = useContext(SwitcherContext);

  return (
    <Box>
      ADVERTISEMENT
    </Box>
  )
}

export default Ad
