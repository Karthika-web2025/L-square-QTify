import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

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
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* CONDITIONAL RENDERING */}
      {collapsed ? (
        <Carousel
          data={albums}
          renderItem={(album) => <Card data={album} />}
        />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
