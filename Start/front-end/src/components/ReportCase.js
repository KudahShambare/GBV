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
<input type="text" name="age" placeholder="Age" required/>
<input type="text" name="gender" placeholder="Gender" required/>
<input type="text" name="phone-number" placeholder="10  Digit Phone Number" required/>
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