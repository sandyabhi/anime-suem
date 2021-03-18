import React from 'react'
import "../style/Main.css"
import { Typography, Paper, Link, Grid, GridListTile} from '@material-ui/core'

function Main({ topAnime }) {
    return (
        <>
        <Grid className="maincontent">
                    {topAnime.map(anime => (
                        
                        <Grid className="crdcont" >
                            <Grid container item sm >
                            <Paper elevation={3} className="crdppr"
                             
                            >
                               <Link href={anime.url}>
                                    <img
                                        style={{ maxHeight: 300 }}
                                        src={anime.image_url}
                                        alt={anime.title} />
</Link>
                           
                                <Typography variant="body2" component="h5" >
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
