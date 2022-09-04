import React from "react";

const ReportCase=()=>{
	return(
		<>
<div>
<section>
<h2> Report Case </h2>
</section>
<section>
<form>
<input type="text" name="first-name" placeholder="First Name" required/>
<input type="text" name="last-name" placeholder="Last Name" required/>
<input type="text" name="age" placeholder="Age" pattern="[0-9]{2}" required/>
<section id="report-case-gender">
<label>Gender</label><br/>
<span>Female</span> <input type="radio" name="gender" value="female"required/>
<span>Male</span> <input type="radio" name="gender" value="male"required/>
</section>


<input type="tel" name="phone-number" placeholder="10 Digit Phone Number" pattern="[0-9]{10}"  required/>
<input type="email" name="email" placeholder="Email" required/> <br/>
<button> Submit </button>

</form>

</section>


</div>
<div id="victim-add-info">
<h2> Additional Resources</h2>

<p> Provide Additional Help Resources. Maybe Links to articles with helpful information </p>

</div>
</>

		)
}
export default ReportCase;