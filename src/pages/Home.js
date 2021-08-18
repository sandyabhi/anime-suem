import React from "react";
import "../styles/Home.css";
import AnimeCard from "../components/AnimeCard";

function Home(props) {
  return (
    <main>
      <div className="home">
        <form className="search-box" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Search ..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>

{/* if there is no text in the search bar it will show top anime(by popularity)
 and on searching it will show search results */}
      {!props.search ? (
        <div className="card-main">
          {props.topAnime.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      ) : (
        <div className="card-main">
          {props.animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      )}

    </main>
  );
}

export default Home;
