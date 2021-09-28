import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

function AlertDialogComponent({
  title: title,
  content: content,
  onClick: onClick,
  openModal: openModal,
  buttonText: buttonText,
}) {
  return (
    <Dialog
      open={openModal}
      onClose={(event, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") {
          onClick();
        }
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClick();
          }}
          style={{ color: "#74b9ff" }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialogComponent;
