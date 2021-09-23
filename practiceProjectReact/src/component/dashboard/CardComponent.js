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
import { useEffect } from "react";
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

function CardComponent({
  title: title,
  content: content,
  imageURL: imageURL,
  id: id,
  p: p,
}) {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {}, []);

  const routeChange = (objectid) => {
    let path = `/` + objectid;
    history.push(path);
  };
  return (
    <div className="card-component">
      <FiCard className={classes.card}>
        <FiCardActionArea
          onClick={() => {
            routeChange(id);
          }}
        >
          <FiCardMedia
            media="picture"
            alt={title}
            image={imageURL}
            title={title}
          />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.fiCardContentTextSecondary}
              component="p"
            >
              {content}
            </Typography>
          </FiCardContent>
        </FiCardActionArea>
      </FiCard>
      <div></div>
    </div>
  );
}

export default CardComponent;
