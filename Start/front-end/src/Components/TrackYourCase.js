import React from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom'

const TrackYourCase = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}sm={12} md={12} lg={12} xl={12}>
                        <Card bg="secondary"  text="white"className="text-center">
                            <Col className="text-center">
                                <Card.Body className="text-center">
                                    <i class='fas fa-search-location fa-3x'></i>
                                    <br />
                                    <br/>
                                <Card.Title>Track Your Case:</Card.Title>
                                <Card.Text>
                                    Securely track your case here. Simply enter your unique tracking number and you will be redirected to a page with the status of your case.
                                </Card.Text>
                                <br/>    
                                <Col>
                                    <form className="d-flex" method="get" action="/track-cases">
                                        <input
                                            type="text"
                                            placeholder="Track your case here"
                                            className="mr-2 trackCase"
                                                aria-label="Search"
                                                name="caseNumber"
                                                style={{width:"50%",marginLeft:"20%"}}
                                        />
                                        <Link type="submit" to="/track-your-case" style={{backgroundColor:"green",color:"white",textDecoration:"none",width:"7vw"}}>Track Case</Link>

                                    </form>
                                </Col>
                            </Card.Body>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Container>    
        </>
    )
}

export default TrackYourCase;