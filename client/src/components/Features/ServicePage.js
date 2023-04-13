import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useContext, useState, useEffect } from "react";
import HealersServicesContext from "../../utils/healersServicesContext";
import Weblinks from "./Weblinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserContext from "../../utils/userContext";
import { Add, Check, Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import WeblinksInput from "../../utils/WeblinksInput";
import QuillEditor from "../../utils/QuillEditor";
import { removeNull } from "../../utils/removeNull";
import ServiceModalBTN from "../Buttons/ServiceModalBTN";
import Comments from "../../utils/Comments";

function ServicePage({ id }) {
  const {
    services,
    setServices,
    savedServices,
    setSavedServices,
    isAssociated,
    setIsAssociated,
    setRenderHealer,
  } = useContext(HealersServicesContext);
  const { user } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [editService, setEditService] = useState(null);
  const [weblinks, setWeblinks] = useState([]);
  const [desc, setDesc] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const navigate = useNavigate();
  let service = services.find((s) => id === s.id);

  let healers = [];
  if (service && service.users && service.users.length > 0) {
    healers = service.users.filter((user) => user.user_type === "healer");
  }

  // HAVE TO SET the toggle plus or check to match whether the user and the service have been set (associated) before
  // NEED that to effect the boolean value of "isAssociated"

  useEffect(() => {
    if (editService) {
      setWeblinks(editService.weblinks);
      setDesc(editService.description);
    }
  }, [editService]);

  useEffect(() => {
    setExpanded(false);
  }, [id]);

  useEffect(() => {
    setIsAssociated(savedServices.some((s) => s.id === service.id));
  }, [service, user]);

  function handleAssociation() {
    if (!isAssociated) {
      fetch("/user_services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: service.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSavedServices(data);
          setIsAssociated(true);
        })
        .catch((err) => console.log(err));
    } else if (isAssociated) {
      fetch(`/user_services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setSavedServices(data);
          setIsAssociated(false);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCancel() {
    setEditService(service);
    // all the setters
    setDesc([]);
    setWeblinks([]);
    handleEditClose();
  }

  let body = { ...editService, description: desc };
  delete body.user_services;
  delete body.users;
  delete body.weblinks;
  //console.log("BODY", body)
  function handleDetailSubmit() {
    fetch(`/services/${service.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const cleanedData = removeNull(data);
          service = cleanedData;
        });
      } else {
        alert("error in SERVICE PAGE");
        setEditService(service);
      }
    });
    handleEditClose();
  }

  useEffect(() => {
    user.services.find((svc) => svc.id === id)
      ? setIsAssociated(true)
      : setIsAssociated(false);
  }, [user]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleClick(id) {
    setRenderHealer(id);
    navigate(`/main/healer/${id}`);
  }

  function handleEditOpen() {
    //console.log("clicked")
    setEditService(service);
    setOpen(true);
  }

  function handleEditClose() {
    resetForm();
    setOpen(false);
  }

  function resetForm() {
    setEditService(service);
    setDesc(editService.description);
    setWeblinks(editService.weblinks);
  }

  function handleModalChange(e) {
    setEditService({ ...editService, [e.target.name]: e.target.value });
  }

  function handleDelete() {
    setDeleteOpen(true);
  }

  const handleDeleteConfirm = () => {
    fetch(`/services/${service.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setSavedServices(savedServices.filter((svc) => svc.id !== service.id));
        setServices(data);
        setDeleteOpen(false);
        setOpen(false);
        navigate("/main");
      })
      .catch((err) => console.log("error in delete-confirm", err));
  };

  const handleDeleteCancel = () => {
    setDeleteOpen(false);
  };

  if (!service) {
    return (
      <Typography variant="h4" align="center">
        LOADING . . .
      </Typography>
    );
  }
  // INCLUDE button if user_type is healer for editing, then popup modal (dialog)
  return (
    <Box>
      <Box display="flex" position="relative" justifyContent="space-between">
        <Tooltip
          title={
            user.user_type === "visitor"
              ? isAssociated
                ? "Remove from Favorites"
                : "Save to Favorites"
              : isAssociated
              ? "Remove From My Services"
              : "Add to My Services"
          }
        >
          <IconButton position="absolute" onClick={handleAssociation}>
            {user.user_type === "visitor" ? (
              isAssociated ? (
                <Favorite fontSize="large" color="secondary" />
              ) : (
                <FavoriteBorder fontSize="large" color="secondary" />
              )
            ) : isAssociated ? (
              <Check fontSize="large" color="secondary" />
            ) : (
              <Add fontSize="large" color="primary" />
            )}{" "}
          </IconButton>
        </Tooltip>
        {user.user_type === "healer" ? (
          <Tooltip title="Edit Page">
            <IconButton position="absolute" onClick={() => handleEditOpen()}>
              <EditOutlinedIcon color="primary" fontSize="large" />
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
      {editService && (
        <Dialog open={open} maxWidth="lg" onClose={() => handleEditClose()}>
          <DialogTitle>Service Page Editor</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please update this service page using the most current and helpful
              information possible.
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
            <WeblinksInput
              type={service.id}
              weblinks={weblinks}
              setWeblinks={setWeblinks}
            />
            <Typography>
              Use the space below to edit the description of the service.
            </Typography>
            <QuillEditor bio={desc} setBio={setDesc} />
          </DialogContent>
          <DialogActions sx={{ display: "flex" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
            >
              <Box justifyContent={"flex-start"} flexGrow={1}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleDelete}
                >
                  Delete This Service
                </Button>
              </Box>
              <Box flexGrow={1} display="flex" justifyContent="flex-end">
                <Button variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleDetailSubmit}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={deleteOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this service page? This is
            permanent. User associations like favorites will be removed as well.
            This action may have far-reaching consequences.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteConfirm}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h3" gutterBottom align="center">
        {service.name}
      </Typography>
      <Box
        sx={{
          width: "84%",
          margin: "0 auto",
          paddingBottom: "8px",
          textAlign: "center",
        }}
      >
        <Box width={"38%"} align="center" margin="0 auto" paddingBottom={2}>
          {service.image ? (
            <img
              src={service.image}
              alt="service image"
              style={{
                maxWidth: "100%",
                margin: "0 auto",
                borderRadius: "16px",
              }}
            />
          ) : null}
        </Box>
        <div
          style={{
            float: "none",
            textAlign: "justify",
            lineHeight: "1.5",
            fontSize: "23px",
            fontFamily: "georgia",
          }}
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
      </Box>

      <Box className="accordions" paddingTop={3}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {service.name} Practicioners
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          
            {healers.length > 0 ? (
              healers.map((hlr) => (
                <Chip
                  key={hlr.id}
                  size="large"
                  align="center"
                  label={hlr.full_name}
                  variant="outlined"
                  onClick={() => handleClick(hlr.id)}
                  sx={{
                    margin: "auto",
                    fontSize: 22,
                  }}
                />
              ))
            ) : (
              <Typography fontWeight={"bold"}>
                {service.name} has no associated healers on Healio yet.
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Helpful Web Links
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Weblinks links={service.weblinks} />
          </AccordionDetails>
        </Accordion>
      </Box>
      <Comments service={service} key='a1' />
      {user.user_type === "healer" ? <ServiceModalBTN /> : null}
    </Box>
  );
}

export default ServicePage;
