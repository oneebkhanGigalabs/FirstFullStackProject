import React from "react";
import { TextField } from "@material-ui/core";

function TextFieldComponent({
  title: title,
  value: value,
  onchange: onchange,
  type: type,
  multiline: multiline,
  maxWidth: maxWidth,
}) {
  return multiline === "false" ? (
    <TextField
      label={title}
      type={type}
      variant="filled"
      value={value}
      fullWidth
      style={{ maxWidth: maxWidth }}
      onChange={(e) => {
        onchange(e.target.value);
      }}
      InputProps={{
        disableUnderline: true,
      }}
    ></TextField>
  ) : (
    <TextField
      label={title}
      type={type}
      variant="filled"
      value={value}
      maxRows={Infinity}
      minRows={7}
      multiline
      fullWidth
      style={{ maxWidth: "1000px" }}
      onChange={(e) => {
        onchange(e.target.value);
      }}
      InputProps={{
        disableUnderline: true,
      }}
    ></TextField>
  );
}

export default TextFieldComponent;
