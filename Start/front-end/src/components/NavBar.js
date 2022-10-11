import React, {useState} from "react";
import {Link} from "react-router-dom";

import logo from "../assets/Logo.png";
import hamburger from "../assets/Hamburger.png";

const NavBar=()=>{


	const [navClassName,setNavClassName]=useState("lower-nav-no-display")

	const changeStyle=()=>{
		if(navClassName==="lower-nav-no-display"){
		setNavClassName("lower-nav-display");
		}
		else{
			setNavClassName("lower-nav-no-display");
		}
	}
    return (
<>
<nav>
<section id="top-nav"> 
<Link to="/"><img src={logo} alt="Oooops" id="nav-logo"/>  </Link>

<img src={hamburger} alt="ooops" id="hamburger"  onClick={changeStyle}/>

</section>

<section  className={navClassName}>
<Link to="/Victims" className="nav-links"><span > GBV Victims</span></Link>
<Link to="/staff" className="nav-links"><span > Staff Members</span></Link>
<Link to="/referring-organisations" className="nav-links"><span > Referring Organisations</span></Link>
<Link to="/faq" className="nav-links"><span > Frequently Asked Questions</span></Link>
</section>
</nav>

</>

    )
}
export default NavBar;