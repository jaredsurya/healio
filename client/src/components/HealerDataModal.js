import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import UserContext from "../utils/userContext";

const HealerDataModal = () => {
  const { user, setUser } = useContext(UserContext);
  const [tempUser, setTempUser] = useState(user)
  const [showFormDialog, setShowFormDialog] = useState(false);
  
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

  function handleDetailSubmit() {
    setUser(tempUser)
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
      <Dialog open={showFormDialog} onClose={handleClose}>
        <DialogTitle>Healer Page Editor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add information to your healer page. This information will be visible to all Healio users:
          </DialogContentText>
          <TextField
            margin="dense"
            id="tel"
            label="Work Phone Number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone_number"
            value={tempUser.phone_number}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address (Required)"
            type="email"
            name="email"
            value={tempUser.email}
            fullWidth
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            margin="dense"
            id="zip"
            label="Home Zip Code"
            type="number"
            name="location"
            value={tempUser.location}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="allow_email"
                checked={tempUser.allow_email}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Allow promotional and inspirational emails."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleDetailSubmit}>Submit Details</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HealerDataModal;
