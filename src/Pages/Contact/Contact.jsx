import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactbox}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2>Contact me</h2>
          <input type="text" className={styles.field} placeholder="Your Name" />
          <input
            type="text"
            className={styles.field}
            placeholder="Your Email"
          />
          <input type="text" className={styles.field} placeholder="Phone" />
          <textarea placeholder="Message" className={styles.field}></textarea>
          <button className={styles.btn}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
