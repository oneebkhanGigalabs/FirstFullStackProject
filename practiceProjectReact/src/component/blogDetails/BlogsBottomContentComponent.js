import React from "react";
import { Container, Typography } from "@material-ui/core";

function BlogsBottomContentComponent({ content: content }) {
  return (
    <Container>
      <Typography variant="h5" style={{ color: "#707070" }}>
        {content}
      </Typography>
    </Container>
  );
}

export default BlogsBottomContentComponent;
