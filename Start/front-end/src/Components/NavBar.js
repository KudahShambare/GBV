import React, { useState } from "react";
import Logo from "../Components/Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



const NavBar = () => {
	const [caseSearchInput,setCaseSearchInput]=useState("");

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="/">
						{<Logo />}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav id="nav">
							<Nav.Item>
								<Nav.Link href="/" eventKey="/" style={{color:"white"}}
>
									GBV Victims
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="/social-workers-signin"
									eventKey="/social-workers-signin"
									style={{color:"white"}}

								>
									Social Workers
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="/refering-organisation-registration"
									eventKey="/refering-organisation-registration"
									style={{color:"white"}}

								>
									Referring Organisation Registration
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="/funders-shareholders-signin"
									eventKey="/funders-shareholders"
style={{color:"white"}}
								>
									Funders and Shareholders
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="GBV-VictimS-FAQ" style={{color:"white"}}
> FAQ </Nav.Link>
							</Nav.Item>
							<Nav.Item>
								
								<form className="d-flex " method="get" action="/track-your-case" 
								>
									<input
									className="trackCase"
									name="caseNumber"
										type="search"
										placeholder="Track your case..."
										aria-label="Search"
										style={{ borderRadius: "5px" }}
									onSubmit={(e)=>{
										e.preventDefault();
										setCaseSearchInput(e.target.value);
										console.log(caseSearchInput);
									}}

									/>
                                	<button type="submit" className="green-buttons" style={{width:"5rem"}}>Track Case</button>
								</form>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
