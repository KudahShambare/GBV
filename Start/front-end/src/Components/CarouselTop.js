import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OffCanvasAlert from "./OffCanvasAlert";

const CarouselTop=() =>{
    return (
        <Container>
            <Row>
                <Col md={12} sm={12} xs={12} lg={5}>
                    <br />
                    <br/>
                    <Card>
                    <Card.Body>
                        <Card.Title>Have you experienced GBV?</Card.Title>
                        <Card.Text>
                            <p>
                                We are here to help!
                            </p>
                            <p>
                                We provide you with a social worker to support you and discuss any issues and problems you may have. All of this whilst ensuring confidentiality and security.
                            </p>
                        </Card.Text>
                        <Container>
                            <Row className="text-center">
                                <Col md={5} sm={5}>        
                                    <OffCanvasAlert/>    
                                </Col>
                                <Col md={2} sm={2}>        
                                    <p ><strong style={{verticalAlign:"middle"}}>OR</strong></p>
                                </Col>
                                <Col md={5} sm={5}>    
                                    <Button href="tel:10111" class="btn-call-police  scrollto animate__animated animate__fadeInUp" style={{backgroundColor:"white",color:"black",borderColor:"black"}}>Contact The Police</Button>
                                </Col>
                            </Row>
                        </Container>
                            <br/>
                            <p><strong>Note:</strong> We are open from 8am to 6pm</p>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={12} sm={12} xs={0} lg={7}>
                    <Carousel variant="dark" className="d-block w-100">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/photos/be-the-person-who-helps-the-next-picture-id1183967695?b=1&k=20&m=1183967695&s=170667a&w=0&h=MRy8Tcf5xkvaQphEqhUU06mcI-NYiAPUNEdDU5UGgRg="
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/photos/letters-etched-in-beach-sand-say-stop-gender-based-violence-picture-id1276473867?b=1&k=20&m=1276473867&s=170667a&w=0&h=ChhjBFuhyarqhdzofh3t82Z74CDkGdpaJ2FkSU_xBRI="
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default CarouselTop;