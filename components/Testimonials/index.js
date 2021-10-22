import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import clientsData from "../../clientsData.js";
import Avatar from "./Avatar";
import Image from "next/image";
import map from "../../public/assets/images/map.png";
import quote from "../../public/assets/images/quote1.png";
const Testimonials = () => {
  const [clients, setClients] = useState(clientsData);
  const [review, setReview] = useState([clientsData[0]]);
  const initialState = clientsData;

  const handleClient = (clientName) => {
    const clientItem = initialState.filter((item) => clientName === item.name);
    setReview(clientItem);
    console.log(clientItem);
  };
  return (
    <div className={styles.testimonialsWrapper}>
      <div className={styles.testimonialsInner}>
        <div className="container">
          <h2>What my Client Says</h2>
          <p>A few words from a handful of clients that I have worked with.</p>
        </div>
        <div className={styles.clientsWrapper}>
          <div className={styles.clientsLeft}>
            <div className={styles.Clients}>
              <div className={styles.mapImage}>
                <Image alt="" src={map} />
              </div>

              <div className={styles.avatarWrapper}>
                {clients.map((client, index) => {
                  return (
                    <div
                      onClick={() => handleClient(client.name)}
                      className={styles.Avatar}
                    >
                      <Avatar image={client.image} key={index} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.clientsRight}>
            <Image alt="" src={quote} />
            {review.map((reviewText) => {
              return (
                <>
                  <p>
                    {reviewText.review}
                    <Image alt="" src={quote} />
                  </p>
                  <h5>-{reviewText.name}</h5>
                  <span>{reviewText.designation}</span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
