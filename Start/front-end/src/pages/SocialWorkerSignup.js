import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Signup = () => {
	const [fullname, setFullname] = useState("");
	const [employeeID, setEmployeeID] = useState("");
	const [password, setPassword] = useState("");
	const [formWarning, setFormWarning] = useState("");
	const history = useHistory();

	const handleForm = (e) => {
		switch (e.target.id) {
			case "fullname":
				setFullname(e.target.value);
				break;
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
		if (!password || !employeeID || !fullname) {
			return [false, "All fields required"];
		}

		if (fullname.split(" ").length !== 2) {
			return [false, "Enter valid fullname e.g Michael Smith"];
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
		const userType = "Social Worker";
		const form_data = { fullname, employeeID, password, userType };

		fetch(`http://localhost:8000/users`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form_data),
		})
			.then((response) => {
				if (response.status >= 200 && response.status < 400) {
					return response.text();
				}
			})
			.then((result) => alert(result))
			.catch((err) => {
				alert("Oops something went wrong.");
				return;
			});
		setTimeout(() => {
			window.location.reload();
		}, 5000);
	};
	return (
		<>
			<NavBar />
			<br />
			<div>
				<div id="form-container">
					<form id="form" class="offset-lg-3 col-lg-6">
						<header id="form-header">
							<h3 class="textblack">Signup Social Worker</h3>
						</header>
						{formWarning.length > 0 ? (
							<p id="form-warning">{formWarning}</p>
						) : null}
						<div class="offset-lg-3 col-lg-6 col-md-6 mb-2">
							<label className="textblack">Fullname</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								//value={fullname}
								name="fullname"
								id="fullname"
								type="text"
								placeholder="Enter fullname e.g John Doe"
								required
							/>
							<label className="textblack">Employee ID</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								name="id"
								//value={employeeID}
								id="employeeID"
								type="text"
								placeholder="Enter your employee ID"
								required
							/>
							<label className="textblack">Password</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								name="password"
								//value={password}
								id="password"
								type="password"
								placeholder="Enter password"
								required
							/>
							<button
								class="mr-2 form-control btn btn-success"
								onClick={(e) => submitForm(e)}
								type="submit"
								style={{ backgroundColor: "green", color: "white" }}
							>
								{" "}
								Create Account
							</button>
							<p
								class="textblack"
								onClick={() => history.push("/social-workers-signin")}
								id="logout-redirect-prefix"
								style={{ color: "black" }}
							>
								Already have an Account?{" "}
								<span id="logout-redirect" style={{ color: "green" }}>
									Log in
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

export default Signup;
