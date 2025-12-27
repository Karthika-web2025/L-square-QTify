import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data = {} }) => {
  const { image, title, follows } = data;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image || "https://via.placeholder.com/300x300"}
          alt={title || "Album"}
          className={styles.image}
        />
      </div>
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
