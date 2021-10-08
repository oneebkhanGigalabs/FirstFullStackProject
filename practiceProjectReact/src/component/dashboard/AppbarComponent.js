import React from "react";
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import "./AppbarComponentStyle.css";
import { useHistory } from "react-router";

function AppbarComponent({ ...props }) {
  const trigger = useScrollTrigger();
  const history = useHistory();

  const moveToCreatePage = () => {
    history.push("/create");
  };

  return (
    <div>
      <Slide direction="down" in={!trigger}>
        <AppBar style={{ background: "white" }} elevation={0}>
          <Typography
            variant={"h2"}
            style={{
              color: "#707070",
              padding: "30px 50px",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Typography>
          <div className="create">
            <IconButton
              size="medium"
              style={{ color: "white", backgroundColor: "#74b9ff" }}
              onClick={() => {
                moveToCreatePage();
              }}
            >
              <AddRounded></AddRounded>
            </IconButton>
          </div>
          <div className="profile">
            <IconButton
              style={{
                backgroundColor: "black",
                backgroundImage: props.props.image,
                overflow: "hidden",
                width: "56px",
                height: "56px",
              }}
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/splash");
              }}
            >
              <Avatar
                src={props.props.image}
                style={{ width: "200%", height: "200%" }}
              ></Avatar>
            </IconButton>
          </div>
        </AppBar>
      </Slide>
    </div>
  );
}

export default AppbarComponent;
