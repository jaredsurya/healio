import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from "@mui/material";
import { Container } from "@mui/system";

function ImageUploadBox({id}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState(null)
  const [returnImage, setReturnImage] = useState(null)

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  function handleUpload(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", image);

    fetch("/users/update_avatar", {
      method: "POST",
      headers: {
        'X-User-Id': id,
        "Content-Type": "image/jpeg"
      },
      body: formData,
      credentials: "same-origin",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("image data: ", data)
        setReturnImage(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setModalOpen(false);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  return (
    <>
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
          border: "1.5px dashed grey",
          borderRadius: "7px",
          cursor: "pointer",
          backgroundColor: "lightgrey"
        }}
        onClick={handleModalOpen}
      >
        <AddPhotoAlternateOutlinedIcon
          sx={{ fontSize: "3rem", color: "grey" }}
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
          <Input type="file" id="avatar" onChange={handleImageChange}/>
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
    </>
  );
}

export default ImageUploadBox;
