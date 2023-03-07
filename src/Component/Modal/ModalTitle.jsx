import React from "react";
import Button from "../Button/Button";

export default function ModalTitle({ title = "Title", onClose }) {
  return (
    <div>
      <div className="title">
        {title}
        <Button onClick={onClose}>{"X"}</Button>
      </div>
    </div>
  );
}
