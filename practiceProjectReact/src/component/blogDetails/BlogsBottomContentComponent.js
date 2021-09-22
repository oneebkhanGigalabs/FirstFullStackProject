import React from "react";
import { Container, Typography } from "@material-ui/core";

function BlogsBottomContentComponent({ content: content }) {
  return (
    <Container>
      <Typography variant="h5">{content}</Typography>
    </Container>
  );
}

export default BlogsBottomContentComponent;
