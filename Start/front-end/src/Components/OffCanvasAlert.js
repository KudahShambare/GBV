import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";



const OffCanvasAlert = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:"green"}} onClick={handleShow} className="me-2">
        Contact Us Now
      </Button>
      <Offcanvas placement="top" show={show} onHide={handleClose} variant="secondary">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contacting Us Directly</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><strong>For an emergency please call the following service providers:</strong> the <strong>Police</strong> at <strong><a href="tel:10111">10111</a></strong> / <strong>Ambulance</strong> at <strong><a href="tel:10177">10177</a></strong> / <strong>Childline SA</strong> at <strong><a href="tel:0800055555">08000 55 555</a></strong></p>
          <p>Our social workers are only able to respond to your queries from <strong>8am to 6pm</strong>. In order to contact us, dial <a href="tel:+27 (0) 21 224 0983">+27 (0) 21 224 0983</a></p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasAlert;