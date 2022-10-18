import React from "react";

const SocialWorkerLogin = ()=>{
	return(
<div className="staff-forms">  
<h4> Touching Nations Social Worker Log In </h4>
		<form>
 <input type = "email" name="social-login-email" placeholder="Email" required/>
 <input type = "password" name="social-login-password" placeholder="Password" required/>
<button className="form-buttons">Log In </button>
 <span className="toggle-form"> Don't have an account </span>
		</form>
</div>


		)
}
export default SocialWorkerLogin;