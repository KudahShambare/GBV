import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";

const SocialWorkers = () => {
	const [employeeID, setEmployeeID] = useState("");
	const [password, setPassword] = useState("");
	const [formWarning, setFormWarning] = useState("");
	const history = useHistory();
	const handleForm = (e) => {
		switch (e.target.id) {
			case "employeeID":
				setEmployeeID(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	};
	const validateForm = () => {
		if (!password || !employeeID) {
			return [false, "All fields required"];
		}
		return [true, "Valid Form"];
	};
	const submitForm = (e) => {
		e.preventDefault();

		const isFormValid = validateForm();
		if (!isFormValid[0]) {
			setFormWarning(isFormValid[1]);
			return;
		}

		setFormWarning("");
		const userType = "Social worker";
		const form_data = { employeeID, password, userType };

		fetch("http://localhost:8000/user-login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form_data),
		})
			.then((response) => {
				if (response.status === 200) {
					if (
						window.confirm(
							'If you click "OK" you will be redirected to the social workers dashboard. Please ensure that you log out when not using it and report any misuse or issues to management.'
						)
					) {
						window.location.href =
							"http://localhost:3000/social-worker-dashboard";
					}
				} else {
					return response.json();
				}
			})
			.then((result) => {
				alert(result.msg);
			})
			.catch((err) => alert(err));
	};

	return (
		<>
			<NavBar />
			<br />
			<div>
				<div id="form-container" class="rounded">
					<form id="form" class="offset-lg-3 col-lg-6">
						<header id="form-header">
							<h3 class="textblack">Login - Social Worker</h3>
						</header>
						{/*
					{formWarning.length > 0 ? (
						<p id="form-warning">{formWarning}</p>
					) : null}
					*/}

						<div class="offset-lg-3 col-lg-6 col-md-6 mb-2">
							<label class="textblack">Employee ID</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								value={employeeID}
								name="id"
								id="employeeID"
								type="text"
								placeholder="Enter your employee ID"
							/>
							<label class="textblack">Password</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								name="password"
								id="password"
								type="password"
								placeholder="Enter password"
							/>
							<button
								class="mr-2 form-control btn btn-success"
								type="submit"
								onClick={(e) => {
									submitForm(e);
									// <SocialWorkerDashboard />;
								}}
								style={{ backgroundColor: "green" }}
							>
								Log In
							</button>
							{/*	</Link>*/}
							<p
								class="textblack"
								onClick={() => history.push("/social-worker-signup")}
								id="login-redirect-prefix"
							>
								Don't have an Account?{" "}
								<span id="login-redirect" style={{ color: "green" }}>
									Create Account
								</span>
							</p>
						</div>
					</form>
					<br />
				</div>
			</div>
		</>
	);
};

export default SocialWorkers;
