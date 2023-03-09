import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Modal from "@mui/material/Modal";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from "@mui/material";
import { Container } from "@mui/system";

function ImageUploadBox() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  function handleUpload(){
    setModalOpen(false)
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: 0,
          left: 0,
          height: 195,
          width: 130,
          border: "1.5px dashed purple",
          borderRadius: "7px",
          cursor: "pointer",
          backgroundColor: "lightgrey"
        }}
        onClick={handleModalOpen}
      >
        <AddPhotoAlternateOutlinedIcon
          sx={{ fontSize: "3rem", color: "purple" }}
        />
      </Box>
      <Dialog open={modalOpen} onClose={handleModalClose}>
        <DialogTitle>Edit Profile Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select an image to upload.
          </DialogContentText>
        </DialogContent>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "10px"
          }}
        >
          <Input type="file" id="avatar" />
        </Container>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" onClick={handleModalClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" onClick={handleUpload} variant="contained" color="primary">
          Upload
        </Button>
      </Box>
      </Dialog>
    </React.Fragment>
  );
}

export default ImageUploadBox;
