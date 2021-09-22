import React from "react";
import { Fade } from "@material-ui/core";
import AppbarContainer from "../container/dashboard/AppbarContainer";
import DashboardContentComponent from "../component/dashboard/DashboardContentComponent";
import FooterComponent from "../component/dashboard/FooterComponent";

function Dashboard() {
  return (
    <div>
      <AppbarContainer></AppbarContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DashboardContentComponent></DashboardContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default Dashboard;
