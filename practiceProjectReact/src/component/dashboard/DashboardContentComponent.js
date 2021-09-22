import CardContainer from "../../container/dashboard/CardContainer";
import { Grid } from "@material-ui/core";
import React from "react";

function DashboardContentComponent() {
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      direction="row"
      //spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          key={index}
          style={{ marginBottom: 50 }}
          justify="center"
          justifyContent="center"
          align="center"
          alignContent="center"
          direction="row"
        >
          <CardContainer></CardContainer>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardContentComponent;
