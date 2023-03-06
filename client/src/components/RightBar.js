import React from 'react'
import { Stack, Typography, Box } from '@mui/material'


function Quote () {
// Fetch for buddha quotes, https://buddha-api.com/api/random
  <Box>
    <Typography>I'm a quote. -Me</Typography>
  </Box>
}

// ADVERTISEMENT

function Ad () {
  return (
    <Box>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9083075129430387"
        crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-9083075129430387"
        data-ad-slot="8608052487"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </Box>
  )
}

const RightBar = ({theme}) => {
  return <Box flex={3} p={2} bgcolor="purple" >RIGHT BAR</Box>
  
  
  
  // return (
  //   <Box>
  //     <Stack>
  //       <Quote />
  //       <Ad />
  //     </Stack>
  //   </Box>
  // )
}

export default RightBar
