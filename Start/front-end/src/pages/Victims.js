import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ReportCase from "../components/ReportCase";

const Victims=()=>{

	return(
<>
<NavBar/>
<div className="pages"> 

<h2> GBV Victims </h2>

<p className="fix"> Give a brief story aabout GBV and how to avoid it  </p>

<ReportCase/>

 </div>
<Footer/>
</>
		)
}
export default Victims;