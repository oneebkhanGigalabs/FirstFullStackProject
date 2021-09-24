import React from "react";
import { Container, Typography } from "@material-ui/core";

function BlogsBottomContentComponent({ ...props }) {
  return (
    <Container>
      <Typography variant="h5" style={{ color: "#707070" }}>
        {props.props.description} - {props.props.author}
      </Typography>
    </Container>
  );
}

export default BlogsBottomContentComponent;
