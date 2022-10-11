import React from "react";

const AdminSignUp =()=>{

	return(
			<form>
		<input type="text" name="admin-name" placeholder="First Name" required />
		<input type="text" name="admin-surname" placeholder="Last Name" required />
		<input type="text" name="employee-id" placeholder="Employee ID" required />
		<input type="email" name="admin-email" placeholder="Email" required />
		<input type="password" name="admin-password" placeholder="password" required />
         <button> Sign Up </button>

         <span> Already Have An Account </span>


		</form>


		)
}
export default AdminSignUp;