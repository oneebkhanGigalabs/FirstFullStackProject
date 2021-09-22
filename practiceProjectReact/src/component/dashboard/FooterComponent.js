import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import "./FooterComponentStyle.css";

function FooterComponent() {
  return (
    <div className="footer">
      <AppBar position="static" style={{ backgroundColor: "#74b9ff" }}>
        <Typography style={{ padding: 10, alignSelf: "center" }}>
          @Blogs
        </Typography>
      </AppBar>
    </div>
  );
}

export default FooterComponent;
