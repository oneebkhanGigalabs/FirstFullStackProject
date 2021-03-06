import React from "react";
import TopPictureBarComponent from "../../component/blogDetails/TopPictureBarComponent";
import { deleteBlog, favoriteBlog } from "../../redux/blogs/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function TopPictureBarContainer({ ...props }) {
  const history = useHistory();
  return (
    <TopPictureBarComponent
      image={props.image}
      title={props.title}
      props={props.props}
      user={props.user}
      blogtoken={props.blogtoken}
      favoriteBlog={(email, id) => {
        props.favoriteBlog(email, id);
      }}
      deleteFunction={() => {
        props.deleteBlog(props.blogs.blogs._id).then(() => {
          history.push("/");
        });
      }}
    ></TopPictureBarComponent>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBlog: (id) => dispatch(deleteBlog(id)),
    favoriteBlog: ({ email: email, id: id }) =>
      dispatch(favoriteBlog({ email: email, id: id })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPictureBarContainer);
