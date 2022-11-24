import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ReportCase from "../components/ReportCase";
import Tracking from "../components/Tracking";

const Victims=()=>{

	return(
<>
<NavBar/>
<div className="pages"> 

<h2> GBV Victims </h2>

<Tracking/>



<ReportCase/>

 </div>
<Footer/>
</>
		)
}
export default Victims;