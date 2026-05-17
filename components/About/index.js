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
              I am a senior software engineer based in Islamabad with hands-on
              experience across AI systems, Web3 products, fintech workflows,
              and full-stack application delivery. A core part of my work is
              leading frontend engineering for high-scale React and Next.js
              applications where performance, rendering strategy, and product
              quality directly affect growth.
            </p>
            <p>
              In Agile and SCRUM teams, I have led frontend delivery for Web3
              products built with React and Next.js, architected CSR, SSR, and
              ISSR experiences from scratch, integrated smart contract flows
              across Ethereum, Solana, and TON, and shipped a Telegram Mini App
              used by more than 2 million users with Preact Signals. I also
              bring strong experience with charting libraries including
              Chart.js, ApexCharts, and TradingView for data-heavy financial and
              blockchain interfaces.
            </p>
            <div className={styles.downloadCv}>
              <a href="/assets/CV.pdf" className={`btn`} download>
                Download Resume
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
