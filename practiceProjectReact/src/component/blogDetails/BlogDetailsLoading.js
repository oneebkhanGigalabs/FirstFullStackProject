import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container } from "@material-ui/core";

function BlogDetailsLoading() {
  return (
    <div>
      <Skeleton
        variant="rect"
        animation="wave"
        style={{
          width: "100%",
          height: "400px",
          margin: "0px",
          padding: "0px",
        }}
      ></Skeleton>
      <div style={{ marginTop: "70px" }}></div>
      <Container>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave" style={{ width: "200px" }}></Skeleton>
      </Container>
      <div style={{ marginTop: "20px" }}></div>
      <Container>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave" style={{ width: "500px" }}></Skeleton>
      </Container>
      <div style={{ marginTop: "20px" }}></div>
      <Container>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave"></Skeleton>
        <Skeleton animation="wave" style={{ width: "350px" }}></Skeleton>
      </Container>
    </div>
  );
}

export default BlogDetailsLoading;
