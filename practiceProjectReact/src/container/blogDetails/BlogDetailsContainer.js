import React, { useEffect } from "react";
import TopAppBarContainer from "./TopPictureBarContainer";
import BlogsBottomContentContainer from "./BlogsBottomContentContainer";
import { fetchBlog } from "../../redux/blogs/actions";
import { connect } from "react-redux";
import BlogDetailsLoading from "../../component/blogDetails/BlogDetailsLoading";
import { getUser } from "../../redux/auth/actions";
import CommentSectionContainer from "./CommentSectionContainer";

function BlogDetailsContainer({ ...props }) {
  useEffect(() => {
    props.fetchBlog(getId());
    props.getUser(localStorage["token"]);
    //console.log("useeffect called");
  }, [props.blogs.blogs.createdAt, props.blogs.rerenderBlog]);
  //console.log(props);

  if (
    props.blogs.loading ||
    props.data.loading ||
    typeof props.blogs.blogs !== "object"
  ) {
    return <BlogDetailsLoading />;
  } else {
    return (
      <div>
        <TopAppBarContainer
          image={props.blogs.blogs.image}
          title={props.blogs.blogs.title}
          id={props.blogs.blogs._id}
          props={props.blogs.blogs}
          user={props.data.data}
          blogtoken={props.blogs.blogs.token}
        ></TopAppBarContainer>
        <br />
        <br />
        <BlogsBottomContentContainer
          props={props.blogs.blogs}
        ></BlogsBottomContentContainer>
        <CommentSectionContainer
          fetchBlog={(id) => {
            props.fetchBlog(id);
          }}
          comments={props.blogs.blogs.comments}
          blogId={props.blogs.blogs._id}
          blog={props.blogs.blogs}
        ></CommentSectionContainer>
      </div>
    );
  }
}

const getId = () => {
  const url = window.location.href;
  const elem = url.split("/");
  return elem[elem.length - 1];
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlog(getId())),
    getUser: (token) => dispatch(getUser(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetailsContainer);
