import React from "react";

const SocialWorkerSignUp = ()=>{
	
	return(

		<form>
		<input type="text" name="social-worker-name" placeholder="First Name" required />
		<input type="text" name="social-worker-surname" placeholder="Last Name" required />
		<input type="text" name="employee-id" placeholder="Employee ID" required />
		<input type="email" name="social-worker-email" placeholder="Email" required />
		<input type="password" name="social-worker-password" placeholder="password" required />
         <button> Sign Up </button>

         <span> Already Have An Account </span>


		</form>

	)
}
export default SocialWorkerSignUp;