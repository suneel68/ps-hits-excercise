import React from "react";
import styles from "./card.module.css";

const Card = ({ title, auther }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div>Sent by {auther}</div>
    </div>
  );
};

export default Card;
