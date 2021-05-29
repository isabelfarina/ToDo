import React, { useState } from "react";
import styles from "../styles/Body.module.scss";

const mealTime = () => {
  let today = new Date();
  let currentHr = today.getHours();
  const setMeal = () => {
    if (currentHr < 12) {
      return "Breakfast";
    } else if (currentHr < 18 && currentHr > 12) {
      return "Lunch";
    } else {
      return "Dinner";
    }
  };

  return <h2 className={styles.subtitle}>Whats for {setMeal()} today?</h2>;
};

const logMeal = () => {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  let today = new Date();
  let currentHr = today.getHours();

  const handleBreakfast = (e) => {
    setBreakfast(e.target.value);
    e.preventDefault();
  };
  const handleLunch = (e) => {
    e.preventDefault();
    setLunch(e.target.value);
  };

  const handleDinner = (e) => {
    e.preventDefault();
    setDinner(e.target.value);
  };
  if (currentHr < 12) {
    return (
      <form>
        <label>
          Add a Breakfast item:
          <input name="meal" />
        </label>
        <input
          onSubmit={(e) => handleBreakfast(e)}
          type="submit"
          value="submit"
        />
      </form>
    );
  } else if (currentHr < 18 && currentHr > 12) {
    return (
      <form>
        <label>
          Add a Lunch item:
          <input name="meal" />
        </label>
        <input value="submit" type="submit" onSubmit={(e) => handleLunch(e)} />
      </form>
    );
  } else {
    return (
      <form>
        <label>
          Add a Dinner item:
          <input name="meal" />
        </label>
        <input onSubmit={(e) => handleDinner(e)} type="submit" value="submit" />
      </form>
    );
  }
};
const Body = () => {
  return (
    <section>
      {mealTime()}
      {logMeal()}
    </section>
  );
};
export default Body;
