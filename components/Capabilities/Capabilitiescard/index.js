import React from "react";
import styles from "./CapabilitiesCard.module.css";
import capabilities from "../../../public/assets/images/capabilities.png";
import Image from "next/image";
const CapabilitiesCard = ({ heading, desc }) => {
  return (
    <div className={styles.CapabilitiesBox}>
      <div className={styles.CapabilitiesDiv}>
        <Image alt="" src={capabilities} />
        <h4>{heading}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default CapabilitiesCard;
