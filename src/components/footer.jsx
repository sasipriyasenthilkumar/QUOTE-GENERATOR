import React from "react";
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
const Footer=()=>{
    return(
        <div className="footer">
        <div className="sb_footer section_padding">
        <div className="sb_footer-links">
        <div className="name">
        <h3>Sasipriya S</h3>
        </div>
        <div className="socialmedia">
        <h4>Available on</h4>
        <br></br>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
</a>
<a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
        </a>
        </div>
       
        
        </div>
        </div>
        </div>
    )
}
export default Footer;