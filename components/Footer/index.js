import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import linkdin from "../../public/assets/images/linkedin.png";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <Image alt="" src={logo} />
          </div>
          <div className={styles.footerLiks}>
            <nav className={`${styles.nav} `}>
              <a href="/#About">About</a>
              <a href="/#Experience">Experience</a>
              <a href="/#Portfolio">Portfolio</a>
              <a href="/#Hire">Contact</a>
            </nav>
          </div>
          <p className={styles.cotactAddress}>
            PK / <a href="tel:+923315192277"> +92 331519 2277</a>
            <span> / </span>
            <a href="mailto:faizanrizwan2277@gmail.com">
              faizanrizwan2277@gmail.com
            </a>
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/faizan-rizwan-57462a217"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src={linkdin} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyRights}>
        <p>Copyright © 2026 | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
