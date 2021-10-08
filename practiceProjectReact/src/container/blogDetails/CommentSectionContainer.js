import React, { useEffect } from "react";
import CommentSectionComponent from "../../component/blogDetails/CommentSectionComponent";
import { connect } from "react-redux";
import {
  createComment,
  createReply,
  updateComment,
  deleteComment,
} from "../../redux/blogs/actions";

function CommentSectionContainer({ ...props }) {
  function refreshBlog() {
    props.fetchBlog(props.blogId);
  }

  useEffect(() => {
    if (props.blogs.rerenderBlogs == true || props.blogs.loading == true) {
      props.fetchBlog(props.blogId);
    }
  }, [props.blogs.rerenderBlogs]);
  //console.log(props.blogs.rerenderBlogs);

  function commentCreation({
    author: author,
    comment: comment,
    token: token,
    blogId: blogId,
  }) {
    props.createComment({
      author: author,
      comment: comment,
      token: token,
      blogId: blogId,
    });
  }

  function replyCreation({
    author: author,
    comment: comment,
    token: token,
    blogId: blogId,
    commentId: commentId,
  }) {
    props.createReply({
      author: author,
      comment: comment,
      token: token,
      blogId: blogId,
      commentId: commentId,
    });
  }

  function updateComment({
    author: author,
    comment: comment,
    token: token,
    blogId: blogId,
    commentId: commentId,
  }) {
    props.updateComment({
      author: author,
      comment: comment,
      token: token,
      blogId: blogId,
      commentId: commentId,
    });
  }

  function deleteComment({
    token: token,
    blogId: blogId,
    commentId: commentId,
  }) {
    props.deleteComment({
      token: token,
      blogId: blogId,
      commentId: commentId,
    });
  }

  //console.log(props);
  if (!props.blogs.rerenderBlogs && !props.blogs.loading) {
    return (
      <CommentSectionComponent
        comments={props.comments}
        author={props.data.data.username}
        blogId={props.blogId}
        token={localStorage["token"]}
        render={props.blogs.rerenderBlogs}
        loading={props.blogs.loading}
        fetchBlog={() => {
          refreshBlog();
        }}
        commentCreation={({
          author: author,
          comment: comment,
          token: token,
          blogId: blogId,
        }) => {
          commentCreation({
            author: author,
            comment: comment,
            token: token,
            blogId: blogId,
          });
        }}
        replyCreation={({
          author: author,
          comment: comment,
          token: token,
          blogId: blogId,
          commentId: commentId,
        }) => {
          replyCreation({
            author: author,
            comment: comment,
            token: token,
            blogId: blogId,
            commentId: commentId,
          });
        }}
        updateComment={({
          author: author,
          comment: comment,
          token: token,
          blogId: blogId,
          commentId: commentId,
        }) => {
          updateComment({
            author: author,
            comment: comment,
            token: token,
            blogId: blogId,
            commentId: commentId,
          });
        }}
        deleteComment={({
          token: token,
          blogId: blogId,
          commentId: commentId,
        }) => {
          deleteComment({
            token: token,
            blogId: blogId,
            commentId: commentId,
          });
        }}
      />
    );
  } else {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReply: ({
      author: author,
      comment: comment,
      token: token,
      blogId: blogId,
      commentId: commentId,
    }) => {
      dispatch(
        createReply({
          author: author,
          comment: comment,
          token: token,
          blogId: blogId,
          commentId: commentId,
        })
      );
    },
    createComment: ({
      author: author,
      comment: comment,
      token: token,
      blogId: blogId,
    }) => {
      dispatch(
        createComment({
          author: author,
          comment: comment,
          token: token,
          blogId: blogId,
        })
      );
    },
    updateComment: ({
      author: author,
      comment: comment,
      token: token,
      blogId: blogId,
      commentId: commentId,
    }) => {
      dispatch(
        updateComment({
          author: author,
          comment: comment,
          token: token,
          blogId: blogId,
          commentId: commentId,
        })
      );
    },
    deleteComment: ({ token: token, blogId: blogId, commentId: commentId }) => {
      dispatch(
        deleteComment({
          token: token,
          blogId: blogId,
          commentId: commentId,
        })
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSectionContainer);
