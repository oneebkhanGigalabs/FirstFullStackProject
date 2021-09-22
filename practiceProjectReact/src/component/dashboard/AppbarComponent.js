import React, { useEffect } from "react";
import { mergeClasses } from "@material-ui/styles";
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import "./AppbarComponentStyle.css";
import { useHistory } from "react-router";

function AppbarComponent() {
  const trigger = useScrollTrigger();
  const history = useHistory();

  useEffect(() => {
    console.log(trigger);
  }, [trigger]);

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
              size="xxlarge"
              style={{ color: "white", backgroundColor: "#74b9ff" }}
              onClick={() => {
                moveToCreatePage();
              }}
            >
              <AddRounded></AddRounded>
            </IconButton>
          </div>
        </AppBar>
      </Slide>
    </div>
  );
}

export default AppbarComponent;
