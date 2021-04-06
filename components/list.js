import React, { useState } from "react";
import styles from "../styles/List.module.scss";
import Task from "./tasks";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [late, setLate] = useState([]);

  const generateList = () => {
    return (
      <ul>
        {tasks.map((element, index) => {
          return (
            <Task
              title={element.title}
              key={"task" + index}
              handleSelect={() => select(element)}
            />
          );
        })}
      </ul>
    );
  };
  const handleAdd = (task) => {
    setTasks([...tasks, { title: userInput, key: userInput }]);
    setUserInput("");
  };

  const select = (task) => {
    setSelected([...selected, task]);
  };

  const moveToCompleted = () => {
    setCompleted([...completed, ...selected]);
    setSelected([]);
  };
  const moveToLate = () => {
    setLate([...late, ...selected]);
    setSelected([]);
  };
  const generateCompleted = () => {
    return (
      <ul>
        {completed.map((task, index) => {
          return <li>{task.title}</li>;
        })}
      </ul>
    );
  };
  const generateLate = () => {
    return (
      <ul>
        {late.map((task, index) => {
          return <li>{task.title}</li>;
        })}
      </ul>
    );
  };
  return (
    <section className={styles.container}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
          value={userInput}
        ></input>
        <button
          onClick={() => {
            handleAdd(userInput);
          }}
        >
          Add
        </button>
      </div>
      <div className={styles.taskBox}>
        <div className={styles.tasks}>
          <h1 className={styles.title}>Tasks:</h1>
          {generateList()}
          <button
            className={styles.completedButton}
            onClick={() => moveToCompleted()}
          >
            Move to Completed
          </button>
          <button className={styles.lateButton} onClick={() => moveToLate()}>
            Move to Late
          </button>
        </div>

        <div className={styles.completed}>
          <h1 className={styles.title}>Completed:</h1>
          {generateCompleted()}
        </div>
        <div className={styles.late}>
          <h1 className={styles.title}>Late:</h1>
          {generateLate()}
        </div>
      </div>
    </section>
  );
};

export default List;
