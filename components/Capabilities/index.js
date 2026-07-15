import React from "react";
import styles from "./Capabilities.module.css";
import CapabilitiesCard from "./Capabilitiescard";

const capabilityItems = [
  {
    heading: "Agentic AI Engineering",
    desc: "Multi-step agent workflows with LangChain, LangGraph, and the Vercel AI SDK across multiple LLM providers",
  },
  {
    heading: "RAG and Retrieval Systems",
    desc: "Retrieval pipelines over time-series and unstructured data using pgvector and cosine similarity",
  },
  {
    heading: "MCP and Tool Calling",
    desc: "MCP server integrations that extend agents with advanced tool-calling and orchestration flows",
  },
  {
    heading: "AI Backend Systems",
    desc: "FastAPI and NestJS services with Redis, BullMQ, and workflow orchestration built for concurrent AI workloads",
  },
  {
    heading: "Frontend Engineering",
    desc: "React, Next.js, and Preact Signals with CSR, SSR, and ISSR rendering for high-performance products",
  },
  {
    heading: "Web3 and Fintech Delivery",
    desc: "Smart contract integrations across Ethereum, Solana, and TON with TradingView and ApexCharts data UI",
  },
];

const Capabilities = () => {
  return (
    <div className={styles.CapabilitiesWrapper}>
      <div className="container">
        <div className={styles.CapabilitiesInner}>
          <h2>My Capabilities</h2>
          <p>
            Agentic AI systems, retrieval pipelines, and the frontend and
            platform engineering needed to ship them to production.
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
