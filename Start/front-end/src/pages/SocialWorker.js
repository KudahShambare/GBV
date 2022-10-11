import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SocialWorkerSignUp from "../components/SocialWorkerSignUp";
import SocialWorkerLogin from  "../components/SocialWorkerLogin";



const SocialWorker = ()=>{
	
	return(
<>		
<NavBar/>
<div className="pages">

<SocialWorkerSignUp/>
<SocialWorkerLogin/>

</div>
 <Footer/>

</>
	)
};
export default SocialWorker;