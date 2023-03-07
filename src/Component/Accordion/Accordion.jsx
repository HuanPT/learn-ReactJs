import React from "react";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items = [], defaultOpen = 0 }) {
  const [selectedItem, setSelectedItem] = useState(defaultOpen);

  const children = items.map((item, index) => (
    <AccordionItem
      key={index}
      {...item}
      isOpen={index == selectedItem}
      onClick={() => setSelectedItem(index)}
    />
  ));

  return <div className="accordion">{children}</div>;
}
