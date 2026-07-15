import React from "react";
import styles from "./Portfoliocard.module.css";
const Portfolicard = (props) => {
  return (
    <div className={styles.portfolioCardWrapper}>
      <div className={styles.portfolioCard}>
        <div className={styles.portfolioImg}>
          <img alt="" src={props.img} />
        </div>
        <div className={styles.portfolioOverlay}>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
          <span>{props.description}</span>
          {props.link && (
            <a href={props.link} target="_blank" rel="noreferrer">
              View
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolicard;
