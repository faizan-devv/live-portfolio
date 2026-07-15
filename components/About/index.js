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
              I am a senior software engineer based in Islamabad specializing
              in agentic AI systems. I architect multi-step agent workflows
              with LangChain, LangGraph, and the Vercel AI SDK, serve them
              through FastAPI and NestJS backends, and engineer RAG pipelines
              over time-series and unstructured data using pgvector. I also
              integrate MCP servers to extend agents with advanced
              tool-calling across multiple LLM providers.
            </p>
            <p>
              That AI work sits on a strong product engineering foundation. In
              Agile and SCRUM teams, I have led frontend delivery for Web3
              products built with React and Next.js, architected CSR, SSR, and
              ISSR experiences from scratch, integrated smart contract flows
              across Ethereum, Solana, and TON, and shipped a Telegram Mini App
              used by more than 2 million users with Preact Signals, along with
              data-heavy interfaces built on TradingView, ApexCharts, and
              Chart.js.
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
