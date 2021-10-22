import React from "react";
import styles from "./Avatar.module.css";
const Avatar = (props) => {
  return <img alt={props.image} src={props.image} />;
};

export default Avatar;
