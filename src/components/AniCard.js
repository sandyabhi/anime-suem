import React from 'react'
import "../style/AniCard.css"
import { Typography, Paper, Link, GridList, GridListTile, FormControl, Input, IconButton, Grid, Card } from '@material-ui/core'


function AniCard({ anime }) {
	return (
		<>
			<Grid container item xs={1} className="anicrdcont">
				<Paper elevation={3} className="anicrdppr">
					
						<Link href={anime.url}>
							<img
								style={{ maxHeight: 300 }}
								src={anime.image_url}
								alt={anime.title} />
						</Link>

						<Typography variant="h5" component="h2" >
							{anime.title}
						</Typography>
						<Typography variant="body2" component="h2" paragraph={true} >
							{anime.synopsis}
						</Typography>
				
				</Paper>
			</Grid>
		
		</>
	)
}

export default AniCard
