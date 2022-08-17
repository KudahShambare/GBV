import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Signup = () => {
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
    const userType = "Funder";
    const form_data = { userName, password, userType };
    fetch("http://localhost:8000/users", {
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
              <h3 class="textblack">Funders and Shareholders Signup</h3>
            </header>
            {formWarning.length > 0 ? (
              <p id="form-warning">{formWarning}</p>
            ) : null}
            <div class="offset-lg-3 col-lg-6 col-md-6 mb-2">
              <label className="textblack">Username</label>
              <input
                class="mr-2 form-control mb-2"
                onChange={(e) => handleForm(e)}
                value={userName}
                id="userName"
                type="text"
                placeholder="Enter your username"
              />
              <label className="textblack">Password</label>
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
                onClick={(e) => submitForm(e)}
                style={{ backgroundColor: "green", color: "white" }}
              >
                {" "}
                Create Account
              </button>
              <p
                class="textblack"
                onClick={() => history.push("/funders-shareholders-signin")}
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
