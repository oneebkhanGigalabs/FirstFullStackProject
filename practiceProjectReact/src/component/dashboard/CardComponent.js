import React from "react";
import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia,
} from "./FullImageCard";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import "./CardComponentStyle.css";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    minHeight: 270,
    width: 270,
  },
  media: {
    minHeight: 1000,
    minWidth: 1000,
  },
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
    padding: "210px 15px 20px 15px",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
});

function CardComponent({ imageURL: imageURL, blogs: blogs, index: index }) {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = (objectid) => {
    let path = `/` + objectid;
    history.push(path);
  };
  return (
    <div className="card-component">
      <FiCard className={classes.card}>
        <FiCardActionArea
          onClick={() => {
            routeChange(blogs[index]._id);
          }}
        >
          <FiCardMedia
            media="picture"
            component="img"
            alt={blogs[index].title}
            image={blogs[index].image}
            title={blogs[index].title}
          />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {blogs[index].title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.fiCardContentTextSecondary}
              component="p"
            ></Typography>
          </FiCardContent>
        </FiCardActionArea>
      </FiCard>
    </div>
  );
}

export default CardComponent;
