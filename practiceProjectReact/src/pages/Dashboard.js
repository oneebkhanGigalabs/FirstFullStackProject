import React from "react";
import { Redirect } from "react-router";
import DashboardContainer from "../container/dashboard/DashboardContainer";

function Dashboard() {
  if (!localStorage["token"]) {
    return <Redirect to="/splash" />;
  } else {
    return <DashboardContainer></DashboardContainer>;
  }
}

export default Dashboard;
