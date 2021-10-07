import React from "react";
import CommentSectionComponent from "../../component/blogDetails/CommentSectionComponent";

function CommentSectionContainer({ ...props }) {
  function refreshBlog() {
    props.fetchBlog(props.blogId);
  }
  return (
    <CommentSectionComponent
      comments={props.comments}
      fetchBlog={() => {
        refreshBlog();
      }}
    />
  );
}

export default CommentSectionContainer;
