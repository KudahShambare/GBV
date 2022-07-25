import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ManagerAddRefferingOrganisation = () => {
    const [orgName, setOrgName] = useState("");
    const [location, setLocation] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [email, setEmail] = useState("");
    const [authPerson, setAuthPerson] = useState("");
    const [orgType, setOrgType] = useState("");
    const [authPersonContact, setAuthPersonContact] = useState("");

    	const handleSubmit = (e) => {
		e.preventDefault();
    const form = {
        orgName,
        location,
        contactNum,
        email,
        authPerson,
        orgType,
        authPersonContact,
    }
		fetch("http://localhost:8000/referring-org-form", {
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
            {/* orgName,
		location,
		contactNum,
		email,
		authPerson,
		orgType,
		authPersonContact, */}
        <Form.Group className="mb-3">
                <Form.Label>Please fill out the following details to add a referring organisation to the database: </Form.Label>
                <Form.Control className="text-center"type="Organisation Name" placeholder="Enter the name of the referring organisation" value={orgName}
				onChange={(e) => setOrgName(e.target.value)} />
                <Form.Control className="text-center" type="Organisation Type" placeholder="Enter the organisation type" value={orgType}
				onChange={(e) => setOrgType(e.target.value)} />
                <Form.Control className="text-center" type="Location" placeholder="Enter the location of the organisation" value={location}
				onChange={(e) => setLocation(e.target.value)} />
                <Form.Control className="text-center" type="Contact Number" placeholder="Enter the contact Number of the organisation" value={contactNum}
				onChange={(e) => setContactNum(e.target.value)} />
                <Form.Control className="text-center" type="Email" placeholder="Enter the Email address of the organisation" value={email}
				onChange={(e) => setEmail(e.target.value)} />
                <Form.Control className="text-center" type="Authorised Person" placeholder="Enter the full name/names of authorised persons in the organisation" value={authPerson}
				onChange={(e) => setAuthPerson(e.target.value)} />
                <Form.Control className="text-center" type="Authorised Person(s) Contact details" placeholder="Enter the contact details of the authorised person(s) in the organisation" value={authPersonContact}
				onChange={(e) => setAuthPersonContact(e.target.value)} />
                
                <Form.Text className="text-muted">
                  Please ensure that you have input the correct employee ID above
                </Form.Text>
              </Form.Group>
              <Button className="text-center" variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </>
    )
}
export default ManagerAddRefferingOrganisation;