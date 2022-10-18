import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuxillaryLogin from  "../components/Staff-Components/AuxillaryLogIn";
import AuxillarySignUp from "../components/Staff-Components/AuxillarySignUp";

const Auxillary = ()=>{
	
	return(
		<>
<NavBar/>

<div className="pages">
<AuxillarySignUp/>
<AuxillaryLogin/>
</div>
 <Footer/>

</>


	)
}
export default Auxillary;