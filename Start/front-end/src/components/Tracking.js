import React, {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";



const Tracking = ()=>{

	const history = useHistory();

//state
const [caseNumber,setCaseNumber]=useState("");

//capture case number
const getCase=(e)=>{
    e.preventDefault();
    setCaseNumber(e.target.value);
}

	const findCase = ()=>{

if(caseNumber.length!=0){

		if(caseNumber==5){
			alert("right");
			history.push("/my-case/"+caseNumber)
			

		}
		else{
			alert("wrong");
			history.back();
		}

}else{
	alert("Invalid Input")
}


	}
	return(
<div id="tracking">
	 	<h2> Track Case </h2>

<form>

<input type="text" placeholder="Case Number" name="case" required onChange={getCase}/> 
<button onClick={findCase} id="track-button">  Track </button>

</form>
</div>
		)
}
export default Tracking;