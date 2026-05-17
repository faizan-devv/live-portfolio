import React from "react";
import styles from "./Capabilities.module.css";
import CapabilitiesCard from "./Capabilitiescard";

const capabilityItems = [
  {
    heading: "Frontend Leadership",
    desc: "Leading React and Next.js teams in Agile and SCRUM environments for large-scale product delivery",
  },
  {
    heading: "Rendering Architecture",
    desc: "CSR, SSR, and ISSR strategies designed for high-performance Web3 applications",
  },
  {
    heading: "Web3 Frontends",
    desc: "React, Next.js, Preact Signals, and smart contract integrations across Ethereum, Solana, and TON",
  },
  {
    heading: "Charting and Data UI",
    desc: "TradingView, ApexCharts, and Chart.js for financial dashboards and blockchain analytics",
  },
  {
    heading: "AI and Backend Systems",
    desc: "Vercel AI SDK, NestJS, Redis, BullMQ, pgvector, and workflow orchestration for scale",
  },
  {
    heading: "Web3 and Fintech Delivery",
    desc: "EVM, Uniswap V3, Jito, PostgreSQL, MongoDB, Docker, Linux, and production delivery under Agile workflows",
  },
];

const Capabilities = () => {
  return (
    <div className={styles.CapabilitiesWrapper}>
      <div className="container">
        <div className={styles.CapabilitiesInner}>
          <h2>My Capabilities</h2>
          <p>
            Frontend systems, rendering strategies, and platform engineering
            work for modern Web3, fintech, and AI products.
          </p>
          <div className={styles.CapabilitiesBoxes}>
            {capabilityItems.map((item) => {
              return (
                <CapabilitiesCard
                  key={item.heading}
                  heading={item.heading}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
