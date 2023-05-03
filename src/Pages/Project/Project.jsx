import React from "react";
import styles from "./Project.module.css";
import sid from "../../media/sidA.jpg";

function Project() {
  return (
    <div className={styles.project}>
      <h1>Projects</h1>
      <div className={styles.box}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img src={sid} alt="" />
          </div>
          <div className={styles.details}>
            <h2>
              SomeOne Famous
              <br />
              <span>Director</span>
            </h2>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBx}></div>
          <div className={styles.details}>
            <h2>
              SomeOne Famous
              <br />
              <span>Producer</span>
            </h2>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBx}></div>
          <div className={styles.details}>
            <h2>
              SomeOne Famous
              <br />
              <span>Actor</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
