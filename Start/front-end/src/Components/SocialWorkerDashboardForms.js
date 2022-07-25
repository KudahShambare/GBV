import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SocialWorkerDashboard from "../pages/SocialWorkerDashboard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const CaseCards = ({
	caseId,
	caseType,
	gender,
	language,
	ethnicity,
	educationLevel,
	typeOfAbuse,
	genderOfAbuser,
	relationshipToAbuser,
	history,
}) => {
	const [expanded, setExpanded] = React.useState(false);
	// const casId = caseId;

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const handleChange = (value) => {
		const state = value.slice(0, value.indexOf(","));
		const caseID = value.slice(value.indexOf(",") + 1, value.length);
		const data = { state, caseID };
		fetch("http://localhost:8000/case-status-update", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((response) => response.text())
			.then((message) => alert(message))
			.catch((err) => alert(err));
		return console.log(state, caseID);
	};

	return (
		<>
			<br />
			<Container
				className="text-center"
				bg="secondary"
				border="danger"
				text="white"
			>
				<Card bg="secondary" border="danger" text="white">
					<CardHeader
						title={`Case ID: ${caseId}`}
						subheader={`Case type: ${caseType}`}
					/>
					<Form.Select onChange={(e) => handleChange(e.target.value)}>
						<option style={{ color: "red" }} value={[`Unclaimed`, caseId]}>
							Unclaimed
						</option>
						<option style={{ color: "orange" }} value={[`Claimed`, caseId]}>
							Claimed
						</option>
						<option style={{ color: "orange" }} value={[`In progress`, caseId]}>
							In progress
						</option>
						<option style={{ color: "green" }} value={[`Completed`, caseId]}>
							Completed
						</option>
					</Form.Select>

					<CardContent>
						<Typography variant="body2" color="text.secondary">
							<FloatingLabel
								controlId="floatingTextarea"
								label="Name of Social Worker:"
								className="mb-3"
							>
								<Form.Control
									as="textarea"
									placeholder="Input Full Name and role" //? CHange to two input fields and capture fullname and employee id?
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingTextarea2"
								label="Notes on Case:"
							>
								<Form.Control as="textarea" placeholder="Input notes on case" />
							</FloatingLabel>
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							className="text-center"
						>
							<ExpandMoreIcon />
						</ExpandMore>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph>
								<strong>Case details:</strong>
							</Typography>
							<Typography paragraph>
								<h8>
									<strong>Gender of Client:</strong>
								</h8>
								<p>{gender}</p>
								<h8>
									<strong>language:</strong>
								</h8>
								<p>{language}</p>
								<h8>
									<strong>Ethnicity</strong>
								</h8>
								<p>{ethnicity}</p>
								<h8>
									<strong>Educational Level:</strong>
								</h8>
								<p>{educationLevel}</p>
								{/*   typeOfAbuse, relationshipToAbuser,history */}
							</Typography>
							<hr />
							<Typography paragraph>
								<h8>
									<strong>Type of Abuse:</strong>
								</h8>
								<p>{typeOfAbuse}</p>
								<h8>
									<strong>Gender of Abuser:</strong>
								</h8>
								<p>{genderOfAbuser}</p>
								<h8>
									<strong>Relationship of Client to Abuser:</strong>
								</h8>
								<p>{relationshipToAbuser}</p>
								<hr />
							</Typography>
							<Typography paragraph>
								<h8>
									<strong>Description and history of case:</strong>
								</h8>
								<p>{history}</p>
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</Container>
		</>
	);
};

export default CaseCards;
