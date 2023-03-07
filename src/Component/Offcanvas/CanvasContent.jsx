import React from "react";
import CanvasBody from "./CanvasBody";
import CanvasHeader from "./CanvasHeader";
import styles from "../../assets/css/offcanvas/CanvasContent.module.css";

export default function CanvasContent({ onClick }) {
  return (
    <div className={styles.content}>
      <CanvasHeader onClick={onClick} />
      <CanvasBody />
    </div>
  );
}
