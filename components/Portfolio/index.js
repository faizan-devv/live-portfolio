import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import Portfolicard from "./portfolioCard";
import fortfolioData from "../../portfolioData.js";

const Portfolio = () => {
  const initialState = fortfolioData;
  const [portfolioCards, setPortfolioItems] = useState(initialState);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (link, index) => {
    setActiveIndex(index);
    let category = initialState.filter((card) => {
      if (link === "All") {
        return initialState;
      } else {
        return card.category === link;
      }
    });
    console.log(category);
    setPortfolioItems(category);
  };

  const portfolioLinks = ["All", "logo", "websites", "mobile"];

  return (
    <div id="Portfolio" className={styles.portfolioWrapper}>
      <div className="container">
        <div className={styles.portfolioInner}>
          <h3>Portfolio</h3>
          <div className={styles.portfolioNav}>
            {portfolioLinks.map((link, index) => {
              return (
                <button
                  onClick={() => handleOnClick(link, index)}
                  className={activeIndex === index ? "active" : "unactive"}
                >
                  {link}
                </button>
              );
            })}
          </div>
          <div className={styles.portfoliCardsWrapper}>
            {portfolioCards.map((item, index) => {
              return (
                <Portfolicard
                  img={item.image}
                  category={item.category}
                  title={item.heading}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
