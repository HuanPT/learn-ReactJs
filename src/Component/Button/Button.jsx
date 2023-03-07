import React from "react";
import "./Button.css";

export default function Button({
  children,
  type,
  size,
  icon,
  disabled,
  className,
  onClick,
}) {
  const classNames = className === undefined ? "btn" : `btn ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
