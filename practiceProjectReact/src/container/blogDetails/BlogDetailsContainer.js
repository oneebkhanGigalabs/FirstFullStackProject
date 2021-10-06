import React, { useEffect } from "react";
import TopAppBarContainer from "./TopPictureBarContainer";
import BlogsBottomContentContainer from "./BlogsBottomContentContainer";
import { fetchBlog } from "../../redux/blogs/actions";
import { connect } from "react-redux";
import BlogDetailsLoading from "../../component/blogDetails/BlogDetailsLoading";
import { getUser } from "../../redux/auth/actions";
import { PanToolSharp } from "@material-ui/icons";

function BlogDetailsContainer({ ...props }) {
  useEffect(() => {
    props.fetchBlog(getId());
    props.getUser(localStorage["token"]);
  }, []);
  if (props.blogs.loading) {
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
