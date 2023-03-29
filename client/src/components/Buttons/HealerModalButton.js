import {
  Box,
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import UserContext from "../../utils/userContext";
import AddressAutocomplete from "../../utils/AddressAutocomplete";
import QuillEditor from "../../utils/QuillEditor";
import WeblinksInput from "../../utils/WeblinksInput";

const HealerModalButton = () => {
  const { user, setUser } = useContext(UserContext);
  const [tempUser, setTempUser] = useState(user)
  const [showFormDialog, setShowFormDialog] = useState(false);
  const [weblinks, setWeblinks] = useState(tempUser.weblinks || [])
  const [bio, setBio] = useState(tempUser.bio)
  const [lat, setLat] = useState(tempUser.lat)
  const [lon, setLon] = useState(tempUser.lon)
  const [full_address, setFullAddress] = useState(tempUser.full_address)
  const type = "user"
  
  const handleClickOpen = () => {
    setShowFormDialog(true);
  };

  const handleClose = () => {
    setShowFormDialog(false);
  };

  function handleCancel(){
    setTempUser(user)
    setWeblinks(user.weblinks)
    setBio(user.bio)
    setLat("")
    setLon("")
    handleClose()
  }
// console.log(user)
let body = {...tempUser, bio: bio, lat: lat, lon: lon, full_address: full_address}
delete body.created_at
delete body.weblinks
//console.log("BODY", body)

function handleDetailSubmit() {
  // setTempUser({...tempUser, weblinks: weblinks})
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
        });
      } else {
        alert("error in HealerModalBTN");
        setTempUser(user)
      }
    });
    handleClose();
  }

  function handleChange(e){
    setTempUser({...tempUser, [e.target.name]: e.target.value})
  }

  return (
    <Box>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Edit My Healer Info
      </Button>
      <Dialog open={showFormDialog} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Healer Page Editor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add information for your healer page. This information is
            visible to all Healio users and helps potential clients align with
            your services:
          </DialogContentText>
          <TextField
            margin="dense"
            id="tel"
            label="Work Phone Number (XXX-XXX-XXXX)"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone_number"
            value={tempUser.phone_number}
            fullWidth
            onChange={handleChange}
          />
          <AddressAutocomplete setLat={setLat} setLon={setLon} setFullAddress={setFullAddress}/>
          <WeblinksInput type={type} tempUser={tempUser} weblinks={weblinks} setWeblinks={setWeblinks} />
          <Typography>
            Please type your healers biography below. Include anything that makes you stand out.
          </Typography>
          <QuillEditor bio={bio} setBio={setBio}/>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
          <Button variant="outlined" onClick={handleDetailSubmit}>Submit Healer Info</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HealerModalButton;
