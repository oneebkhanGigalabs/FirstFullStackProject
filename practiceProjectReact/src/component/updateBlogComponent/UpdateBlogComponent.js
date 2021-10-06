import React from "react";
import TextFieldComponent from "../createBlog/TextFieldComponent";
import { Typography, Fab, TextField, Button } from "@material-ui/core";
import { AddToPhotos } from "@material-ui/icons";
import $ from "jquery";

function UpdateBlogComponent({
  base64Image: base64Image,
  pictureName: pictureName,
  picture: picture,
  description: description,
  title: title,
  getBase64: getBase64,
  onImageSelect: onImageSelect,
  setdescription: setdescription,
  setpicture: setpicture,
  setpictureName: setpictureName,
  settitle: settitle,
  setbase64Image: setbase64Image,
  onSubmitForm: onSubmitForm,
}) {
  return (
    <div style={{ padding: "20px 30px" }}>
      <div>
        <Typography variant={"h2"} style={{ fontWeight: "bold" }}>
          Update Blog
        </Typography>
      </div>
      <br />
      <br />
      {/* the blog title text field */}
      <TextFieldComponent
        value={title}
        title="Blog Title"
        multiline="false"
        maxWidth="500px"
        onchange={(e) => {
          settitle(e);
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
        onClick={(e) => {
          $("#file-selector").trigger("click");
        }}
        onChange={(e) => {
          setpictureName(e);
        }}
      ></TextField>
      <Fab
        style={{
          backgroundColor: "#74B9FF",
          zIndex: "2",
        }}
        onTouchStart={() => {
          $("#file-selector").trigger("click");
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
            onImageSelect(e);
          }}
        />
      </Fab>
      <br />
      <br />
      {/* the blog title text field */}
      <TextFieldComponent
        value={description}
        title="Blog description"
        multiline="true"
        onchange={(e) => {
          setdescription(e);
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
          zIndex: "2",
        }}
        onClick={() => {
          onSubmitForm();
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default UpdateBlogComponent;
