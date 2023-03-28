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

function WeblinksInput({ type, tempUser, weblinks, setWeblinks }) {
  const { user, setUser } = useContext(UserContext);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  function handleAddLink(e) {
    if (weblinks.length < 4) {
      fetch("/weblinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Link-Type": type,
        },
        body: JSON.stringify({ url: url, title: title }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((link) => {
            setWeblinks([...weblinks, link]);
          });
        } else {
          r.json().then((err) => alert(err.errors));
        }
      });
      //setWeblinks([...weblinks, { url: url }]);
      setUrl("");
      setTitle("")
      //console.log("eVal: ", e);
      console.log("weblinks: ", weblinks);
    }
  }

  // function handleDeleteLink(id) {
    
  //   const newLinks = [...weblinks];
  //   newLinks.splice(index, 1);
  //   setWeblinks(newLinks);
  // }

  function handleDeleteLink(id) {
    fetch(`/weblinks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.ok) {
          // update the state of weblinks to remove the deleted link
          setWeblinks(weblinks.filter((link) => link.id !== id));
        } else {
          r.json().then((err) => alert(err.errors));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="body2" paddingTop={"10px"}>Add a title and URL for up to 4 helpful weblinks below:</Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField
          margin="dense"
          id="title"
          label="Add a concise title for your link here, then . . ."
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flexGrow: 1, marginRight: "10px" }}
        />
        <TextField
          margin="dense"
          id="weblinks"
          label="add a URL here, then press + to the right."
          type="text"
          name="weblinks"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ flexGrow: 1 }}
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
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="column">
        {weblinks?.map((link, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography fontWeight={"bold"}>{link.title}. . . . . .</Typography>
            <Typography color={"blue"}>{link.url}</Typography>
            <IconButton
              onClick={() => handleDeleteLink(link.id)}
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
