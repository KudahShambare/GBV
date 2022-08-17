import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NavBar from "../Components/NavBar";

const CallbackForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h5>
          If you want to be contacted, please provide us with your details below
        </h5>
        <form method="post" action="http://localhost:8000/callback">
          <div class="callback-form">
            <span>Name</span>
            <br />
            <input type="text" name="callbackName" className="callback-input" />
            <br />
            <span>Contact Number</span>
            <br />
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="callbackContact"
              className="callback-input"
            />
            <br />
            <span>Email</span>
            <br />
            <input
              type="email"
              name="callbackEmail"
              className="callback-input"
            />
            <br />
            <button
              type="submit"
              style={{ backgroundColor: "green", margin: "2% auto" }}
              onClick={handleShow}
            >
              {" "}
              Request
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
        </form>
      </div>
    </>
  );
};

export default CallbackForm;
