import React from "react";
import Button from "../Button/Button";
import styles from "../../assets/css/offcanvas/CanvasHeader.module.css";

export default function CanvasHeader({ onClick }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>title</h2>
      <Button onClick={onClick}>{"x"}</Button>
    </div>
  );
}
