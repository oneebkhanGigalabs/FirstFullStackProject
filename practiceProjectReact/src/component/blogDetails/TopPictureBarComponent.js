import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Avatar,
  useScrollTrigger,
  Zoom,
  Box,
  Fab,
} from "@material-ui/core";
import "./TopPictureBarStyle.css";
import EditIcon from "@material-ui/icons/Edit";
import { Delete, KeyboardArrowUpRounded } from "@material-ui/icons";
import ConfirmationDialog from "../ConfirmationDialog";
import { useState } from "react";

function TopPictureBarComponent() {
  //variable decides whether the delete dialog should open or not
  const [open, setopen] = useState(false);
  const trigger = useScrollTrigger({ threshold: 100 });

  //function to move to the top
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <AppBar
      position="static"
      style={{
        minHeight: "400px",
        overflow: "hidden",
      }}
    >
      <Toolbar
        style={{
          alignItems: "flex-start",
          backgroundColor: "transparent",
        }}
      >
        {/* the background image*/}
        <div className="appbar-image-div">
          <img
            className="appbar-image"
            src="https://image.shutterstock.com/image-photo/business-woman-drawing-global-structure-260nw-1006041130.jpg"
            alt="yesh"
          />
        </div>
        {/* the main blogs text link*/}
        <div className="logo" id="back-to-top-anchor">
          <Typography
            variant={"h2"}
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Blogs
          </Typography>
        </div>
        <br />
        {/* the blog title*/}
        <div className="title">
          <Typography
            variant={"h3"}
            style={{
              color: "white",
            }}
          >
            Lights
          </Typography>
        </div>
        {/* the edit button*/}
        <div className="edit-button">
          <IconButton
            size={"medium"}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Avatar
              style={{
                backgroundColor: "white",
                WebkitTapHighlightColor: "#707070",
              }}
            >
              <EditIcon style={{ color: "#707070" }} />
            </Avatar>
          </IconButton>
        </div>
        {/* the delete button*/}
        <div className="delete-button">
          <IconButton
            size={"medium"}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setopen(true);
            }}
          >
            <Avatar
              style={{
                backgroundColor: "white",
                WebkitTapHighlightColor: "#707070",
              }}
            >
              <Delete style={{ color: "#707070" }} />
            </Avatar>
          </IconButton>
        </div>
        {/* the delete confirmation dialog*/}
        <div className="delete-dialog">
          <ConfirmationDialog
            open={open}
            title={"Delete Blog?"}
            description={
              "Delete the current blog? This action can not be undone."
            }
            onSubmit={() => {
              setopen(false);
            }}
            onClose={() => {
              setopen(false);
            }}
          ></ConfirmationDialog>
        </div>
        {/* the bottom move to the top button*/}
        <div>
          <Zoom in={trigger}>
            <Box
              onClick={handleClick}
              role="presentation"
              sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
              <Fab
                size="large"
                aria-label="scroll back to top"
                style={{ backgroundColor: "#74b9ff", color: "white" }}
              >
                <KeyboardArrowUpRounded />
              </Fab>
            </Box>
          </Zoom>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopPictureBarComponent;
