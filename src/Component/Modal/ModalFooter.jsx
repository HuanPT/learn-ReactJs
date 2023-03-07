import React from "react";
import Button from "../Button/Button";

export default function ModalFooter({ onClose }) {
  return (
    <div>
      <Button onClick={onClose}>{"Close"} </Button>
      <Button onClick={onClose}>{"Save & change"}</Button>
    </div>
  );
}
