import React from 'react'
import "../style/Main.css"
import { Typography, Paper, Link, Grid, GridListTile} from '@material-ui/core'

function Main({ topAnime }) {
    return (
        <>
        <Grid className="maincontent">
                    {topAnime.map(anime => (
                        
                        <Grid className="crdcont" >
                            <Grid container item xs={1} >
                            <Paper elevation={2} className="crdppr">
                               
                                    <img
                                        style={{ maxHeight: 300 }}
                                        src={anime.image_url}
                                        alt={anime.title} />

                           
                                <Typography variant="h6" component="h5" >
                                    {anime.title}
                                </Typography>
                         
                            </Paper>
                            </Grid>
                        </Grid>
                       
                    ))}
             </Grid>
        </>
    )
}

export default Main
