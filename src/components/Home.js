import React, { useContext, useEffect, useState } from 'react'
import "../style/Home.css"
import { SearchContext } from '../context/Search'
import { FormControl, Input, IconButton, Grid, GridList } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SideBar from "./SideBar"
import AniCard from "./AniCard"
import Filter from "./Filter"


function Home(props) {
    return (
        <>
       <Filter/>
            <Grid className="maincont">  
            {props.animeList.map(anime => (
                <AniCard
                    anime={anime}
                    key={anime.mal_id}
                />
            ))}
            </Grid>
        </>
    )
}

export default Home
