import CardContainer from "../../container/dashboard/CardContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeletonLoadingBottomContent() {
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      direction="row"
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(12)).map((_, index) => (
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
          <Skeleton variant="rect">
            <CardContainer blogs={[{ title: "" }]} index={0}></CardContainer>
          </Skeleton>
        </Grid>
      ))}
    </Grid>
  );
}

export default SkeletonLoadingBottomContent;
