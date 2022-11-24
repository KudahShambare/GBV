import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


const AuxillaryLogIn =()=>{
	return(
<>
<NavBar/>

<div className="pages">  
<section className="blank"> </section>
 <div className="staff-forms" id="auxillary-login">
<h4> Social Auxillary Worker Log In </h4>

<form>
 <input type="email" name="auxillary-login-email" placeholder="Email" required/>
 <input type="password" name="auxillary-login-password" placeholder="Password" required/>
<button className="form-buttons"> Log In </button>


</form>

 </div>


</div>
<Footer/>
</>

		)
}
export default AuxillaryLogIn;