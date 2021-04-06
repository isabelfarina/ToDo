import React, { useState } from "react";
import styles from "../styles/Task.module.scss";
const Task = (props) => {
  const [check, setCheck] = useState(false);
  const selected = () => {
    setCheck(!check);
    console.log(check);
    props.handleSelect();
  };

  return (
    <li className={styles.task}>
      <p>{props.title}</p>
      <input type="checkbox" onChange={() => selected()} />
    </li>
  );
};
export default Task;
