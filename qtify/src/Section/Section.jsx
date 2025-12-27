import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title = "Top Albums" }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );
        setAlbums(response.data || []);
      } catch (err) {
        console.error("Failed to fetch albums:", err);
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleToggle = () => setCollapsed(!collapsed);

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
         <p >{title}</p>
        <button className={styles.collapseButton} onClick={handleToggle}>
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* Loader */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Grid of cards
        <div
          className={`${styles.grid} ${collapsed ? styles.collapsed : ""}`}
        >
          {albums.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
