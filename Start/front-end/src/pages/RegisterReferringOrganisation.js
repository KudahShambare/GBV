import React from "react";
import NavBar from "../Components/NavBar";
function RegisterReferringOrganisation() {
	return (
		<>
			<NavBar />
			<div id="referingRegistrationContainer">
				<h4 style={{textAlign: "left"}}> If you want to register your organisation please fill the form below:</h4>
				<form
					method="post"
					action="http://localhost:8000/referring-org-form"
					id="referingRegistration"
				>
					<section>
						<label> Organisation Name</label>
						<br />
						<input type="text" className="referingRegistrationInput" name="orgName" />
					</section>
					<section>
						<label>Location</label>
						<br />
						<input type="text" className="referingRegistrationInput" name="location" />
					</section>
					<section>
						<label>Contact Number </label>
						<br />
						<input type="number" className="referingRegistrationInput" name="contactNum" />
					</section>
					<section>
						<label>Email </label>
						<br />
						<input type="email" className="referingRegistrationInput" name="email" />
					</section>
					<section>
						<label>Organisation Representative's Name </label>
						<br />
						<input type="text" className="referingRegistrationInput" name="authPerson" />
					</section>
					<section>
						<label>Organisation's Representative Contact </label>
						<br />
						<input type="number" className="referingRegistrationInput" name="authPersonContact" />
					</section>
					<section>
						<label> Organisation Type</label>
						<br />
						<input type="text"  className="referingRegistrationInput" name="orgType" />{" "}
					</section>
					{/* <section>
						{" "}
						<label>Touching Nation ID </label>
						<br />
						<input type="text" name="touchingNationsID" />{" "}
					</section>
					<section>
						<label>Date Created</label>
						<br />
						<input type="date" name="dateCreated" />{" "}
					</section>
					<section>
						<label>Date Updated</label>
						<br />
						<input type="date" name="dateUpdated" />{" "}
					</section> */}

					<button style={{ backgroundColor: "green" ,width:"40vw" }}>Register</button>
				</form>
			</div>
		</>
	);
}

export default RegisterReferringOrganisation;
