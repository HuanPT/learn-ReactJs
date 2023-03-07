import React from "react";
import CanvasContent from "./CanvasContent";
import styles from "../../assets/css/offcanvas/OffCanvas.module.css";

export default function OffCanvas({ openCanvas, onClose }) {
  console.log(openCanvas);
  return (
    <div
      className={
        openCanvas ? `${styles.canvas}` : `${styles.canvas} ${styles.hide}`
      }
    >
      <div className={`${styles.overlay}`} onClick={onClose}></div>
      <CanvasContent onClick={onClose} />
    </div>
  );
}
