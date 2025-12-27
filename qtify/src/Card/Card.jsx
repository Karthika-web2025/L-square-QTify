import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type = "album" }) => {
  if (!data) return null;

  const isSong = type === "song";

  return (
    <div className={styles.card} data-testid="card">
      {/* IMAGE */}
      <div className={styles.imageContainer}>
        <img
          src={data.image}
          alt={data.title}
          className={styles.image}
        />

        {/* CHIP */}
        <Chip
          label={
            isSong
              ? `${data.likes} Likes`
              : `${data.follows} Follows`
          }
          size="small"
          className={styles.chip}
        />
      </div>

      {/* TITLE */}
      <p className={styles.title}>{data.title}</p>
    </div>
  );
};

export default Card;
