import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = ()=>{
	return(
<div className="staff-forms">

<h4> Administrator Log In </h4>

<form>
<input type="email" name="admin-email" placeholder="Email" required />
<input type="text" name="admin-id" placeholder="Touching Nations ID" required/>
<input type="password" name="admin-password" placeholder="Password" required/>
{/*Temporary Link to be replaced by page redirect*/}
<Link to="/manager-dashboard">
<button className="form-buttons" >Log In </button>
</Link>
<span className="toggle-form" > Don't have an account </span>

</form>


</div>
		)
}
export default AdminLogin;