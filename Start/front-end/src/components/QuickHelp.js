import React from "react";
import { SocialIcon } from 'react-social-icons';

const QuickHelp=()=>{
    return(
        <div>
<section id="quick-help">
<p>You can get quick help from our social workers during our office times stated below </p>
<ul className="fix">
<li>Mon-Friday: times here</li>
<li>Monday-Friday: times here</li>
<li>Saturdays: times here</li>
<li>Public Holidays: times here</li>
</ul>
<section id="quick-help-buttons">
<SocialIcon  network="whatsapp" url="https://www.google.com" target="_blank"/>
<SocialIcon network="email" url="https://www.facebook.com/wearetouchingnations/" target="_blank"/>

</section>
</section>

        </div>
    )
}
export default QuickHelp;