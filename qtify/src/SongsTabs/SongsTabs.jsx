import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import styles from "./SongsTabs.module.css";

const SongsTabs = ({ selectedGenre, setSelectedGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => setGenres(res.data.data));
  }, []);

  return (
    <Tabs
      value={selectedGenre}
      onChange={(e, val) => setSelectedGenre(val)}
      className={styles.tabs}
      TabIndicatorProps={{ className: styles.indicator }}
    >
      <Tab label="All" value="all" />

      {genres.map((genre) => (
        <Tab
          key={genre.key}
          label={genre.label}
          value={genre.key}
        />
      ))}
    </Tabs>
  );
};

export default SongsTabs;
