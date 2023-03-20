import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import UserContext from "./userContext";

function WeblinksInput({ tempUser, weblinks, setWeblinks }) {
  const { user, setUser } = useContext(UserContext);
  const [url, setUrl] = useState('')

  function handleAddLink(e) {
    if (weblinks.length < 4) {
      setWeblinks([...weblinks, {url: url}]);
      setUrl('')
      console.log("eVal: ", e);
      console.log("weblinks: ", weblinks);
    }
  }

  function handleDeleteLink(index) {
    const newLinks = [...weblinks];
    newLinks.splice(index, 1);
    setWeblinks(newLinks);
  }

  return (
    <Box>
      <TextField
        margin="dense"
        id="weblinks"
        label="Helpful websites (including your own)"
        type="text"
        name="weblinks"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddLink(e);
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={(e) => handleAddLink(e)} color="secondary">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box display="flex" justifyContent="center" flexDirection="column">
        { weblinks?.map((link, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography color={"blue"}>{link.url}</Typography>
            <IconButton
              onClick={() => handleDeleteLink(index)}
              color="secondary"
            >
              <ClearOutlinedIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default WeblinksInput;
