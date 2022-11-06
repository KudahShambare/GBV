
import {Link} from "react-router-dom";

const RegisterRefOrg=()=>{
	return(
		<div className="form-ref-org">
<h3> Register  Your Reffering Organisation Today</h3>

<form>
<input type="text" placeholder="Organisation Name" required/>
<input type="email" placeholder="Organisation Email" required/>
<input type="text" placeholder="Organisation Phone" required/>
<input type="text" placeholder="Organisation Rep" required/>
<input type="email" placeholder="Rep Email" required />
<input type="text" placeholder="Rep Phone" required/> <br/>
<button className="form-buttons"> Register </button>


</form>
<Link to="/referring-organisations-sign-in">
<span> Already Registered </span>
</Link>
</div>
		)
}
export default RegisterRefOrg;