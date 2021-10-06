import React from "react";
import AppbarComponent from "../../component/dashboard/AppbarComponent";

function AppbarContainer({ ...props }) {
  return <AppbarComponent props={props.props.data}></AppbarComponent>;
}

export default AppbarContainer;
