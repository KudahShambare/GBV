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

<section className="blank">  </section>
<Tracking/>



<ReportCase/>

 </div>
<Footer/>
</>
		)
}
export default Victims;