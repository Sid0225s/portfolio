import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contactbox} data-aos="fade-up">
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
