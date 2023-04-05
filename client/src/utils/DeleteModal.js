import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserContext from './userContext';
import { useNavigate } from 'react-router-dom';

function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const {user} = React.useContext(UserContext)
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelete () {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/signin"))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Button variant="outlined" color='secondary' onClick={handleClickOpen}>
        DELETE MY ACCOUNT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you choose to delete, all of your service associations, comments and other info will be removed.
            You can always create another account, but any saved data will be lost. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="secondary" onClick={handleDelete} autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteModal