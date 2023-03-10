import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useContext, useCallback, useState } from "react";
import UserContext from "../../utils/userContext";
import HealerDataModal from "./HealerModalButton";

const AccountModalBtn = () => {
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
      <div align="center">
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Edit Details
        </Button>
        <Dialog open={showFormDialog} onClose={handleClose}>
          <DialogTitle>Edit Account Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please edit your account details below:
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Full Name"
              type="text"
              name="full_name"
              value={tempUser.full_name}
              fullWidth
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
            />
            <FormControlLabel
              control={<Checkbox name="allow_email" checked={tempUser.allow_email} onChange={handleChange} color="primary" />}
              label="Allow promotional and inspirational emails."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleDetailSubmit}>Submit Details</Button>
          </DialogActions>
        </Dialog>
        {user.type === "Healer" ? <HealerDataModal/> : null }
      </div>
    );
  
};

export default AccountModalBtn;
