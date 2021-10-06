import React from "react";
import BlogDetailsContainer from "../container/blogDetails/BlogDetailsContainer";
import { Redirect } from "react-router";

function DetailedBlog() {
  if (!localStorage["token"]) {
    return <Redirect to="/splash" />;
  } else {
    return (
      <div>
        <BlogDetailsContainer></BlogDetailsContainer>
      </div>
    );
  }
}

export default DetailedBlog;
