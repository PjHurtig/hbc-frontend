import React from "react";
import styles from "../styles/SmallImage.module.css";

// small image for mini image of gearitems
const SmallImage = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="small"
      />
      {text}
    </span>
  );
};

export default SmallImage;