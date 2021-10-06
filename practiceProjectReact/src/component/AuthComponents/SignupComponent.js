import React from "react";
import "./LoginComponent.css";
import {
  Paper,
  Button,
  Slide,
  Typography,
  TextField,
  Fab,
} from "@material-ui/core";
import { AddToPhotos } from "@material-ui/icons";
import $ from "jquery";

function SignupComponent({
  emailSignup: emailSignup,
  checkedSignup: checkedSignup,
  passwordSignup: passwordSignup,
  username: username,
  image: image,
  imageName: imageName,
  base64Image: base64Image,
  setimageName: setimageName,
  setbase64Image: setbase64Image,
  setemailSignup: setemailSignup,
  setpasswordSignup: setpasswordSignup,
  setcheckedSignup: setcheckedSignup,
  submitFunctionSignup: submitFunctionSignup,
  setusername: setusername,
  setimage: setimage,
  loginFunction: loginFunction,
  onImageSelect: onImageSelect,
}) {
  return (
    <div className="login-card">
      <Slide
        direction="up"
        in={checkedSignup}
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 2)",
          exit: "cubic-bezier(0, 1.5, .8, 1)",
        }}
        timeout={{ appear: 700, enter: 700, exit: 700 }}
      >
        <Paper style={{ width: "400px", height: "490px", padding: "20px" }}>
          <Typography
            variant="h3"
            style={{ color: "#707070", marginBottom: "40px" }}
          >
            Signup
          </Typography>
          <TextField
            label="Username"
            type="text"
            variant="filled"
            value={username}
            fullWidth
            style={{ maxWidth: "100%", marginBottom: "10px" }}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            InputProps={{
              disableUnderline: true,
            }}
          ></TextField>

          <TextField
            label="Email"
            type="email"
            variant="filled"
            value={emailSignup}
            fullWidth
            style={{ maxWidth: "100%", marginBottom: "10px" }}
            onChange={(e) => {
              setemailSignup(e.target.value);
            }}
            InputProps={{
              disableUnderline: true,
            }}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            variant="filled"
            value={passwordSignup}
            fullWidth
            style={{ maxWidth: "100%", marginBottom: "10px" }}
            onChange={(e) => {
              setpasswordSignup(e.target.value);
            }}
            InputProps={{
              disableUnderline: true,
            }}
          ></TextField>
          <div style={{ display: "flex" }}>
            <TextField
              type="text"
              variant="filled"
              disabled={true}
              label={
                imageName.length > 31
                  ? imageName.substring(0, 31) + "..."
                  : imageName
              }
              fullWidth
              style={{
                maxWidth: "100%",
                margin: "0px 0px 20px 0px",
              }}
              onChange={(e) => {
                setimage();
              }}
              onClick={(e) => {
                $("#file-selector").trigger("click");
              }}
              InputProps={{
                disableUnderline: true,
              }}
            ></TextField>
            <Fab
              onClick={() => {
                $("#file-selector").trigger("click");
              }}
              style={{
                margin: "0px 0px 0px 10px",
                backgroundColor: "#74B9FF",
                width: "65px",
                height: "55px",
              }}
            >
              <AddToPhotos
                style={{ color: "white", marginLeft: "100px" }}
              ></AddToPhotos>
              <input
                id="file-selector"
                type="file"
                accept="image/*"
                style={{
                  paddingLeft: "100px",
                  height: "100px",
                  width: "100px",
                }}
                onChange={(e) => {
                  onImageSelect(e);
                }}
              />
            </Fab>
          </div>
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#74B9FF",
              color: "white",
              height: "50px",
              zIndex: "2",
              marginBottom: "0",
              paddingBottom: "0",
            }}
            onClick={() => {
              submitFunctionSignup();
            }}
          >
            Signup
          </Button>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "12px",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="body2" style={{ color: "#707070" }}>
              Have an account?{" "}
              <Button
                style={{ margin: "0", padding: "0", color: "#74B9FF" }}
                onClick={() => {
                  loginFunction();
                }}
              >
                Login
              </Button>
            </Typography>
          </div>
        </Paper>
      </Slide>
    </div>
  );
}

export default SignupComponent;
