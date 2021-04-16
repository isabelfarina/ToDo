import React, { useState } from "react";
import styles from "../styles/Body.module.scss";

const mealTime = () => {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  let today = new Date();
  let currentHr = today.getHours();

  
  return (
    <h2>Whats for </h2>
};

const Body = () => {
  return (
    <section>
      <h2>Whats for {mealTime()} today?</h2>
    </section>
  );
};
export default Body;
