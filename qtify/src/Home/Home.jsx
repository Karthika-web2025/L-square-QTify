import { useEffect, useState } from "react";
import { fetchTopAlbums } from "../API/albums";
import Section from "../Section/Section";

const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const data = await fetchTopAlbums();
        setTopAlbums(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getAlbums();
  }, []);

  return (
    <Section
      title="Top Albums"
      data={topAlbums}
      type="albums"
      loading={loading}
    />
  );
};

export default Home;
