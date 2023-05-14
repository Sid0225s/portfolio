import React from "react";
import Styles from "./Services.module.css";
import { Gi3DHammer } from "react-icons/gi";

function Services() {
  return (
    <div>
      <div className={Styles.Services} id="services">
        <h2>Services</h2>
        <div className={Styles.row}>
          <div class={Styles.column}>
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <Gi3DHammer />
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class={Styles.column}>
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <Gi3DHammer />
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class={Styles.column}>
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <Gi3DHammer />
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
