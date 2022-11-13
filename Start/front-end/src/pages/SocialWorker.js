import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SocialWorkerSignUp from "../components/Staff-Components/SocialWorkerSignUp";

const SocialWorker = ()=>{
	
	return(
<>		
<NavBar/>
<div className="pages">
		<section className="blank">  </section>

<SocialWorkerSignUp/>

</div>
 <Footer/>

</>
	)
};
export default SocialWorker;