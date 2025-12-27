import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  if (!data) return null;

  const { image, title, follows } = data;

  return (
    <div className={styles.card} data-testid="album-card">
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      </div>

      <div className={styles.bottomSection}>
        <Chip
          label={`${Math.floor(follows / 1000)}k Follows`}
          size="small"
          className={styles.chip}
        />
        <p className={styles.albumName}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
