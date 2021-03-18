import React from 'react'
import "../style/AniCard.css"
import { Typography, Paper, Link, GridList, GridListTile, FormControl, Input, IconButton, Grid, Card } from '@material-ui/core'


function AniCard({ anime }) {
	return (
		<>
			<Grid className="anicrdcont" >
				<Grid container item sm >
					<Paper elevation={3} className="anicrdppr"

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
			{/* <Typography variant="body2" component="h2" paragraph={true} >
							{anime.synopsis}
						</Typography>
				 */}
		
			
		</>
	)
}

export default AniCard
