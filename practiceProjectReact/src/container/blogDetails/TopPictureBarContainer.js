import React from "react";
import TopPictureBarComponent from "../../component/blogDetails/TopPictureBarComponent";
import { deleteBlog } from "../../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function TopPictureBarContainer({ ...props }) {
  const history = useHistory();
  return (
    <TopPictureBarComponent
      image={props.image}
      title={props.title}
      props={props.props}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPictureBarContainer);
