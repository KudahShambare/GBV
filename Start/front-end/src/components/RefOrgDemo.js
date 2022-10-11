import React from "react";
import { Link } from "react-router-dom";


const RefOrgDemo=()=>{
	return(
<div className="demos">
<h3> Referring Organisations</h3>

<p>  Give a brief explanation of what are referring Organisations</p>

<Link to="/referring-organisations">
<button className="learn-more"> Learn More >>> </button>
</Link>


</div>
		)
};

export default RefOrgDemo;