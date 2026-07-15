import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import linkdin from "../../public/assets/images/linkedin.png";
import shape2 from "../../public/assets/images/shape2.png";
const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className="container">
        <div className={styles.bannerInner}>
          <div className={styles.circle}>
            <img src="assets/images/circle.png"></img>
          </div>
          <div className={styles.bannerLeft}>
            <span>Senior Software Engineer · Agentic AI</span>
            <h1>
              Faizan
              <br /> Rizwan
            </h1>
            <p>
              I build <span>AGENTIC AI</span> systems with LangChain, LangGraph,
              Vercel AI SDK, and FastAPI — multi-step agent workflows, RAG, and
              tool-calling, shipped with production-grade React and Next.js
              frontends.
            </p>
            <div className={styles.socialProfiles}>
              <p>Islamabad, Pakistan</p>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/faizan-rizwan-57462a217"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="" src={linkdin} />
                </a>
              </div>
            </div>
            <div className={styles.bannerButtons}>
              <a className={`btn`} href="/#Hire">
                Let&apos;s Talk
              </a>
              <a className={`btn`} href="/assets/CV.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.userImage}>
              <img alt="" src="/assets/images/user.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shape2}>
        <Image alt="" src={shape2} />
      </div>
    </div>
  );
};

export default Banner;
