import React from "react";

const RegisterRefOrg=()=>{
	return(
		<div className="form-ref-org">
<h3> Register  Your Reffering Organisation Today</h3>

<form>
<input type="text" placeholder="Organisation Name" required/>
<input type="email" placeholder="Organisation Email" required/>
<input type="text" placeholder="Organisation Phone" required/>
<input type="text" placeholder="Organisation Rep" required/>
<input type="email" placeholder="Rep Email" required />
<input type="text" placeholder="Rep Phone" required/> <br/>
<button> Register </button>


</form>
</div>
		)
}
export default RegisterRefOrg;