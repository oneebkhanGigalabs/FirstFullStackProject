import React, { useState } from "react";
import { AppBar, Typography, Collapse } from "@material-ui/core";
import "./FooterComponentStyle.css";

function FooterComponent() {
  const [collapse, setcollapse] = useState(false);
  return (
    <div className="footer">
      <Collapse in={collapse} orientation="vertical" collapsedSize={50}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#74b9ff" }}
          onMouseOver={() => {
            setcollapse(true);
          }}
          onMouseLeave={() => {
            setcollapse(false);
          }}
        >
          <Typography style={{ padding: 10, alignSelf: "center" }}>
            @Blogs
          </Typography>
          <Typography style={{ padding: 10, alignSelf: "center" }}>
            🎂🎂🎂
          </Typography>
        </AppBar>
      </Collapse>
    </div>
  );
}

export default FooterComponent;
