import React from "react";
import {Timeline} from "react-twitter-widgets";

import SocialIcons from "../components/SocialIcons";
import cyf from "../assets/cyf.png";

const Footer=()=>{
    return(
        <footer>
        <div id="footer-contents">
        
        <div id="our-contact">
<section>
            <h2> Contact Us </h2>
<SocialIcons/>
</section>
<section id="map">
<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=touching nations cape town&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
</section>






</div>



        </div>
<span > &copy; Copyrights Touching Nations 2022</span><br/>
<span> Powered by  <a href="https://www.codeyourfuture.io/" target="_black">   <img src={cyf} alt="oooops" id="cyf"/> </a> </span>
        </footer>
    )
}
export default Footer;



