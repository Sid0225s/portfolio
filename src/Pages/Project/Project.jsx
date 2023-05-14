import React from "react";
import Styles from "./Project.module.css";
import sid from "../../media/Screenshot (54).png";

function Project() {
  return (
    <div className={Styles.container} id="project">
      <h1>Projects</h1>
      <div className={Styles.cards}>
        <div className={Styles.card}>
          <img src={sid} alt="" />
          <div className={Styles.cardCon}>
            <h2>React Calculator</h2>
            <p>
              This is a Simple calculator make by using React Library using
              UseReducer Hook.It will follow BODMAS rule.
            </p>
            <div className={Styles.but}>
              <a href="https://sidcalculator.netlify.app/">VISIT</a>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <img src={sid} alt="" />
          <div className={Styles.cardCon}>
            <h2>React Calculator</h2>
            <p>
              This is a Simple calculator make by using React Library using
              UseReducer Hook.It will follow BODMAS rule.
            </p>
            <div className={Styles.but}>
              <a href="https://sidcalculator.netlify.app/">VISIT</a>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <img src={sid} alt="" />
          <div className={Styles.cardCon}>
            <h2>React Calculator</h2>
            <p>
              This is a Simple calculator make by using React Library using
              UseReducer Hook.It will follow BODMAS rule.
            </p>
            <div className={Styles.but}>
              <a href="https://sidcalculator.netlify.app/">VISIT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
