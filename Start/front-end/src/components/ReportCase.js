import React, { useState,useEffect} from "react";

import noGBV from "../assets/NoGBV.png";

const ReportCase=()=>{

;

	
	return(
		<>
<div>
<section id="report">
<h2> Report Case </h2>
<img src={noGBV} alt="ooops" id="report-img"/>
</section>
<section>
<form id="report-form">
<input className="report-input" type="text" name="first-name" placeholder="First Name" required/>
<input className="report-input" type="text" name="last-name" placeholder="Last Name" required/>
<input className="report-input" type="text" name="age" placeholder="Age" pattern="[0-9]{2}" required/>
<section className="staff-radios">
<label>Gender</label><br/>
<span>Female</span> <input type="radio" name="gender" value="female"required/>
<span>Male</span> <input type="radio" name="gender" value="male"required/>
</section>


<input className="report-input" type="tel" name="phone-number" placeholder="10 Digit Phone Number" pattern="[0-9]{10}"  required/>
<input className="report-input" type="email" name="email" placeholder="Email" required/> <br/>
<button className="form-buttons"> Submit </button>

</form>

</section>


</div>
<div id="victim-add-info" >
<h2> Additional Resources</h2>

<p className="fix"> Provide Additional Help Resources. Maybe Links to articles with helpful information </p>

</div>
</>

		)
}
export default ReportCase;