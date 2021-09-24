import React from "react";
import TopPictureBarComponent from "../../component/blogDetails/TopPictureBarComponent";

function TopPictureBarContainer({ ...props }) {
  return (
    <TopPictureBarComponent
      image={props.image}
      title={props.title}
      props={props.props}
    ></TopPictureBarComponent>
  );
}

export default TopPictureBarContainer;
