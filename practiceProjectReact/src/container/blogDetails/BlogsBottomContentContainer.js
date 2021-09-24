import React from "react";
import BlogsBottomContentComponent from "../../component/blogDetails/BlogsBottomContentComponent";

function BlogsBottomContentContainer({ ...props }) {
  return <BlogsBottomContentComponent props={props.props} />;
}

export default BlogsBottomContentContainer;
