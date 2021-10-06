import React from "react";
import "./LoginComponent.css";
import { Paper, Button, Slide, Typography, TextField } from "@material-ui/core";

function LoginComponent({
  email: email,
  checked: checked,
  password: password,
  setemail: setemail,
  setpassword: setpassword,
  setchecked: setchecked,
  submitFunction: submitFunction,
  signupFunction: signupFunction,
}) {
  return (
    <div className="login-card">
      <Slide
        direction="up"
        in={checked}
        appear={checked}
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 2)",
          exit: "cubic-bezier(0, 1.5, .8, 1)",
        }}
        timeout={{ appear: 700, enter: 700, exit: 700 }}
        mountOnEnter
        unmountOnExit
      >
        <Paper style={{ width: "400px", height: "360px", padding: "20px" }}>
          <Typography
            variant="h3"
            style={{ color: "#707070", marginBottom: "40px" }}
          >
            Login
          </Typography>

          <TextField
            label="Email"
            type="email"
            variant="filled"
            value={email}
            fullWidth
            style={{ maxWidth: "100%", marginBottom: "10px" }}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            InputProps={{
              disableUnderline: true,
            }}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            variant="filled"
            value={password}
            fullWidth
            style={{ maxWidth: "100%", marginBottom: "20px" }}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            InputProps={{
              disableUnderline: true,
            }}
          ></TextField>
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#74B9FF",
              color: "white",
              height: "50px",
              zIndex: "2",
            }}
            onClick={(e) => {
              submitFunction();
            }}
          >
            Login
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
              Don't have an account?{" "}
              <Button
                style={{ margin: "0", padding: "0", color: "#74B9FF" }}
                onClick={() => {
                  signupFunction();
                }}
              >
                SignUp
              </Button>
            </Typography>
          </div>
        </Paper>
      </Slide>
    </div>
  );
}

export default LoginComponent;
