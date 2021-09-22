import React from "react";
import { TextField } from "@material-ui/core";

function TextFieldComponent({
  title: title,
  value: value,
  onchnage: onchange,
  type: type,
}) {
  return (
    <TextField
      label={title}
      type={type}
      variant="filled"
      value={value}
      onChange={(e) => {
        onchange(e);
      }}
      InputProps={{
        disableUnderline: true,
      }}
    ></TextField>
  );
}

export default TextFieldComponent;
