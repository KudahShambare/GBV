
import {Link} from "react-router-dom";

const RegisterRefOrg=()=>{
	return(
		<div className="form-ref-org">
<h3> Register  Your Reffering Organisation Today</h3>

<form method="post" className="staff-forms" action="https://ill-ruby-buffalo-yoke.cyclic.app/register-ref-org">

<input type="text" placeholder="Organisation Name" name="name" required /> <br/>
<input type="email" placeholder="Organisation Email" name="email" required /><br/>
<input type="text" placeholder="Organisation Phone" name="phone" /> <br/>
<input type="text" placeholder="Organisation Rep" name="repname" required /> <br/>
<input type="email" placeholder="Rep Email" name="repemail" required/> <br/>
<input type="text" placeholder="Rep Phone" name="repphone" required /> <br/>
<button className="form-buttons"> Register </button> <br/>

<Link to="/referring-organisations-sign-in">
<span> Already Registered </span>
</Link>

</form>

</div>
		)
}
export default RegisterRefOrg;