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
          <form action="https://formspree.io/f/myyaqbwj" method="POST">
            <input
              type="text"
              name="Name"
              className={styles.field}
              placeholder="Your Name"
              required
            />
            <input
              required
              name="email"
              type="email"
              className={styles.field}
              placeholder="Your Email"
            />
            <input
              type="text"
              name="Phone no."
              required
              className={styles.field}
              placeholder="Phone"
            />
            <textarea
              required
              name="message"
              placeholder="Message"
              className={styles.field}
            ></textarea>
            <input
              type="submit"
              value="Send"
              placeholder="Send"
              className={styles.btn}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
