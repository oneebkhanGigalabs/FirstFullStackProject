import React from "react";
import { Container, Typography } from "@material-ui/core";

function BlogsBottomContentComponent({ ...props }) {
  return (
    <Container>
      <Typography variant="h5" style={{ color: "#707070" }}>
        {props.props.description}
      </Typography>
      <Typography
        variant="h5"
        style={{
          color: "#707070",
          display: "flex",
          marginTop: "50px",
          marginBottom: "55px",
        }}
      >
        By:{" "}
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            display: "flex",
            marginLeft: "10px",
          }}
        >
          {props.props.author}
        </Typography>
      </Typography>
    </Container>
  );
}

export default BlogsBottomContentComponent;
