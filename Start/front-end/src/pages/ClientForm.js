import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NavBar from "../Components/NavBar";

function ClientForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullName, setFullName] = useState("");
  const [doB, setDoB] = useState("");
  const [govId, setGovId] = useState("");
  const [numOfDep, setNumOfDep] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nameOfAbuser, setNameOfAbuser] = useState("");
  const [genderOfAbuser, setGenderOfAbuser] = useState("");
  const [abuserContact, setAbuserContact] = useState("");
  const [relationshipToAbuser, setRelationshipToAbuser] = useState("");
  const [typeOfAbuse, setTypeOfAbuse] = useState("");
  const [history, setHistory] = useState("");

  const handleSubmit = (e) => {
    const caseType = "GBV Client";
    e.preventDefault();
    const form = {
      caseType,
      fullName,
      govId,
      numOfDep,
      doB,
      address,
      gender,
      language,
      ethnicity,
      maritalStatus,
      educationLevel,
      phoneNumber,
      secondaryNumber,
      email,
      nameOfAbuser,
      genderOfAbuser,
      abuserContact,
      relationshipToAbuser,
      typeOfAbuse,
      history,
    };
    fetch("http://localhost:8000/api/gbv-victim-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => response.text())
      .then((message) => alert(message))
      .catch((err) => alert(err));
    //To clear the forms the page will reload after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  return (
    <>
      <NavBar />
      <div className="text-center">
        <h1 id="form-page-header" class="mb-2">
          Report A Case
        </h1>
        <p id="client-form-summary">
          Please complete the following referral form when requesting
          therapeutic counselling services from Touching Nations. We render
          individual and group counselling for all types of Abuse and Trauma to
          persons aged 18 years and older
        </p>

        <form
          id="client-form"
          class="offset-lg-3 col-lg-6"
          onSubmit={handleSubmit}
          method="post"
          action="/client-form"
        >
          <div class="container" id="client-form">
            <div class="textblack">
              <h2>GBV Victim Form</h2>
            </div>

            <div class="textblack">
              <p>
                <b>Details of person concerned</b>
              </p>
              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name=""
                  placeholder="Enter Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div
                className="textblack"
                style={{ display: "grid", gridTemplateColumns: "35% 65%" }}
              >
                <span>Date Of Birth</span>

                <input
                  className="client-form-input-small"
                  type="date"
                  name="birthday"
                  placeholder="Choose Date Of Birth"
                  value={doB}
                  onChange={(e) => setDoB(e.target.value)}
                />
              </div>
              <div
                class="textblack"
                style={{ display: "grid", gridTemplateColumns: "35% 65% " }}
              >
                <span>ID/Passport Number</span>

                <input
                  className="client-form-input-small"
                  type="text"
                  name="identity-number"
                  placeholder="Enter ID/Passport no"
                  value={govId}
                  onChange={(e) => setGovId(e.target.value)}
                />
              </div>
              <div
                class="textblack"
                style={{ display: "grid", gridTemplateColumns: "35% 65%" }}
              >
                <span style={{ textJustify: "center" }}>
                  Number of dependants
                </span>

                <input
                  className="client-form-input-small"
                  type="number"
                  name="number_of_dependants"
                  placeholder="Enter no of dependants"
                  value={numOfDep}
                  onChange={(e) => setNumOfDep(e.target.value)}
                />
              </div>

              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div class="textblack">
                <select
                  className="client-form-input"
                  type="text"
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="Male">Male &#9794; </option>
                  <option value="Female">Female &#9792;</option>
                  <option value="Transexual">Transexual</option>
                  <option value="Intersex">Intersex</option>
                  <option value="Non-conforming">Non-conforming</option>
                </select>
              </div>

              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name="languages"
                  placeholder="Enter languages you speak"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>

              <div class="textblack">
                <select
                  className="client-form-input"
                  type="text"
                  name=""
                  value={ethnicity}
                  onChange={(e) => setEthnicity(e.target.value)}
                >
                  <option value="" selected="selected" disabled="disabled">
                    -- Ethnicity select one --
                  </option>
                  <optgroup label="White">
                    <option value="White">White</option>
                  </optgroup>
                  <optgroup label="Mixed or Multiple ethnic groups">
                    <option value="Coloured">Coloured</option>
                  </optgroup>
                  <optgroup label="Asian">
                    <option value="Asian">Asian</option>
                    <option value="Indian">Indian</option>
                  </optgroup>
                  <optgroup label="Black">
                    <option value="Black">Black</option>
                  </optgroup>
                  <optgroup label="Other ethnic groups">
                    <option value="Other">Any other ethnic group</option>
                  </optgroup>
                </select>
              </div>

              <div class="textblack">
                <select
                  className="client-form-input"
                  type="text"
                  name=""
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option value="" disabled>
                    Marital Status
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Civil Union">Civil Union</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              <div class="textblack">
                <select
                  className="client-form-input"
                  type="text"
                  name=""
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                >
                  <option value="">Education Level</option>
                  <option value="Some High School">High School</option>
                  <option value="college">College</option>
                  <option value="university">University</option>
                  <option value="no formal education">
                    No formal education
                  </option>
                </select>
              </div>

              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name="phone1"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name="phone2"
                  placeholder="Enter Alternate Number"
                  value={secondaryNumber}
                  onChange={(e) => setSecondaryNumber(e.target.value)}
                />
              </div>
              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <p>
                <b>Details of Abuser</b>
              </p>
              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name=""
                  placeholder="Enter Full Name"
                  value={nameOfAbuser}
                  onChange={(e) => setNameOfAbuser(e.target.value)}
                />
              </div>

              <div class="textblack">
                <select
                  class="client-form-input"
                  type="text"
                  name=""
                  value={genderOfAbuser}
                  onChange={(e) => setGenderOfAbuser(e.target.value)}
                >
                  <option value="" disabled>
                    Gender
                  </option>

                  <option value="Male">Male &#9794; </option>
                  <option value="Female">Female &#9792;</option>
                  <option value="Transexual">Transexual</option>
                  <option value="Intersex">Intersex</option>
                  <option value="Non-conforming">Non-conforming</option>
                </select>
              </div>

              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name="phone2"
                  placeholder="Enter Phone Number"
                  value={abuserContact}
                  onChange={(e) => setAbuserContact(e.target.value)}
                />
              </div>

              <div class="textblack">
                <input
                  class="mr-2 form-control mb-2"
                  type="text"
                  name="phone2"
                  placeholder="Relationship To Person Concerned"
                  value={relationshipToAbuser}
                  onChange={(e) => setRelationshipToAbuser(e.target.value)}
                />
              </div>

              <p>
                <b>Details of Abuse</b>
              </p>
              <div class="textblack">
                <select
                  className="client-form-input"
                  type="text"
                  name=""
                  value={typeOfAbuse}
                  onChange={(e) => setTypeOfAbuse(e.target.value)}
                >
                  <option value="" disabled>
                    Abuse Type
                  </option>
                  <option value="Physical">Physical</option>
                  <option value="Sexual">Sexual</option>
                  <option value="Emotional">Emotional</option>
                  <option value="Verbal">Verbal</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="textblack">
                <textarea
                  class="mr-2 form-control mb-2"
                  cols="5"
                  rows="3"
                  type="text"
                  name="phone2"
                  placeholder="Details of incident (brief history)"
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                ></textarea>
              </div>
            </div>
            <br />
          </div>

          <div class="offset-5 col-2">
            <button
              class="mr-2 form-control btn btn-success"
              style={{ backgroundColor: "green", color: "white" }}
              type="submit"
              onClick={handleShow}
            >
              Submit
            </button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Your case has now been forwarded to our team
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Your request is important to us and will be attended to as
                  soon as possible during our working hours:{" "}
                  <strong>Mon - Fri 08:00am to 15:30pm</strong>.
                </p>
                <p>
                  <strong>
                    For an emergency please call the following service
                    providers:
                  </strong>
                </p>
                <p>
                  <strong>- Police: </strong>
                  <a href="tel:10111">
                    <strong>10111</strong>
                  </a>
                </p>
                <p>
                  <strong>- Ambulance: </strong>
                  <a href="tel:10177">
                    <strong>10177</strong>
                  </a>
                </p>
                <p>
                  <strong>- Gender-Based Violence Command Centre: </strong>
                  <a href="tel:0800428428">
                    <strong>0800428428</strong>
                  </a>
                </p>
                <p>
                  <strong>- Childline South Africa: </strong>
                  <a href="0800055555">
                    <strong>0800055555</strong>
                  </a>
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <br />
        </form>
        <br />
      </div>
    </>
  );
}
export default ClientForm;
