import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { StyledEngineProvider } from "@mui/material/styles";
import ButtonLock from "./ButtonLock";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";

const CarouselBottom = () => {
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
				<Col md={12} sm={12} xs={12} lg={5}>
					<Card>
						<Card.Body>
							<Card.Title>Are you a refering organisation?</Card.Title>
							<Card.Text>
								<p>We are here to help!</p>
								<p>Complete and submit our referring organisation form below</p>
							</Card.Text>

							<br />

							<Col className="text-center">
								<StyledEngineProvider injectFirst>
									<ButtonLock
										value="Referring Organisations Form"
										text="/refering-organisation-form"
									/>
								</StyledEngineProvider>
							</Col>

							<br />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<br />
		</Container>
	);
};

export default CarouselBottom;
