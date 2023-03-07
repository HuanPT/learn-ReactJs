import React from "react";
import "../../assets/css/TabContent.css";

export default function TabContent({ children, isActive }) {
  const classes = isActive ? "content-item open" : "content-item";
  return <div className={classes}>{children}</div>;
}
