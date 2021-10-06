import React from "react";
import UpdateBlogContainer from "../container/updateBlog/UpdateBlogContainer";
import { Redirect } from "react-router";

function UpdateBlog() {
  if (!localStorage["token"]) {
    return <Redirect to="/splash" />;
  } else {
    return (
      <div>
        <UpdateBlogContainer></UpdateBlogContainer>
      </div>
    );
  }
}

export default UpdateBlog;
