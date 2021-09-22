import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

function ConfirmationDialog({
  open: open,
  title: title,
  description: description,
  onSubmit: onSubmit,
  onClose: onClose,
}) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} style={{ color: "#74b9ff" }}>
          Yes
        </Button>
        <Button onClick={onClose} autoFocus style={{ color: "#74b9ff" }}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
