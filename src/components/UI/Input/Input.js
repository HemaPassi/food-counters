import React from "react";
import "./Input.scss";

const Input = (props) => (
  <div className="form-field">
    <label className="label">{props.label}</label>
    <input className="input" {...props}></input>
  </div>
);
export default Input;
