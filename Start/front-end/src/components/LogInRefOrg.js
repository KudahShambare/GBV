
const LogInRefOrg =()=>{
	return(
<div className="form-ref-org">
<h3> Refferal Organisation Sign-in </h3>

<form className="staff-forms">

<input type="text" placeholder="Organisation Name" name="name" required/><br/>
<input type="email" placeholder="Organisation Email" name="email" required/><br/>
<input type="text" placeholder="Organisation Rep"  name="repname" required/><br/>
<input type="email" placeholder="Rep Email" name="repemail" required />
 <br/>
<button className="form-buttons"> Sign In </button>
</form>
</div>
		)
}
export default LogInRefOrg;