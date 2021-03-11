import React from 'react'
import "../style/Footer.css"
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
       
            <Typography className="footer">
                <InstagramIcon />
                <GitHubIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
            </Typography>
      
    )
}

export default Footer
