import { useState } from "react";
import searchIcon from "../assets/Search-icon.svg";
import styles from "./Search.module.css";
import navbarStyles from "../Navbar/Navbar.module.css";

const Search = ({ data = [], page }) => {   // ✅ CRITICAL FIX
  const [value, setValue] = useState("");
  const [search, setSearch] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    const arr = data.filter((album) =>
      album.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearch(arr);
  };

  const handleSubmit = () => {
    console.log("click");
  };

  return (
    <div className={navbarStyles.searchField}>
      <input
        type="search"
        placeholder="Search a album of your choice"
        value={value}
        onChange={handleInput}
      />

      <img
        src={searchIcon}
        alt="Search Icon"
        onClick={handleSubmit}
        className={styles.searchIcon}
      />

      {/* <div className={styles.searchResultWrapper}>
        {value.length > 0 && (
          <div className={styles.searchResult}>
            {!search.length ? (
              <h1 className={styles.notFound}>No Match Found!</h1>
            ) : (
              search.map((album) => (
                <div className={styles.albumWrapper} key={album.id}>
                  <div className={styles.imgWrapper}>
                    <img
                      src={album.image}
                      alt=""
                      className={styles.albumImg}
                    />
                  </div>

                  <div className={styles.albumHeadingWrapper}>
                    <p className={styles.albumTitle}>{album.title}</p>
                    <p className={styles.artists}>
                      {page === "home"
                        ? album.songs[0].artists.join(", ")
                        : album.artists.join(", ")}
                      .....
                    </p>
                  </div>
                  <div className={styles.followersWrapper}>
                    <p className={styles.followers}>
                      {page === "home" && album.follows && (
                        <>{(album.follows / 1000).toFixed(1)}k Follows</>
                      )}
                      {page === "song" && album.likes && (
                        <>{(album.likes / 1000).toFixed(1)}k💖</>
                      )}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Search;
