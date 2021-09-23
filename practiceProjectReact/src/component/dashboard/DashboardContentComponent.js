import CardContainer from "../../container/dashboard/CardContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index";
import { useState, useEffect } from "react";

function DashboardContentComponent({ ...props }) {
  useEffect(() => {
    const p = props.GetBlogs();
    console.log(props.blogs);
  }, []);
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
          align="center"
        >
          <CardContainer></CardContainer>
        </Grid>
      ))}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(DashboardContentComponent);
