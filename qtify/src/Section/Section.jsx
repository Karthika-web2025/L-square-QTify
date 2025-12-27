import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import SongsTabs from "../SongsTabs/SongsTabs";
import styles from "./Section.module.css";

const Section = ({ title, apiEndpoint, type }) => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    axios.get(apiEndpoint).then((res) => {
      setData(res.data);
    });
  }, [apiEndpoint]);

  // 🎵 SONG FILTERING
  const filteredData =
    type === "song" && selectedGenre !== "all"
      ? data.filter((song) => song.genre.key === selectedGenre)
      : data;

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>{title}</h2>

        {/* ❌ NO SHOW ALL FOR SONGS */}
        {type !== "song" && (
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {/* 🎵 SONG TABS */}
      {type === "song" && (
        <SongsTabs
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      )}

      {/* 🎯 RENDER LOGIC */}
      {type !== "song" && showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <Carousel
          data={filteredData}
          renderItem={(item) => <Card data={item} type={type} />}
        />
      )}
    </section>
  );
};

export default Section;
