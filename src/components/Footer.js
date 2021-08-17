import "../styles/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button } from "@material-ui/core";

function Footer() {
  return (
    <footer>
   
    <p>Created by: Sandeep Kumar Patel</p>
      <a href="">
        <GitHubIcon />
      </a>
      <a href="">
        <LinkedInIcon />
      </a>
    
    </footer>
  );
}

export default Footer;
