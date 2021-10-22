import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import about from "../../public/assets/images/about.png";
const About = () => {
  return (
    <div id="About" className={styles.aboutWrapper}>
      <div className="container">
        <div className={styles.aboutInner}>
          <div className={styles.aboutleft}>
            <h2>About Me</h2>
            <p>
              Hi I'm Faizan a self taught, full-stack JavaScript developer with
              a passion for motion design. My favorite development stack at the
              moment is React, Material Design, Node and MongoDB. Values I hold
              high are loyalty, reliability, authenticity and helping other
              achieve their success. Which is why I see projects through to the
              end and why I believe in not only creating beautiful software but
              also reliable and reflect the client's brand and that is easy to
              use so that it does not distract the a user experience
            </p>
            <p>
              Whether it’s creating servers in Node, connecting to MongoDB
              databases or designing unique user experiences per device whilst
              still maintaining a consistent brand experience I will bring your
              ideas to life.
            </p>
            <div className={styles.downloadCv}>
              <a href="/assets/CV.pdf" className={`btn`} download>
                Download CV
              </a>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <Image alt="" src={about} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
