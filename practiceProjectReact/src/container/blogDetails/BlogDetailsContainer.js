import React, { useEffect } from "react";
import TopAppBarContainer from "./TopPictureBarContainer";
import BlogsBottomContentContainer from "./BlogsBottomContentContainer";
import { fetchBlog } from "../../redux/actions";
import { connect } from "react-redux";

function BlogDetailsContainer({ ...props }) {
  useEffect(() => {
    props.fetchBlog(getId());
    console.log(props);
  }, []);

  return (
    <div>
      <TopAppBarContainer
        image={props.blogs.blogs.image}
        title={props.blogs.blogs.title}
        props={props.blogs.blogs}
      ></TopAppBarContainer>
      <br />
      <br />
      <BlogsBottomContentContainer
        props={props.blogs.blogs}
      ></BlogsBottomContentContainer>
    </div>
  );
}

const getId = () => {
  const url = window.location.href;
  const elem = url.split("/");
  return elem[elem.length - 1];
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlog(getId())),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetailsContainer);
