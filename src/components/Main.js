import React from 'react'

import { Typography, Paper, Link, Grid} from '@material-ui/core'

function Main({ topAnime }) {
    return (
        <>
                    {topAnime.map(anime => (
                        <Grid container item xs={1} className="anicrdcont">
                            <Paper elevation={3} className="anicrdppr">
                                <Link>
                                    <img
                                        style={{ maxHeight: 300 }}
                                        src={anime.image_url}
                                        alt={anime.title} />

                                </Link>
                                <Typography variant="h5" component="h5" >
                                    {anime.title}
                                </Typography>
                                <Typography variant="body2" component="h2" paragraph={true} >
                                    {anime.synopsis}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
             
        </>
    )
}

export default Main
