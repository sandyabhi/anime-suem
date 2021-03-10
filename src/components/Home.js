import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/Search'
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SideBar from "./SideBar"
import AniCard from "./AniCard"
function Home(props) {

 

    return (
        <>
            <div>
                {props.animeList.map(anime => (
                    <div>
                        {anime.title}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
