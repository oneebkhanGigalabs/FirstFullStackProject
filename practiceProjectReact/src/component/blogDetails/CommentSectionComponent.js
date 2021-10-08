import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Collapse,
  TextField,
} from "@material-ui/core";
import ConfirmationDialog from "../ConfirmationDialog";

function CommentSectionComponent({ ...props }) {
  //console.log(props);
  if (!props.render && !props.loading) {
    return (
      <div
        style={{
          backgroundColor: "#ECECEC",
        }}
      >
        <Container style={{ padding: "20px 20px" }}>
          {/* The top comment field */}
          <TopCommentComponent props={props}></TopCommentComponent>
          <Typography variant="h4" style={{ marginBottom: "20px" }}>
            Comments
          </Typography>
          {/* Add a map here to make infinately nested comments */}
          <CommentSectionComponentRenderer
            comments={props.comments}
            props={props}
          />
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default CommentSectionComponent;

//
//
// the top comment text field

function TopCommentComponent({ props: props }) {
  //console.log(props);
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
                onClick={() => {
                  props.commentCreation({
                    author: props.author,
                    comment: topValue,
                    token: props.token,
                    blogId: props.blogId,
                  });
                }}
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
  const [checkedEdit, setcheckedEdit] = useState(false);
  const [value, setvalue] = useState("");
  const [valueEdit, setvalueEdit] = useState("");
  const [open, setopen] = useState(false);
  //console.log(props);
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
          <div style={{ display: "flex" }}>
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
                setcheckedEdit(false);
              }}
            >
              {checked === false ? "Reply" : "Cancel"}
            </Button>
            {props.comments.token === localStorage["token"] ? (
              <Button
                style={{
                  padding: "0px",
                  minHeight: "0",
                  minWidth: "0",
                  marginTop: "12px",
                  color: "#74B9FF",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  setcheckedEdit(!checkedEdit);
                  setchecked(false);
                }}
              >
                {checkedEdit === false ? "Edit" : "Cancel"}
              </Button>
            ) : (
              <div></div>
            )}
            {props.comments.token === localStorage["token"] ? (
              <Button
                style={{
                  padding: "0px",
                  minHeight: "0",
                  minWidth: "0",
                  marginTop: "12px",
                  color: "#74B9FF",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  setopen(true);
                }}
              >
                Delete
              </Button>
            ) : (
              <div></div>
            )}
          </div>
          {/* Reply */}
          <Collapse in={checkedEdit || checked}>
            <TextField
              variant="filled"
              value={checkedEdit ? valueEdit : value}
              fullWidth
              multiline
              hiddenLabel
              onChange={(e) => {
                checkedEdit
                  ? setvalueEdit(e.target.value)
                  : setvalue(e.target.value);
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
                    onClick={() => {
                      if (checkedEdit) {
                        props.props.updateComment({
                          author: props.props.author,
                          comment: valueEdit,
                          token: props.props.token,
                          blogId: props.props.blogId,
                          commentId: props.comments._id,
                        });
                      } else {
                        props.props.replyCreation({
                          author: props.props.author,
                          comment: value,
                          token: props.props.token,
                          blogId: props.props.blogId,
                          commentId: props.comments._id,
                        });
                      }
                    }}
                  >
                    Submit
                  </Button>
                ),
              }}
            ></TextField>
          </Collapse>
        </div>
      </Paper>
      <ConfirmationDialog
        open={open}
        title={"Delete Comment?"}
        description={
          "Delete the current comment? This action can not be undone."
        }
        onSubmit={() => {
          //setopen(false);
          props.props.deleteComment({
            token: props.props.token,
            blogId: props.props.blogId,
            commentId: props.comments._id,
          });
        }}
        onClose={() => {
          setopen(false);
        }}
      ></ConfirmationDialog>

      <CommentSectionComponentRenderer
        comments={props.comments.comments}
        props={props.props}
      />
    </div>
  );
}

function CommentSectionComponentRenderer({ ...props }) {
  //console.log(props);
  return (
    <div>
      {props.comments &&
        props.comments.length > 0 &&
        props.comments.map(function (comment, index) {
          return (
            <CommentComponent
              comments={comment}
              key={index}
              props={props.props}
            />
          );
        })}
    </div>
  );
}
