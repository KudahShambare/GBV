import React from "react";

const LogInRefOrg =()=>{
	return(
<div className="form-ref-org">
<h3> Refferal Organisation Sign-in </h3>

<form>

<input type="text" placeholder="Organisation Name" required/>
<input type="email" placeholder="Organisation Email" required/>
<input type="text" placeholder="Organisation Phone" required/>
<input type="text" placeholder="Organisation Rep" required/>
<input type="email" placeholder="Rep Email" required />
<input type="text" placeholder="Rep Phone" required/> <br/>
<button className="form-buttons"> Sign In </button>
</form>
</div>
		)
}
export default LogInRefOrg;