import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import NavBar from "../Components/NavBar";

const GBVVictimsFAQ = () => {
  return (
    <>
      <NavBar />
      <Container id="faq">
        <Row>
          <Col>
            <div className="text-center">
              <br />
              <h4 style={{ color: "black" }}>
                <strong>GBV Victims FAQ:</strong>
              </h4>
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="faq-question">
                    <strong>What is gender-based violence (GBV)?</strong>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">
                    Is VIOLENCE that is directed at an individual BASED on their
                    biological sex OR gender identity. It includes physical,
                    verbal, emotional and psychological abuse, threats, economic
                    or educational deprivation whether occurring in public or
                    private life.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <strong>What is trauma?</strong>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">
                    Trauma is the debilitating symptoms that many people suffer
                    from, on the aftermath of perceived life-threatening or
                    overwhelming situations. Trauma is about the loss of
                    connection to ourselves, our bodies, to our families, to
                    others and to the world around us.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    <strong>
                      What is the purpose of the Victim Empowerment Programme
                      (VEP)?
                    </strong>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">
                    The project aims to support victims, survivors and the
                    respective family members of persons who have experienced
                    crime and violence. The VEP's support services also extends
                    to Gender-Based-Violence (GBV), whereby the therapeutic
                    services aids to deal with the impact of the incident that
                    had been experienced.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    <strong>
                      Who will respond to my enquiry on the Touching Nations
                      App?
                    </strong>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">
                    Qualified and registered social workers and social auxiliary
                    workers who are employed at Touching Nations will and are
                    responsible for responding to enquiries made on the App. By
                    when can I expect a response from my enquiry on the Touching
                    Nations App? Within 2-days (48 hours) if it is Monday-Friday
                    (08:00-15:30), excluding weekends and public holidays.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    <strong> Are Touching Nations VEP services free? </strong>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">
                    Touching Nations VEP services are free and open to members
                    of the public that are 18 years and older and reside within
                    Elsies River, Delft and its surrounding areas. What services
                    does Touching Nations VEP offer? The focus of the services
                    is two-fold: firstly, to render psychosocial support
                    services that encompasses therapeutic counselling on an
                    individual, couple, family, and group. Secondly, educational
                    workshops that comprise awareness and preventive measures
                    around crime and violence.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default GBVVictimsFAQ;
