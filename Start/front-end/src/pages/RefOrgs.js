import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RegisterRefOrg from "../components/RegisterRefOrg";
import LogInRefOrg from "../components/LogInRefOrg";

const RefOrgs=()=>{
	return(
		<>
		<NavBar/>
<div className="pages">
<section>
<h2> Reffering Organisations </h2>

<p> Give a brief explanation of what a reffering organisation is  </p>
</section>
<RegisterRefOrg/>
<LogInRefOrg/>

</div>
<Footer/>
</>

		)
}
export default RefOrgs;