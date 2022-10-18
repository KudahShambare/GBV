import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AdminLogin from "../components/Staff-Components/AdminLogin";
import AdminSignUp from "../components/Staff-Components/AdminSignUp";

const Administrators = ()=>{
	
	return(
<>
<NavBar/>

<div className="pages">
<AdminSignUp/>
<AdminLogin/>

</div>
 <Footer/>

</>

	)
}
export default Administrators;