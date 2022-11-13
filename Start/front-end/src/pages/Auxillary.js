import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Auxillary = ()=>{
	
	return(
		<>
<NavBar/>

<div className="pages">]
<section  className="blank"> </section>
<div className="staff-forms" >
<h4>  Auxillary Social Worker Sign Up </h4>
		<form>
		<input type="text" name="auxillary-name" placeholder="First Name" required />
		<input type="text" name="auxillary-surname" placeholder="Last Name" required />
		<input type="text" name="auxillary-id" placeholder="Employee ID" required />
		<input type="email" name="auxillary-email" placeholder="Email" required />
		<input type="password" name="auxillary-password" placeholder="password" required />
         <button className="form-buttons"> Sign Up </button>

         <Link to="/auxillary-social-worker-log-in">
         <span className="toggle-form" > Already Have An Account </span>
         </Link>


		</form>
		</div>
		
</div>
 <Footer/>

</>


	)
}
export default Auxillary;