import React, { useEffect } from "react";
import DashboardContentComponent from "../../component/dashboard/DashboardContentComponent";
import { fetchAllBlogs } from "../../redux/actions";
import { connect } from "react-redux";
import SkeletonLoadingBottomContent from "../../component/dashboard/SkeletonLoadingBottomContent";
import "./bottomContent.css";

function BottomContentContainer({ ...props }) {
  useEffect(() => {
    props.fetchAllBlogs();
    console.log(props);
  }, []);

  return !props ? (
    <div></div>
  ) : props.blogs.loading ? (
    <div>
      <SkeletonLoadingBottomContent />
    </div>
  ) : props.blogs.error ? (
    <div>error</div>
  ) : (
    <div className="dashboard-content">
      <DashboardContentComponent blogs={props.blogs.blogs} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBlogs: () => dispatch(fetchAllBlogs()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomContentContainer);
