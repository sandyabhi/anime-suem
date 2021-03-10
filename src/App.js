import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"
import Main from "./components/Main.js"
import Nav from "./components/Nav.js"
import SideBar from "./components/SideBar"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState("")

  const getTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((res) => res.json())
    setTopAnime(temp.top.slice(0, 7));
  }

  useEffect(() => {
    getTopAnime();

  }, [])
 
	const handleSearch = e => {
		e.preventDefault();

		fetchAnime(search);
	}

	const fetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		setAnimeList(temp.results);
	}
  
  return (
    <>
           <div>
        <Header />
        <Nav
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
             />
        <SideBar topAnime={topAnime} />
        <Home
     
          animeList={animeList}
        />
        <Main />
        <Footer />
      </div>
    
    </>
  );
}

export default App;
