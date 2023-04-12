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
import QuillEditor from "../../utils/QuillEditor";
import WeblinksInput from "../../utils/WeblinksInput";
import { removeNull } from "../../utils/removeNull";
import { useNavigate } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";
import UserContext from "../../utils/userContext";

const ServiceModalBTN = () => {
  const { setServices } = useContext(HealersServicesContext);
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [editService, setEditService] = useState({});
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleCancel() {
    resetForm();
    handleEditClose();
  }

  let body = {
    ...editService,
    description: description,
  };

  function handleEditOpen() {
    //resetForm()
    setOpen(true);
  }

  function handleEditClose() {
    resetForm();
    setOpen(false);
  }

  function handleDetailSubmit() {
    // setTempUser({...tempUser, weblinks: weblinks})
    fetch(`/services`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const cleanedData = removeNull(data);
          setServices(cleanedData);
        });
      } else {
        alert("error in ServiceModalBTN");
      }
    });
    handleEditClose();
  }

  function resetForm() {
    setEditService({});
    setDescription("");
    setImage("");
    setName("");
  }

  function handleModalChange(e) {
    setEditService({ ...editService, [e.target.name]: e.target.value });
  }

  return (
    <Box align="center" p={3}>
      {user.user_type === "healer" ? (
        <Button
          align="center"
          variant="outlined"
          color="primary"
          onClick={handleEditOpen}
        >
          Create a new Service Page
        </Button>
      ) : null}
      {editService && (
        <Dialog
          open={open}
          maxWidth="lg"
          onClose={() => handleEditClose(false)}
        >
          <DialogTitle>Create a New Service Page</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please consider the visitors as you create this new page. Fill in
              all input areas.
            </DialogContentText>
            <TextField
              margin="dense"
              id="title"
              label="Service Title"
              type="text"
              name="name"
              value={editService.name}
              onChange={handleModalChange}
            />
            <TextField
              margin="dense"
              id="image"
              label="Image URL (include https://)"
              type="text"
              name="image"
              fullWidth
              value={editService.image}
              onChange={handleModalChange}
            />
            <Typography color={"green"} fontStyle={"italic"} fontSize="small">
              Web-Links can only be added from the edit window of a newly
              created page.
            </Typography>
            <Typography>
              Use the space below to edit the description of the service.
            </Typography>
            <QuillEditor bio={description} setBio={setDescription} />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDetailSubmit}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ServiceModalBTN;
