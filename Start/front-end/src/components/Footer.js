import React from "react";

import SocialIcons from "../components/SocialIcons";
import cyf from "../assets/cyf.png";

const Footer=()=>{
    return(
        <footer>
        <div id="footer-contents">
        <div id="our-contact">
            <h2> Contact Us </h2>
<SocialIcons/>
</div>
<div id="our-social">
    <h2>Social Updates</h2>

</div>
        </div>
<span > &copy; Copyrights Touching Nations 2022</span><br/>
<span> Powered by  <a href="https://www.codeyourfuture.io/" target="_black">   <img src={cyf} alt="oooops" id="cyf"/> </a> </span>
        </footer>
    )
}
export default Footer;