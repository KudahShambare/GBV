import React from "react";

const AuxillaryLogin = ()=>{
	return(
 <div className="staff-forms" id="auxillary-login">
<h4> Auxillary Social Worker Log In </h4>

<form>
 <input type="email" name="auxillary-login-email" placeholder="Email" required/>
 <input type="password" name="auxillary-login-password" placeholder="Password" required/>
<button className="form-buttons"> Log In </button>
 <span className="toggle-form"> Don't have an account </span>

</form>

 </div>
		)
}
export default AuxillaryLogin;