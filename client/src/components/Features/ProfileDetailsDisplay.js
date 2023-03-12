import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import UserContext from '../../utils/userContext'
import ImageUploadBox from '../ImageUploadBox'

const ProfileDetailsDisplay = () => {
  const { user, setUser } = useContext(UserContext);



  const date = new Date(user.created_at);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
  return (
    <Box align="center">
      <Typography variant="h5" align="center" gutterBottom style={{ textDecoration: 'underline' }}>Account Details:</Typography>
      <Box><ImageUploadBox /></Box>
        <Box>
          <Typography variant="h4">~{user.full_name}~</Typography>
          <Typography variant="h6">User-type: {user.type}</Typography>
          <Typography variant="h6">
            Healio member since: {formattedDate}
          </Typography>
          {user.location ? <Typography variant="h6">
            Home Zip Code: {user.location}
          </Typography> : null }
          <Typography variant="h6">
            Promotional/inspirational emails:{" "}
            {user.allow_email ? "Allowed" : "Denied"}
          </Typography>
        </Box>
        <Box id="buttons"></Box>
    </Box>
  )
}

export default ProfileDetailsDisplay
