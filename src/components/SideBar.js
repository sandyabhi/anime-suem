import React from 'react'
import "../style/SideBar.css"
function SideBar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(anime => (
                    <a href={anime.url}
                        target="-blank"
                        key={anime.mal_id}
                        rel="noref"
                    >
                        {anime.title}
                    </a>
                ))}
            </nav>
        </aside>
    )
}

export default SideBar
