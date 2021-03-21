import React from "react";
import "./TextInput.scss";

const TextInput = (props) => {
  const { id, label, type } = props;
  const [value, setValue] = React.useState("");

  return (
    <div className={`textInput ${value.length > 0 && "active"}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label for={id}>{label}</label>
    </div>
  );
};

export default TextInput;
