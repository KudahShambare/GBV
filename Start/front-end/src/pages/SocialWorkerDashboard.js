import React, { useEffect, useState } from "react";
import Forms from "../Components/SocialWorkerDashboardForms";
import Col from "react-bootstrap/Col";
import SocialWorkerDashboardNavBar from "../Components/SocialWorkerDashboardNavBar";

const Dashboard = () => {
	const [caseInfo, setCaseInfo] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				"http://localhost:8000/social-worker-dashboard"
			);
			const body = await result.json();
			setCaseInfo(body);
		};

		fetchData();
	}, []);
	// const data = caseInfo;
  
	return (
		<>
			<SocialWorkerDashboardNavBar />
			<br />
			{caseInfo.map((post) => {
				return (
					<Col sm={12} md={12} lg={8} xl={12}>
						<Forms
							caseId={post.case_number}
							caseType={post.case_type}
							gender={post.gender}
							language={post.languages}
							ethnicity={post.ethnicity}
							educationalLevel={post.education_level}
							typeOfAbuse={post.abuse}
							genderOfAbuser={post.details_of_incident}
							relationshipToAbuser={post.relationship_to_client}
							history={post.details_of_incident}
						/>
					</Col>
				);
			})}
			<br />
		</>
	);
};

export default Dashboard;
