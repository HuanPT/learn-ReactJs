import React, { useState } from "react";
import "../../assets/css/Tab.css";
import TabItem from "./TabItem";
import TabContent from "./TabContent";

export default function Tab({ items = [], defaultActive = 0 }) {
  const [active, setActive] = useState(defaultActive);

  const header = items.map((item, index) => (
    <TabItem
      key={index}
      onClick={() => setActive(index)}
      isActive={index === active}
    >
      {item.title}
    </TabItem>
  ));

  const content = items.map((item, index) => (
    <TabContent key={index} isActive={index === active}>
      {item.content}
    </TabContent>
  ));
  return (
    <div>
      <div className="Tab">{header}</div>
      <div className="listContent">{content}</div>
    </div>
  );
}
