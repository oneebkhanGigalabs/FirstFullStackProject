import React, { useEffect } from "react";
import { mergeClasses } from "@material-ui/styles";
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Container,
  Fade,
  Typography,
} from "@material-ui/core";

function AppbarComponent() {
  const trigger = useScrollTrigger();
  useEffect(() => {
    console.log(trigger);
  }, [trigger]);
  return (
    <div>
      <Slide direction="down" in={!trigger}>
        <AppBar style={{ background: "white" }} elevation={0}>
          <Container>
            <Typography
              variant={"h2"}
              style={{ color: "#707070", padding: "20px 5px" }}
            >
              Dashboard
            </Typography>
          </Container>
        </AppBar>
      </Slide>
      <br />
      <br />
    </div>
  );
}

export default AppbarComponent;
