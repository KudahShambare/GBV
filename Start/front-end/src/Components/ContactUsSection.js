import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StyledEngineProvider } from "@mui/material/styles";
import ButtonLock from "./ButtonLock";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";

const ContactUsSection = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loading1, setLoading1] = React.useState(false);
  const timer = React.useRef();
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Container>
      <Row>
        <h4 className="text-center textblack">Report GBV</h4>

        <Col className="text-center">
          <p>
            <strong>Note:</strong> All communication with us is confidential and
            any information that you entrust us with is securely stored.
          </p>
        </Col>
      </Row>
      <Row bg="secondary">
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card bg="secondary" text="white">
            <Col className="text-center">
              <br />
              <i class="fas fa-clipboard-list fa-3x"></i>
              <Card.Body>
                <Card.Title>Fill in a form</Card.Title>
                <Card.Text>
                  Fill In this form and we will get back to you
                </Card.Text>
                <Col>
                  <StyledEngineProvider injectFirst>
                    <ButtonLock
                      value="Fill out our secure form"
                      text="/gbv-victim-form"
                    />
                  </StyledEngineProvider>
                </Col>
              </Card.Body>
            </Col>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card bg="secondary" text="white">
            <Col className="text-center">
              <br />
              <i class="fab fa-whatsapp fa-3x"></i>{" "}
              <Card.Body>
                <Card.Title>WhatsApp</Card.Title>
                <Card.Text>Contact Us via WhatsApp</Card.Text>
                <br />
                <Col>
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                      style={{ backgroundColor: "green" }}
                      variant="contained"
                      sx={buttonSx}
                      disabled={loading}
                      onClick={handleButtonClick}
                      href="whatsapp://send?text=Hi, I would like some support&phone=+27(0)212240983"
                    >
                      Chat with us
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
                  </Box>
                </Col>
              </Card.Body>
            </Col>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card bg="secondary" text="white">
            <Col className="text-center">
              <br />
              <i class="fa fa-phone fa-3x"></i>
              <Card.Body>
                <Card.Title>Call-back</Card.Title>
                <Card.Text>Request a Call-back</Card.Text>
                <br />
                <Col>
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                      style={{ backgroundColor: "green" }}
                      variant="contained"
                      sx={buttonSx}
                      disabled={loading1}
                      onClick={handleButtonClick}
                      href="/call-back-form"
                    >
                      Request a Callback
                    </Button>
                    {loading1 && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
                  </Box>
                </Col>
              </Card.Body>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsSection;
