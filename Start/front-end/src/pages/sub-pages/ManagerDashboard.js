import React,{ useRef,useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,BarElement,CategoryScale,LinearScale } from 'chart.js';
import {Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend,BarElement,CategoryScale,LinearScale);


import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const ManagerDashboard = ()=>{
		const data = {
			labels:["Male Victims","Female Victims"],
			datasets:[
			{
				data:[20,80],
				backgroundColor:["red","blue"]
			}
			]
		}
const monthlyReports={
	labels:["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
	datasets:[
{

data:[1,5,4,2,3,10,15,0,13,5,4,10],
backgroundColor:["red","pink","yellow","green","orange","purple","gold","white","azure","violet","indigo","green"]
}
	]
}


	return (	
           <>
           <NavBar/>
           	<div className="pages">
          <div id="overview">
         <h1>Project overview</h1>
         
<Pie data={data}/>
<h2>Monthly Cases Report </h2>
<Bar data={monthlyReports} />
         

          </div>

		</div>
		<Footer/>
           </>
	

		)
}
export default ManagerDashboard;