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

  const handleClickOpen = () => {
    setShowFormDialog(true);
  };

  const handleClose = () => {
    setShowFormDialog(false);
  };

  function handleCancel(){
    setTempUser(user)
    handleClose()
  }
console.log(user)
  function handleDetailSubmit() {
    setTempUser({...tempUser, weblinks: weblinks})
    setUser({...user, weblinks: weblinks})
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        //setUser(data);
      })
    handleClose();
  }

  function handleChange(e){
    setTempUser({...tempUser, [e.target.name]: e.target.value})
  }

  return (
    <div>
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
          <AddressAutocomplete />
          <WeblinksInput tempUser={tempUser} />
          <Typography>
            Please type the biography of you as a healer here:
          </Typography>
          <QuillEditor />
          <WeblinksInput weblinks={weblinks} setWeblinks={setWeblinks} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleDetailSubmit}>Submit Details</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HealerModalButton;
