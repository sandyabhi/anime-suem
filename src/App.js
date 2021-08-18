import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";


function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  // Fetching top anime (by popularity) from jikan API
  const getTopAnime = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(data.top);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };
  
  // Fetching searched anime from jikan API
  const fetchAnime = async (anime_name) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${anime_name}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(data.results);
  };

  // get getTopAnime() as the site render
  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <>
    <div className="App" >
      <Header />

      {/*  Main Content  */}
      <Home
        // passing props
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
        animeList={animeList}
        topAnime={topAnime}
      />

      <Footer />
      </div>
    </>
  );
}

export default App;
