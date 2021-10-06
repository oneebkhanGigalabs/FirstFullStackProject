import React from "react";
import AppbarContainer from "../container/dashboard/AppbarContainer";
import BottomContentContainer from "../container/dashboard/BottomContentContainer";
import FooterComponent from "../component/dashboard/FooterComponent";
import { Redirect } from "react-router";

function Dashboard() {
  if (!localStorage["token"]) {
    return <Redirect to="/splash" />;
  } else {
    return (
      <div>
        <AppbarContainer />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <BottomContentContainer />
        <FooterComponent />
      </div>
    );
  }
}

export default Dashboard;
