import React from "react";
import styles from "./Experience.module.css";
import experienceData from "../../experienceData";

const Experience = () => {
  return (
    <div id="Experience" className={styles.experienceWrapper}>
      <div className="container">
        <div className={styles.experienceInner}>
          <h2>Experience</h2>
          <p className={styles.experienceLead}>
            Roles where I have shipped agentic AI, Web3, fintech, and product
            engineering work across fast-moving teams.
          </p>
          <div className={styles.timeline}>
            {experienceData.map((item) => {
              return (
                <div className={styles.experienceCard} key={item.company}>
                  <div className={styles.experienceMeta}>
                    <span>{item.period}</span>
                    <p>{item.location}</p>
                  </div>
                  <div className={styles.experienceContent}>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.summary}</p>
                    <ul>
                      {item.highlights.map((highlight) => {
                        return <li key={highlight}>{highlight}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
