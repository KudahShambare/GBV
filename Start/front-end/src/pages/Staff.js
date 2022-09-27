import React from "react";
import {Link} from "react-router-dom"

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Staff=()=>{
	return(
<>
<NavBar/>
<div className="pages">  

<section id="staff-container">
<Link to="/" className="staff-links">
<button >  Administrator </button>
</Link>


<Link to="/" className="staff-links">
<button >  Social Worker </button>
</Link>

<Link to="/" className="staff-links">
<button >  Auxillary Social Worker </button>
</Link>



</section>

 </div>
<Footer/>
</>
		)
}
export default Staff;