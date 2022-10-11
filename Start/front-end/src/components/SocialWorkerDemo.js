import React from "react";
import { Link } from "react-router-dom";


const SocialWorkerDemo=()=>{
	return(
<div className="demos">
<h3> Social Workers</h3>

<p> A brief explanation about the social workers </p>

<Link to="/social-worker">

<button className="learn-more"> Learn More  >>> </button>
</Link>
</div>
		)
}
export default SocialWorkerDemo;