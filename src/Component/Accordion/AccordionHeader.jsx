import React from "react";

export default function AccordionHeader({ children, onClick }) {
  
  return (
    <h2 className="accordion-header">
      <button className="accordion-button" onClick={onClick}>
        {children}
      </button>
      <span></span>
    </h2>
  );
}
