import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


const CaseDetails = ()=>{

const [caseInfo,setCaseInfo] = useState("unresolved");
const [status,setStatus]= useState();
const params = useParams();

useEffect(()=>{
	//check the status of the project
	const chechStatus=()=>{

	if(params.number=='5'){
		setStatus("in-progress");
	}
}

chechStatus();
},[status])
	return (
<>
		<NavBar/>
		<div className="pages">

		<div id="case-status">

		<section className={caseInfo}> 

		<h5> Case Opened </h5>
		<p>{status}</p>

		</section>

			<section className={caseInfo}> 
	<h5> Case In Progress </h5>
	
		</section>
	

	<section className={caseInfo}> 
	<h5> Case Resolved </h5>
		</section>




		</div>

		</div>
		<Footer/>
		</>
 
		)
}
export default CaseDetails;