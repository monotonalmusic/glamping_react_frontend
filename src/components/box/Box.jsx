import React from "react";
import styles from "./box.module.css";

const Box = ({ title, children, width, height, color }) => {
  const boxStyles = {
    width: width || "auto",
    height: height || "auto",
    backgroundColor: color || "#33626C", // Default color if no prop is provided
  };

  return (
    <div className={styles.box} style={boxStyles}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};


export default Box;

