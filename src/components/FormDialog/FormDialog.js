import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleListMenu from 'components/SimpleListMenu';

// TODO: 
// Expand this Button to Modal Form to be generalized for different types of forms needed for this app

// TODO:
// Implement ability to assign teammates to ticket

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Ticket
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Open Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details of the issue, pick an issue type and optionally assign a teammate!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="ticketDescription"
            label="Ticket Description"
            type="ticketDescription"
            fullWidth
          />
          <SimpleListMenu />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
