import React from "react";
import TextFieldComponent from "./TextFieldComponent";
import { Typography, Fab, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { AddToPhotos } from "@material-ui/icons";
import $ from "jquery";

function CreateBlogsComponent() {
  const [titleValue, settitleValue] = useState("");
  const [content, setcontent] = useState("");
  const [author, setauthor] = useState("");
  const [picture, setpicture] = useState(null);
  const [pictureName, setpictureName] = useState("Select an image");

  return (
    <div style={{ padding: "20px 30px" }}>
      <div>
        <Typography variant={"h2"} style={{ fontWeight: "bold" }}>
          Create Blogs
        </Typography>
      </div>
      <br />
      <br />
      {/* the blog title text field */}
      <TextFieldComponent
        value={titleValue}
        title="Blog Title"
        multiline="false"
        maxWidth="500px"
        onchange={(e) => {
          settitleValue(e);
        }}
        type="text"
      ></TextFieldComponent>
      <br />
      <br />

      {/* the blog title text field */}
      <TextFieldComponent
        value={author}
        title="Author"
        multiline="false"
        maxWidth="500px"
        onchange={(e) => {
          setauthor(e);
        }}
        type="text"
      ></TextFieldComponent>
      <br />
      <br />
      {/* image picker here */}
      <TextField
        value=""
        label={pictureName}
        disabled
        variant="filled"
        type="text"
        fullWidth
        style={{ paddingRight: "20px", maxWidth: "450px", minWidth: "50px" }}
        InputProps={{
          disableUnderline: true,
        }}
        onChange={(e) => {
          setpictureName(e);
        }}
      ></TextField>
      <Fab
        style={{
          backgroundColor: "#74B9FF",
        }}
        onTouchStart={() => {
          $("#file-selector").trigger();
        }}
      >
        <AddToPhotos
          style={{ color: "white", position: "absolute" }}
        ></AddToPhotos>
        <input
          id="file-selector"
          type="file"
          accept="image/*"
          style={{
            paddingLeft: "100px",
            position: "relative",
            height: "100px",
            width: "100px",
          }}
          onChange={(e) => {
            if (e.target.files[0]) {
              setpicture(e.target.files[0]);
              setpictureName(e.target.files[0].name);
              console.log(e.target.files[0].name + " selected");
            }
          }}
        />
      </Fab>
      <br />
      <br />
      {/* the blog title text field */}
      <TextFieldComponent
        value={content}
        title="Blog Content"
        multiline="true"
        onchange={(e) => {
          setcontent(e);
        }}
        type="text"
      ></TextFieldComponent>
      <br />
      <br />
      <Button
        variant="contained"
        style={{
          backgroundColor: "#74B9FF",
          color: "white",
          width: "120px",
          height: "50px",
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default CreateBlogsComponent;
