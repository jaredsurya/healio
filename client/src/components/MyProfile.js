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
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useCallback, useState } from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import UserContext from "../utils/userContext";
import ImageUploadBox from "./ImageUploadBox";


const MyProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [tempUser, setTempUser] = useState(user)
  const [showFormDialog, setShowFormDialog] = useState(false);

  // const handleFullNameChange = useCallback(
  //   (e) => setUser({ ...user, full_name: e.target.value }),
  //   [user, setUser]
  // );
  // const handleEmailChange = useCallback(
  //   (e) => setUser({ ...user, email: e.target.value }),
  //   [user, setUser]
  // );
  // const handleLocationChange = useCallback(
  //   (e) => setUser({ ...user, location: e.target.value }),
  //   [user, setUser]
  // );
  // const handleAllowEmailChange = useCallback(() => {
  //   setUser(prevUser => ({ ...prevUser, allow_email: !prevUser.allow_email }));
  // }, [setUser]);
  

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
      handleClose();
    }

    function handleChange(e){
      setTempUser({...tempUser, [e.target.name]: e.target.value})
    }

    console.log(user);
    const date = new Date(user.created_at);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div align="center">
        <Typography variant="h5" align="center" gutterBottom style={{ textDecoration: 'underline' }}>User Details:</Typography>
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
        {/* Editor Modal */}
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
              control={<Checkbox name="allow_email" checked={tempUser.allow_email} onChange={handleChange} color="primary" />}
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

// biography will be a separate button, separate form/modal to edit

export default MyProfile;
