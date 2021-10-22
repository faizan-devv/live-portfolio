import React from "react";
import styles from "./Capabilities.module.css";
import CapabilitiesCard from "./Capabilitiescard";

const Capabilities = () => {
  return (
    <div className={styles.CapabilitiesWrapper}>
      <div className="container">
        <div className={styles.CapabilitiesInner}>
          <h2>My Capabilities</h2>
          <p>
            The Skill Set that i have worked hard for and currently posess.
          </p>
          <div className={styles.CapabilitiesBoxes}>
            <CapabilitiesCard heading='Web Design' desc='Bringing your ideas to life'/>
            <CapabilitiesCard heading='Next.js' desc='Creating Fast and Reliable Web Apps'/>
            <CapabilitiesCard heading='Gatsby.js' desc='Creating Optimized and Fast Static Web Sites'/>
            <CapabilitiesCard heading='Node.js' desc='Creating Robust and Secure Servers'/>
            <CapabilitiesCard heading='Abode XD' desc='Bringing Your Vision To life using WireFrames'/>
            <CapabilitiesCard heading='Git' desc='Contributing to the community'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
