import React, { useState, useEffect } from "react";
import styles from "./Hire.module.css";
import apiKey from "../../emailkey";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const Hire = () => {
  const handleClick = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(
        (result) => {
          console.log("nacho");
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  useEffect(() => {
    init("user_M7OMGHq82v7K4jTXztm8n");
    console.log("yadd", apiKey);
    console.log("bari yadd ", apiKey.TEMPLATE_ID, apiKey.USER_ID);
  }, []);
  return (
    <div id="Hire" className={styles.hireWrapper}>
      <div className="container">
        <div className={styles.hireInner}>
          <div className={styles.hireContent}>
            <h2>Let’s Make Something Great Together</h2>
            <p>
              Why hustle and write an email ? Use the form below to send me an
              automated one !
            </p>
          </div>
          <div>
            <form onSubmit={(e) => handleClick(e)} className={styles.hireForm}>
              <div className={`${styles.inputDiv} ${styles.nameInput}`}>
                <input placeholder="name" type="text" name="name" id="name" />
              </div>
              <div className={`${styles.inputDiv} ${styles.emailInput}`}>
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className={`${styles.inputDiv} ${styles.phoneInput}`}>
                <input
                  placeholder="phone#"
                  type="tel"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className={`${styles.inputDiv} ${styles.buddgetInput}`}>
                <input
                  placeholder="budget $"
                  type="number"
                  name="budget"
                  id="budget"
                />
              </div>
              <div className={`${styles.inputDiv} ${styles.messgaeTextarea}`}>
                <textarea
                  placeholder="message"
                  rows="6"
                  name="message"
                  id="message"
                />
              </div>
              <div className={styles.hireSubmit}>
                <button className={`btn ${styles.btnHire}`} type="submit">
                  Hire Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
