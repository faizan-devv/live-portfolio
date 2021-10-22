import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import headerShape from "../../public/assets/images/header-shape.png";

const Header = () => {
  const [toogle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  const toogleMenu = () => {
    setToggle(toogle === "" ? "on" : "");
    setMenu(menu === "" ? "show" : "");
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerShape}>
            <Image src={headerShape} alt="" />
          </div>
          <div className={styles.logo}>
            <Image alt="" src={logo} />
          </div>
          <div onClick={toogleMenu} id={styles.toggle} className={`${toogle}`}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className={`${styles.navBar} `}>
            <nav className={`${styles.nav} ${menu}`}>
              <a href="/#About ">About</a>
              <a href="/#Portfolio">Portfolio</a>
              <a href="/#Hire">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
