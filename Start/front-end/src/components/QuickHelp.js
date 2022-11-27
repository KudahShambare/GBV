import React from "react";
import { SocialIcon } from 'react-social-icons';

const QuickHelp=()=>{
    return(
        <div>
<section id="quick-help">
<h4>You can get quick help from our social workers during our office times stated below </h4>
<ul className="fix">
<li>Monday-Friday: 08.00-15.30</li>
<li>Saturdays: times here</li>
<li>Sundays: times here</li>
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