import React from "react";

const SocialWorkerSignUp = ()=>{
	
	return(

		<div className="staff-forms">
		<h4> Touching Nations Social Worker Sign In</h4>
<form>
		<input type="text" name="social-worker-name" placeholder="First Name" required />
		<input type="text" name="social-worker-surname" placeholder="Last Name" required />
		<input type="text" name="employee-id" placeholder="Employee ID" required />
		<input type="email" name="social-worker-email" placeholder="Email" required />
		<input type="password" name="social-worker-password" placeholder="password" required />
         <button className="form-buttons"> Sign Up </button>

         <span className="toggle-form"> Already Have An Account </span>


		</form>


		</div>
	)
}
export default SocialWorkerSignUp;