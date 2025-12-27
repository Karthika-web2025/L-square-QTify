import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );
      setAlbums(res.data);
    };

    fetchTopAlbums();
  }, []);

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.collapse}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {(collapsed ? albums.slice(0, 4) : albums).map((album) => (
          <Card key={album.id} data={album} />
        ))}
      </div>
    </section>
  );
};

export default Section;
