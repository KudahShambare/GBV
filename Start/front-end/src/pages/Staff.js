import React from "react";
import {Link} from "react-router-dom"

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Staff=()=>{
	return(
<>
<NavBar/>
<div className="pages">  

<Link to="/">
<button>  Administrator </button>
</Link>


<Link to="/">
<button>  Auxillary Social Worker </button>
</Link>
<Link to="/">
<button>  Social Worker </button>
</Link>


 </div>
<Footer/>
</>
		)
}
export default Staff;