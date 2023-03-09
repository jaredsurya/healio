import { Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../utils/userContext";

function userForm (){
  // user form for editing data goes here, including file uploader for images
<input type="file" name="user[avatar]" id="user_avatar"></input>
}

const MyProfile = () => {
  const { user, setUser } = useContext(UserContext);

  
  return (
    <div>
      {/* the below typography needs to be set properly so text grows and shrinks with viewwindow changes */}
      <Typography variant="h2" whiteSpace='nowrap' fontSize='clamp(1.5rem, 4vw, 4rem)' maxWidth={'100%'}>{user.full_name}</Typography>
      
      {/* make a responsive form that edits the user data. on button click, toggle between edit and view(where data is normally populated in full) */}
    </div>
  )
}

export default MyProfile
