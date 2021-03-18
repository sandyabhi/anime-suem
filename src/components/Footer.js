import React from 'react'
import "../style/Footer.css"
import { Grid, Link, BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (

        <Grid className="footer" >
            <Grid>
            <Link><InstagramIcon /></Link>


            <Link>   <FacebookIcon /> </Link>


            <Link> <LinkedInIcon /></Link>



            <Link><GitHubIcon /></Link>


            <Link> <TwitterIcon /></Link>
            </Grid>
        </Grid>

    )
}

export default Footer
