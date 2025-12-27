import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false); // 👈 default: Carousel

  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get(apiEndpoint);
      setAlbums(res.data);
    };
    fetchAlbums();
  }, [apiEndpoint]);

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* TEST-EXPECTED LOGIC */}
      {showAll ? (
        // ✅ SHOW ALL → GRID
        <div className={styles.grid} data-testid="album-grid">
          {albums.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </div>
      ) : (
        // ✅ DEFAULT → CAROUSEL
        <Carousel
          data={albums}
          renderItem={(album) => <Card data={album} />}
        />
      )}
    </section>
  );
};

export default Section;
