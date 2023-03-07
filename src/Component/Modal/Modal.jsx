import React from "react";
import Button from "../Button/Button";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";
import "./Modal.css";

export default function Modal({ open, onClose }) {
  const handleStop = (e) => {
    e.stopPropagation();
  };
  if (open) {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-wrapper" onClick={handleStop}>
          <ModalTitle onClose={onClose} />
          <ModalContent />
          <ModalFooter onClose={onClose} />
        </div>
      </div>
    );
  }
}
