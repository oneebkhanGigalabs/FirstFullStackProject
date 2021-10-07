import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Collapse,
  TextField,
} from "@material-ui/core";

function CommentSectionComponent({ ...props }) {
  //console.log(props);
  return (
    <div
      style={{
        backgroundColor: "#ECECEC",
      }}
    >
      <Container style={{ padding: "20px 20px" }}>
        {/* The top comment field */}
        <TopCommentComponent></TopCommentComponent>
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          Comments
        </Typography>
        {/* Add a map here to make infinately nested comments */}
        <CommentSectionComponentRenderer comments={props.comments} />
      </Container>
    </div>
  );
}

export default CommentSectionComponent;

//
//
// the top comment text field

function TopCommentComponent() {
  const [topValue, settopValue] = useState("");
  return (
    <div>
      <Paper
        style={{
          padding: "15px 20px",
          marginTop: "20px",
          marginBottom: "35px",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Join the Community,
        </Typography>
        <Typography>Comment Now!</Typography>
        <TextField
          variant="filled"
          value={topValue}
          fullWidth
          multiline
          hiddenLabel
          onChange={(e) => {
            settopValue(e.target.value);
          }}
          style={{
            margin: "15px 0px 5px 0px",
            padding: "0px",
          }}
          InputProps={{
            disableUnderline: true,
            //shrink: false,
            style: { padding: 15 },
            endAdornment: (
              <Button
                style={{
                  backgroundColor: "#74B9FF",
                  color: "white",
                  marginLeft: "15px",
                }}
              >
                Reply
              </Button>
            ),
          }}
        ></TextField>
      </Paper>
    </div>
  );
}

//
//
//
//this will rendered indefinately
// the comment container
function CommentComponent({ ...props }) {
  const [checked, setchecked] = useState(false);
  const [value, setvalue] = useState("");
  return (
    <div>
      <Paper
        style={{
          padding: "15px 20px",
          marginTop: "15px",
          marginBottom: "15px",
          marginLeft: props.comments.level * 2 + "0px",
          //margin: props.comments.level.toString() + 9 + "px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {props.comments.author}
          </Typography>
          <Typography>{props.comments.createdAt}</Typography>
        </div>
        <Typography>{props.comments.comment}</Typography>
        <div>
          <Button
            style={{
              padding: "0px",
              minHeight: "0",
              minWidth: "0",
              marginTop: "12px",
              color: "#74B9FF",
            }}
            onClick={() => {
              setchecked(!checked);
            }}
          >
            {checked === false ? "Reply" : "Cancel"}
          </Button>
          <Collapse in={checked}>
            <TextField
              variant="filled"
              value={value}
              fullWidth
              multiline
              hiddenLabel
              onChange={(e) => {
                setvalue(e.target.value);
              }}
              style={{
                margin: "15px 0px 5px 0px",
                padding: "0px",
              }}
              InputProps={{
                disableUnderline: true,
                //shrink: false,
                style: { padding: 15 },
                endAdornment: (
                  <Button
                    style={{
                      backgroundColor: "#74B9FF",
                      color: "white",
                      marginLeft: "15px",
                    }}
                  >
                    Reply
                  </Button>
                ),
              }}
            ></TextField>
          </Collapse>
        </div>
      </Paper>
      <CommentSectionComponentRenderer comments={props.comments.comments} />
    </div>
  );
}

function CommentSectionComponentRenderer({ ...props }) {
  return (
    <div>
      {props.comments &&
        props.comments.length > 0 &&
        props.comments.map(function (comment, index) {
          return <CommentComponent comments={comment} key={index} />;
        })}
    </div>
  );
}
