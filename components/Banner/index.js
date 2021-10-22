import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import instagram from "../../public/assets/images/insta.png";
import linkdin from "../../public/assets/images/linkedin.png";
import user from "../../public/assets/images/user.png";
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
            <span>Hello, I am </span>
            <h1>
              Faizan
              <br /> Rizwan
            </h1>
            <p>
              A young <span>FULL STACK</span> developer with a craze for
              building the next big thing.
            </p>
            <div className={styles.socialProfiles}>
              <p>Find me on </p>
              <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/fizi_4/" target="_blank">
                  {" "}
                  <Image alt="" src={instagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/faizan-rizwan-57462a217"
                  target="_blank"
                >
                  <Image alt="" src={linkdin} />
                </a>
              </div>
            </div>
            <div className={styles.bannerButtons}>
              <a className={`btn`} href="/#Hire">
                Hire Me
              </a>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.userImage}>
              <Image alt="" src={user} />
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
