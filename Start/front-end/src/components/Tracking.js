import React, {useEffect,useState} from "react";



const Tracking = ()=>{

//state
const [caseNumber,setCaseNumber]=useState("");

//capture case number
const getCase=(e)=>{
    e.preventDefault();
    setCaseNumber(e.target.value);
}

	const findCase = ()=>{

		alert("case Number\n"+caseNumber);

	}
	return(
<div id="tracking">
	 	<h2> Track Case </h2>

<form>

<input type="text" placeholder="Case Number" name="case" required onChange={getCase}/> 
<button onClick={findCase}> Track </button>

</form>
</div>
		)
}
export default Tracking;