import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.card1}>
        <h2>About me</h2>
        <p>
          Hello, <br /> My Name is Sidhant Sadyal.I am from Una,Himachal
          Pradesh.
        </p>
        <div className={styles.pro}>
          <div className={styles.leftabout}>
            Skills :<br /> HTML , CSS , Javascript, ReactJs,Redux, MongoDB, Node
            Js , C++, C . <br />
          </div>
          <div className={styles.rightabout}>
            Education : <br /> December 2021 -June 2025 NIT Hamirpur,HP - Btech
            Mechanical Engineering
          </div>
        </div>
        <div className={styles.button}>
          <a href="https://docs.google.com/document/d/1S9HHN4f505d4vOIk_eZ3cUnSTPT--GnlILpu1VzsyQQ/edit#heading=h.9hamueqzod31">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
