import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SocialWorkerSignUp from "../components/Staff-Components/SocialWorkerSignUp";
import SocialWorkerLogIn from  "../components/Staff-Components/SocialWorkerLogIn";

const SocialWorker = ()=>{
	
	return(
<>		
<NavBar/>
<div className="pages">

<SocialWorkerSignUp/>
<SocialWorkerLogIn/>

</div>
 <Footer/>

</>
	)
};
export default SocialWorker;