import React from "react";
import ToastBody from "./ToastBody";
import ToastHeader from "./ToastHeader";
import styles from "../../assets/css/toast/Toast.module.css";

export default function Toast({ openShow, onClose }) {
  console.log(openShow);
  return (
    <div
      className={
        openShow ? `${styles.toast} ${styles.active}` : `${styles.toast}`
      }
    >
      <ToastHeader onClick={onClose} />
      <ToastBody />
    </div>
  );
}
