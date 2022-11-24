const Callback = ()=>{
	return(
<div className="demos">

<h3> We Can Call You Back </h3>

<p> You can shcedule a call with us by filling the form below: </p>

<form id="callback">

<input type="text" name="fullname" placeholder="Full Name"/>
<input type="text" name="phone" placeholder="10 Digit Phone Number"/>
<input type="date" name="date" />
<input type="time" name="time"/>
<button className="form-buttons">  Shcedule</button>
 

</form>

</div>

		)
}
export default Callback;