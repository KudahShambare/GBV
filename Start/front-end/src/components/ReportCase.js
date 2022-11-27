
import noGBV from "../assets/NoGBV.png";

const ReportCase=()=>{

;

	
	return(
		<>
<div id="report">
<section >
<h2> Report Case </h2>
<figure>

<img src={noGBV} alt="ooops" id="report-img"/>
</figure>
</section>
<section>
<form id="report-form" method="post" action="https://ill-ruby-buffalo-yoke.cyclic.app/cases">
<input className="report-input" type="text" name="firstname" placeholder="First Name" required/>
<input className="report-input" type="text" name="lastname" placeholder="Last Name" required/>
<input className="report-input" type="text" name="age" placeholder="Age" pattern="[0-9]{2}" required/>

<section className="report-radios">
<label>Gender</label><br/>
<span>Female</span> <input type="radio" name="gender" value="female"required/>
<span>Male</span> <input type="radio" name="gender" value="male"required/>
<span>Rather not say</span> <input type="radio" name="gender" value="hidden"required/>
</section>


<input className="report-input" type="tel" name="phonenumber" placeholder="10 Digit Phone Number" pattern="[0-9]{10}"  required/>
<input className="report-input" type="email" name="email" placeholder="Email" required/> <br/>
<button className="form-buttons"> Submit </button>

</form>

</section>


</div>

</>

		)
}
export default ReportCase;