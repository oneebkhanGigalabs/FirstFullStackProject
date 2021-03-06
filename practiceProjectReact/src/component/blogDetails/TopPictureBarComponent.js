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
import { Delete, KeyboardArrowUpRounded, Favorite } from "@material-ui/icons";
import ConfirmationDialog from "../ConfirmationDialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function TopPictureBarComponent({ ...props }) {
  //variable decides whether the delete dialog should open or not
  const [open, setopen] = useState(false);
  const [favorite, setfavorite] = useState(false);
  const trigger = useScrollTrigger({ threshold: 100 });

  useEffect(() => {
    if (props.user.favoriteBlogs) {
      if (props.user.favoriteBlogs.includes(props.props._id)) {
        setfavorite(true);
      } else {
        setfavorite(false);
      }
    }
  }, []);

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
          <img className="appbar-image" src={props.image} alt={props.title} />
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
            {props.title}
          </Typography>
        </div>
        {/* the edit button*/}
        <div
          className="edit-button"
          style={props.user.token == props.blogtoken ? {} : { display: "none" }}
        >
          <Link to={"/" + props.props._id + "/update"}>
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
          </Link>
        </div>
        {/* the delete button*/}
        <div
          className="delete-button"
          style={props.user.token == props.blogtoken ? {} : { display: "none" }}
        >
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

        <div className="favorite-button">
          <IconButton
            size={"medium"}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setfavorite(!favorite);
              setTimeout(() => {
                props.favoriteBlog({
                  email: props.user.email,
                  id: props.props._id,
                });
              }, 200);
            }}
          >
            <Avatar
              style={{
                backgroundColor: "white",
                WebkitTapHighlightColor: "#707070",
              }}
            >
              <Favorite
                style={favorite ? { color: "red" } : { color: "grey" }}
              />
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
              props.deleteFunction();
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
              sx={{ position: "fixed", bottom: 16, right: 16, zIndex: "100" }}
            >
              <Fab
                size="large"
                aria-label="scroll back to top"
                style={{
                  backgroundColor: "#74b9ff",
                  color: "white",
                }}
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
