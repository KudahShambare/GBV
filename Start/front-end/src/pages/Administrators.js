import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AdminSignUp from "../components/Staff-Components/AdminSignUp";

const Administrators = ()=>{
	
	return(
<>
<NavBar/>

<div className="pages">
		<section className="blank">  </section>

<AdminSignUp/>




</div>
 <Footer/>

</>

	)
}
export default Administrators;