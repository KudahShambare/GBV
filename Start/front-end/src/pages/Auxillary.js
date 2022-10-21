import React,{useRef} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

/********************#################################   USEREF ERROR FOR TOGGLING BETWEEN 2 COMPONENTS  */
const Auxillary = ()=>{
		const form =useRef();

	const hide = ()=>{
		form.current.style.display="none";
	}
	
	return(
		<>
<NavBar/>

<div className="pages">
<div className="staff-forms" ref={form}>
<h4>  Auxillary Social Worker Sign Up </h4>
		<form>
		<input type="text" name="auxillary-name" placeholder="First Name" required />
		<input type="text" name="auxillary-surname" placeholder="Last Name" required />
		<input type="text" name="auxillary-id" placeholder="Employee ID" required />
		<input type="email" name="auxillary-email" placeholder="Email" required />
		<input type="password" name="auxillary-password" placeholder="password" required />
         <button className="form-buttons"> Sign Up </button>

         <span className="toggle-form" onClick={hide}> Already Have An Account </span>


		</form>
		</div>
		 <div className="staff-forms" id="auxillary-login">
<h4> Auxillary Social Worker Log In </h4>

<form>
 <input type="email" name="auxillary-login-email" placeholder="Email" required/>
 <input type="password" name="auxillary-login-password" placeholder="Password" required/>
<button className="form-buttons"> Log In </button>
 <span className="toggle-form"> Don't have an account </span>

</form>

 </div>
</div>
 <Footer/>

</>


	)
}
export default Auxillary;