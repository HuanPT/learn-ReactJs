import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import "./AccordionItem.css";
export default function AccordionItem({ title, content, isOpen, onClick }) {
  const itemClasses = isOpen
    ? `accordion-item accordion-item--active`
    : `accordion-item`;
  return (
    <div className={itemClasses}>
      <AccordionHeader onClick={onClick}>{title}</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </div>
  );
}
