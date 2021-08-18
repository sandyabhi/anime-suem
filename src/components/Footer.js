import "../styles/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <footer>
   <div className="footer">
    
      <p>Created by: Sandeep Kumar Patel</p>
      
      <a href="https://github.com/sandyabhi/anime-suem" className="foots">
        <GitHubIcon /> Github
      </a>
 
      <a href="https://www.linkedin.com/in/sandeep-kumar-patel47/" className="foots">
        <LinkedInIcon /> Linkedin
      </a>
     
   </div>
    
    </footer>
  );
}

export default Footer;
