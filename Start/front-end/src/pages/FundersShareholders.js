import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";

const FundersShareholders = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [formWarning, setFormWarning] = useState("");
	const history = useHistory();
	const handleForm = (e) => {
		switch (e.target.id) {
			case "userName":
				setUserName(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	};
	const validateForm = () => {
		if (!password || !userName) {
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
		// const userType = "Funder";
		const form_data = { userName, password };

		fetch("http://localhost:8000/user-login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form_data),
		})
			.then((response) => {
				if (response.status === 200) {
					if (
						window.confirm(
							'If you click "OK" you will be redirected to the funders dashboard. Please ensure that you log out when not using it and report any misuse or issues to management.'
						)
					) {
						window.location.href =
							"http://localhost:3000/FundersShareholdersDashboard";
					}
				} else {
					return alert("OOps! Something went wrong!");
				}
			})
			.then(() => {
				console.log("User Authenticated");
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<NavBar />
			<br />
			<div>
				<div id="form-container" class="rounded">
					<form id="form" class="offset-lg-3 col-lg-6">
						<header id="form-header">
							<h3 class="textblack">Funders/Shareholders Login</h3>
						</header>
						{formWarning.length > 0 ? (
							<p id="form-warning">{formWarning}</p>
						) : null}

						<div class="offset-lg-3 col-lg-6 col-md-6 mb-2">
							<label class="textblack">Username</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								value={userName}
								id="userName"
								type="text"
								placeholder="Enter your username"
							/>
							<label class="textblack">Password</label>
							<input
								class="mr-2 form-control mb-2"
								onChange={(e) => handleForm(e)}
								value={password}
								id="password"
								type="password"
								placeholder="Enter password"
							/>
							<button
								class="mr-2 form-control btn btn-success"
								type="submit"
								onClick={(e) => {
									submitForm(e);
								}}
								style={{ backgroundColor: "green" }}
							>
								Log In
							</button>
							<p
								class="textblack"
								onClick={() => history.push("/funders-shareholders-signup")}
								id="login-redirect-prefix"
							>
								Don't have and Account?{" "}
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

/*<Container1>
        <Row>
          <Col>
            <h1 className="text-center">Funders and Shareholders</h1>
            <ArticlesList articles={articleContent} />
          </Col>
        </Row>        
      </Container1>  */
export default FundersShareholders;
