import React from "react";
import Button from "../Button/Button";
import styles from "../../assets/css/toast/ToastHeader.module.css";

export default function ToastHeader({ Children = "Toast", onClick }) {
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.box}></div>
        <div className={styles.title}>{Children}</div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.public}>11 mins ago</div>
        <Button className={styles.btn} onClick={onClick}>
          {"x"}
        </Button>
      </div>
    </div>
  );
}
