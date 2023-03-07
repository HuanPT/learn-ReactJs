import React from "react";
import Button from "../Button/Button";

export default function TabItem({ children, onClick, isActive }) {
  const classes = isActive ? "active" : "";

  return (
    <h2>
      <Button className={classes} onClick={onClick}>
        {children}
      </Button>
    </h2>
  );
}
