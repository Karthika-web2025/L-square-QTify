import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data = {} }) => {
  // Destructure with safe defaults
  const { image, title, follows } = data;

  return (
    <div className={styles.card} data-testid="album-card">
      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <img
          src={image || "https://via.placeholder.com/300x300"}
          alt={title || "Album"}
          className={styles.image}
        />
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <Chip
          label={`${follows ? (follows / 1000).toFixed(1) : 0}k Follows`}
          size="small"
          className={styles.chip}
        />
        <p className={styles.albumName}>{title || "Album Name"}</p>
      </div>
    </div>
  );
};

export default Card;
