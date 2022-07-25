import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FundersSignUpRequestCards = ({ caseId})=> {
  const [expanded, setExpanded] = React.useState(false);
  const casId = caseId

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [employeeIDInputValidation, setEmployeeIDInputValidation] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
    const form = {
      employeeIDInputValidation,
    }
		fetch("http://localhost:8000/EmployeeIDAuthentication", {
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
      <br/>
      <Container className="text-center" style ={{backgroundColor:"red", color:"white"}} >   
        <Card  style ={{backgroundColor:"green", color:"white"}} >
          <CardHeader
            title={`Employee ID: ${caseId}`}
            subheader={<strong style ={{ color:"white"}}>Name of Funder/Shareholder: {caseId}</strong>}
            />
        
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
              <Form.Group className="mb-3"> 
                <Form.Label>Please enter the employee ID of the Funder/Shareholder that you want to authorise: </Form.Label>
                <Form.Control type="employee ID" placeholder="Enter Employee ID of social worker" value={employeeIDInputValidation}
									onChange={(e) => setEmployeeIDInputValidation(e.target.value)} />
                <Form.Text className="text-muted">
                  Please ensure that you have input the correct employee ID above
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
      {console.log(employeeIDInputValidation)}
  </>
  );
}

export default FundersSignUpRequestCards;