import React, { useEffect } from "react";
import Styles from "./Project.module.css";
import sid from "../../media/Screenshot (54).png";
import proj2 from "../../media/Screenshot (1).png";
import proj3 from "../../media/Screenshot (112).png";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 7000 });
  }, []);
  return (
    <div className={Styles.container} id="project">
      <h1 data-aos="zoom-in">Projects</h1>
      <div className={Styles.cards}>
        <div className={Styles.card} data-aos="zoom-in-up">
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
        <div className={Styles.card} data-aos="zoom-in-up">
          <img src={proj2} alt="" />
          <div className={Styles.cardCon1}>
            <h2>Portfolio site</h2>
            <p>
              This is a Simple portfolio site designed and created by me using
              React library and my frontend skills.
            </p>
            <div className={Styles.but}>
              <a href="https://sidreactsite.netlify.app/">VISIT</a>
            </div>
          </div>
        </div>
        <div className={Styles.card} data-aos="zoom-in-up">
          <img src={proj3} alt="" />
          <div style={{ color: "white" }} className={Styles.cardCon}>
            <h2>Scroll Animation(PC)</h2>
            <p>
              It is a project using Reactjs which will have an amazing scroll
              animation.
            </p>
            <div className={Styles.but}>
              <a href="https://atgtaskscroll.netlify.app/">VISIT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
