import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import * as Formik from "formik";
import * as formik from "formik";
import * as yup from "yup";
import { Container } from "@mui/material";
import { color } from "@mui/system";
import Modal from "react-bootstrap/Modal";
import NavBar from "../Components/NavBar";
import { number } from "yup/lib/locale";

const ReferingOrganisationForm = () => {
  const { Formik } = formik;
  const [showModal, setshowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullName, setFullName] = useState("");
  const [doB, setDoB] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [race, setRace] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [dependants, setDependants] = useState("");
  const [employer, setEmployer] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [workNumber, setWorkNumber] = useState("");
  const [other, setOther] = useState("");
  const [typeOfAbuse, setTypeOfAbuse] = useState("");
  const [reasonForReferral, setReasonForReferral] = useState("");
  const [occurrenceDate, setOccurrenceDate] = useState("");
  const [locationOfIncident, setLocationOfIncident] = useState("");
  const [lengthOfAbuse, setLengthOfAbuse] = useState("");
  const [nameOfAbuser, setNameOfAbuser] = useState("");
  const [genderOfAbuser, setGenderOfAbuser] = useState("");
  const [abuserContact, setAbuserContact] = useState("");
  const [relationshipToAbuser, setRelationshipToAbuser] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [referrerTitle, setReferrerTitle] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [orgTel, setOrgTel] = useState("");
  const [orgCel, setOrgCel] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [orgType, setOrgType] = useState("");
  const [whatHasBeenDone, setWhatHasBeenDone] = useState("");
  const [clientAware, setClientAware] = useState("");
  const [clientWillingToTravel, setClientWillingToTravel] = useState("");
  const [ongoingInvolvement, setOngoingInvolvement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const caseType = "Referring Organization";
    const form = {
      caseType,
      fullName,
      doB,
      gender,
      language,
      race,
      educationLevel,
      maritalStatus,
      address,
      phoneNumber,
      secondaryNumber,
      dependants,
      employer,
      jobTitle,
      workNumber,
      other,
      typeOfAbuse,
      reasonForReferral,
      occurrenceDate,
      locationOfIncident,
      lengthOfAbuse,
      nameOfAbuser,
      genderOfAbuser,
      abuserContact,
      relationshipToAbuser,
      referredBy,
      referrerTitle,
      organisation,
      orgTel,
      orgCel,
      orgEmail,
      orgAddress,
      orgType,
      whatHasBeenDone,
      clientAware,
      clientWillingToTravel,
      ongoingInvolvement,
    };

    fetch("http://localhost:8000/api/gbv-referring-organisation-form", {
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
      <br />
      <Container>
        <Row>
          <Container className="refering-organisation-heading">
            <Row>
              <Col className="text-center">
                <h3>REFERRAL FORM: Adult abuse or Trauma Intake</h3>
                <p>
                  Please complete the following referral form when requesting
                  therapeutic counselling services from Touching Nations. We
                  render individual and group counselling for all types of Abuse
                  and Trauma to persons aged 18 years and older that reside
                  within Elsies River, Delft and its surrounding areas. There
                  may be a waiting list. Hence, the Social Worker or Social
                  Auxiliary Worker will contact the client for an appointment as
                  soon as possible.
                </p>
              </Col>
            </Row>
          </Container>

          <div id="form-container">
            <Form id="form" noValidate onSubmit={handleSubmit}>
              <br />
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="8"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Full Name
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Full Name"
                      aria-describedby="inputGroupPrepend"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please fill in your Full Name
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Age/DoB
                    </InputGroup.Text>
                    <Form.Control
                      type="date"
                      placeholder="Age/Date of Birth"
                      aria-describedby="inputGroupPrepend"
                      name="age"
                      value={doB}
                      onChange={(e) => setDoB(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please input your age
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />
              <Row>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Sex/Gender
                    </InputGroup.Text>
                    <Form.Select
                      aria-describedby="inputGroupPrepend"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" disabled>
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transexual">Transexual</option>
                      <option value="Intersex">Intersex</option>
                      <option value="Non-conforming">Non-conforming</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please outline the Gender of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Languages
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Languages"
                      aria-describedby="inputGroupPrepend"
                      name="languages"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the language of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Education Level
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Education level"
                      aria-describedby="inputGroupPrepend"
                      name="education level"
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the language of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Race
                    </InputGroup.Text>
                    <Form.Select
                      aria-describedby="inputGroupPrepend"
                      name="race"
                      z
                      value={race}
                      onChange={(e) => setRace(e.target.value)}
                    >
                      <option value="" selected="selected" disabled="disabled">
                        -- Race select one --
                      </option>
                      <optgroup label="White">
                        <option value="White">White</option>
                      </optgroup>
                      <optgroup label="Mixed or Multiple ethnic groups">
                        <option value="Coloured" name="coloured">
                          Coloured
                        </option>
                      </optgroup>
                      <optgroup label="Asian">
                        <option value="Indian" name="asian">
                          Indian
                        </option>
                        <option value="Indian" name="asian">
                          Japanese
                        </option>
                        <option value="Indian" name="asian">
                          Chinese
                        </option>
                        <option value="Indian" name="asian">
                          Other
                        </option>
                      </optgroup>
                      <optgroup label="Black">
                        <option value="Black">Black</option>
                      </optgroup>
                      <optgroup label="Other ethnic groups">
                        <option value="Other">Any other ethnic group</option>
                      </optgroup>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please outline the race of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Marital Status
                    </InputGroup.Text>
                    <Form.Select
                      aria-describedby="inputGroupPrepend"
                      name="maritalStatus"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="" disabled>
                        Marital Status
                      </option>
                      <option value="Single" name="maritalStatus">
                        Single
                      </option>
                      <option value="Married" name="maritalStatus">
                        Married
                      </option>
                      <option value="Civil Union" name="maritalStatus">
                        Civil Union
                      </option>
                      <option value="Widowed" name="maritalStatus">
                        Widowed
                      </option>
                      <option value="Divorced" name="maritalStatus">
                        Divorced
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please outline the marital status of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Address
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      aria-describedby="inputGroupPrepend"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please state the address of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Contact Numbers
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Contact Numbers"
                      aria-describedby="inputGroupPrepend"
                      name="contactNumbers"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the contact number of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Alternative Contact Numbers
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Alternative Contact Numbers"
                      aria-describedby="inputGroupPrepend"
                      name="alternativeContactNumbers"
                      value={secondaryNumber}
                      onChange={(e) => setSecondaryNumber(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the secondary contact details of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    value={dependants}
                    onChange={(e) => setDependants(e.target.value)}
                    as="textarea"
                    rows={7}
                    placeholder="Please provide the relationship, names and Age of the Dependents (Children). Should you have anymore information to add, please include it."
                  />
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Employer
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Name and details of employer"
                      aria-describedby="inputGroupPrepend"
                      name="employer"
                      value={employer}
                      onChange={(e) => setEmployer(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the employer of the client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Job Title
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Job Title"
                      aria-describedby="inputGroupPrepend"
                      name="jobTitle"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the victims job title
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Work Number
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Work Number"
                      aria-describedby="inputGroupPrepend"
                      name="workNumber"
                      value={workNumber}
                      onChange={(e) => setWorkNumber(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the clients Work Number
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Other (e.g. SASSA grant)
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Other (e.g. SASSA grant):"
                      aria-describedby="inputGroupPrepend"
                      name="other"
                      value={other}
                      onChange={(e) => setOther(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline any other details
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Type of abuse
                    </InputGroup.Text>
                    <Form.Select
                      aria-describedby="inputGroupPrepend"
                      name="type of abuse"
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
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please outline any other details
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Reason for referral
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Reason for referral"
                      aria-describedby="inputGroupPrepend"
                      name="reason for referral"
                      value={reasonForReferral}
                      onChange={(e) => setReasonForReferral(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline any other details
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      When did it occur:
                    </InputGroup.Text>
                    <Form.Control
                      type="date"
                      aria-describedby="inputGroupPrepend"
                      name="occurrence date"
                      value={occurrenceDate}
                      onChange={(e) => setOccurrenceDate(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline any other details
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Where did it occur:
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Location of incident"
                      name="location of incident"
                      value={locationOfIncident}
                      onChange={(e) => setLocationOfIncident(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline any other details
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Duration of abuse
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      placeholder="How long has it been going on"
                      name="length of abuse"
                      value={lengthOfAbuse}
                      onChange={(e) => setLengthOfAbuse(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline any other details
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Name of Abuser
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Abuser name"
                      aria-describedby="inputGroupPrepend"
                      name="Abuse name"
                      value={nameOfAbuser}
                      onChange={(e) => setNameOfAbuser(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline name of abuser
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Gender of abuser
                    </InputGroup.Text>
                    <Form.Select
                      aria-describedby="inputGroupPrepend"
                      name="Abuser gender"
                      value={genderOfAbuser}
                      onChange={(e) => setGenderOfAbuser(e.target.value)}
                    >
                      <option value="" disabled>
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please outline name of abuser
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Abuser contact num
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Abuser contact number"
                      aria-describedby="inputGroupPrepend"
                      name="Abuse contact"
                      value={abuserContact}
                      onChange={(e) => setAbuserContact(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline name of abuser
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Relationship to person concerned
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Relation to client"
                      aria-describedby="inputGroupPrepend"
                      name="relation to client"
                      value={relationshipToAbuser}
                      onChange={(e) => setRelationshipToAbuser(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Referred by
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Referred by"
                      aria-describedby="inputGroupPrepend"
                      name="referred by"
                      value={referredBy}
                      onChange={(e) => setReferredBy(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Job title:
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Job title of referrer"
                      aria-describedby="inputGroupPrepend"
                      name="referrer job title"
                      value={referrerTitle}
                      onChange={(e) => setReferrerTitle(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      What has been done so far?
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="What has been done so far"
                      aria-describedby="inputGroupPrepend"
                      name="referrer job title"
                      value={whatHasBeenDone}
                      onChange={(e) => setWhatHasBeenDone(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Client aware of referral?
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Client aware of referral?"
                      aria-describedby="inputGroupPrepend"
                      name="referrer job title"
                      value={clientAware}
                      onChange={(e) => setClientAware(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Client willing to travel?
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Client willing to travel?"
                      aria-describedby="inputGroupPrepend"
                      name="referrer job title"
                      value={clientWillingToTravel}
                      onChange={(e) => setClientWillingToTravel(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Will there be ongoing involvement from the organisation?
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Ongoing involvement"
                      aria-describedby="inputGroupPrepend"
                      name="referrer job title"
                      value={ongoingInvolvement}
                      onChange={(e) => setOngoingInvolvement(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Organisation
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Organisation name"
                      aria-describedby="inputGroupPrepend"
                      name="Org name"
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />
              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Type of Organisation
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Type of Organisation"
                      aria-describedby="inputGroupPrepend"
                      name="Org name"
                      value={orgType}
                      onChange={(e) => setOrgType(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Contact Tel:
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Org tel"
                      aria-describedby="inputGroupPrepend"
                      name="org tel"
                      value={orgTel}
                      onChange={(e) => setOrgTel(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Cel:
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Org cel"
                      aria-describedby="inputGroupPrepend"
                      name="org cel"
                      value={orgCel}
                      onChange={(e) => setOrgCel(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline relation to client
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Email
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      name="organisation email"
                      value={orgEmail}
                      onChange={(e) => setOrgEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the email
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <br />

              <Row>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      Address
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Org address"
                      aria-describedby="inputGroupPrepend"
                      name="organisation address"
                      value={orgAddress}
                      onChange={(e) => setOrgAddress(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please outline the email
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Button
                type="submit"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={handleShow}
              >
                Submit form
              </Button>
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
            </Form>
          </div>
        </Row>
        <br />
      </Container>
    </>
  );
};

export default ReferingOrganisationForm;
