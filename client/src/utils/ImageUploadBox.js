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
  const [setReturnImage] = useState(null)

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  function handleUpload(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", image.avatar);

    fetch("/users/update_avatar", {
      method: "PATCH",
      headers: {
        'X-User-Id': id,
      },
      body: formData,
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
      setImage({avatar: file});
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
          height: 200,
          width: 200,
          border: "2px dashed #0e643e",
          borderRadius: "7px",
          cursor: "pointer",
          backgroundColor: "#e3e3e3"
        }}
        onClick={handleModalOpen}
      >
        <AddPhotoAlternateOutlinedIcon
          sx={{ fontSize: "3rem", color: "#0e643e" }}
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
          <form encType="multipart/form-data">
          <Input type="file" accept="image/*" id="avatar" onChange={handleImageChange}/>
          </form>
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
