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
            <CapabilitiesCard heading='React.js' desc='Creating Stateful Client Side Rendrred Applications'/>
            <CapabilitiesCard heading='Node.js' desc='Creating Robust and Secure Servers'/>
            <CapabilitiesCard heading='Express js' desc='Redefining HTTP module and Middleware '/>
            <CapabilitiesCard heading='Graph QL' desc='Creating Flexible Queries and Mutations'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
