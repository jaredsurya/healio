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
import React, { useContext, useState } from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import UserContext from "../utils/userContext";
import ImageUploadBox from "./ImageUploadBox";


const MyProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [showFormDialog, setShowFormDialog] = useState(false);

  function FormDialog() {
    const handleClickOpen = () => {
      setShowFormDialog(true);
    };

    const handleClose = () => {
      setShowFormDialog(false);
    };

    function handleDetailSubmit() {
      handleClose();
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
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="name"
              label="Email Address (Required)"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="zip"
              label="Home Zip Code"
              type="number"
              fullWidth
              variant="standard"
            />
            <FormControlLabel
              control={<Checkbox value={true} color="primary" />}
              label="Allow promotional and inspirational emails."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDetailSubmit}>Submit Details</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div>
      {/* the below typography needs to be set properly so text grows and shrinks with viewwindow changes */}
      <FormDialog />
      {/* <UserShow showEdit={showEdit} setShowEdit={setShowEdit} />
      <Button variant="contained" color="secondary" onClick={setShowEdit(true)}>Edit Details</Button>
      <UserEdit /> */}
      {/* make a responsive form that edits the user data. on button click, toggle between edit and view(where data is normally populated in full) */}
    </div>
  );
};

// biography will be a separate button, separate form/modal to edit

export default MyProfile;
