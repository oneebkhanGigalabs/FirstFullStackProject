import React from "react";
import CreateBlogContainer from "../container/createBlogs/CreateBlogContainer";
import { Redirect } from "react-router";

function CreateBlog() {
  if (!localStorage["token"]) {
    return <Redirect to="/splash" />;
  } else {
    return (
      <div>
        <CreateBlogContainer />
      </div>
    );
  }
}

export default CreateBlog;
