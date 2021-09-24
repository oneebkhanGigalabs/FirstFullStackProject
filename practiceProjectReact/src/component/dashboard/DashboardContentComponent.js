import CardContainer from "../../container/dashboard/CardContainer";
import { Grid } from "@material-ui/core";
import React from "react";

function DashboardContentComponent({ blogs: blogs }) {
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      direction="row"
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(blogs.length)).map((_, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          key={index}
          style={{ marginBottom: 50 }}
          align="center"
        >
          <CardContainer blogs={blogs} index={index}></CardContainer>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardContentComponent;
