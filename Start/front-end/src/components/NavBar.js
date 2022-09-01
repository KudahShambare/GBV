import React from "react";
import {Link} from "react-router-dom";

const NavBar=()=>{
    return (
<>
<nav>
<Link to="/"><img src="../assets/Touchingnationslogo.png" alt="Oooops"/>  </Link>
<Link to="/" className="nav-links"><span > Reffering Organisations</span></Link>

<Link to="/" className="nav-links"
><span > FAQ</span></Link>
<Link to="/" className="nav-links"><span > Staff Members</span></Link>
<Link to="/" className="nav-links"><span > GBV Victims</span></Link>
</nav>
</>

    )
}
export default NavBar;