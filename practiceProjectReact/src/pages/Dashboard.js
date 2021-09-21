import React from "react";
import { Fade } from "@material-ui/core";
import AppbarContainer from "../container/AppbarContainer";
import CardContainer from "../container/CardContainer";

function Dashboard() {
  return (
    <div>
      <AppbarContainer></AppbarContainer>
      <CardContainer></CardContainer>
    </div>
  );
}

export default Dashboard;
