import React from "react";
import Logo from "./Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



const FundersShareholdersDashboardNavBar = () => {
 const logout = () => {
    window.localStorage.clear();
    window.location.href ="/login";
  }
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
					<Navbar.Brand href="/funders-shareholders-dashboard">
						{<Logo />}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav id="nav" style={{color:"white"}}>
							<Nav.Item>
								<Nav.Link href="/funders-shareholders-dashboard" eventKey="/funders-shareholders-dashboard">
									Live Data
								</Nav.Link>
                            </Nav.Item>
                            Welcome to the Funders-Shareholders Dashboard                          
							<Nav.Item className="justify-content-end">
								<Nav.Link href="/funders-shareholders-signin" onClick={logout} eventKey="/funders-shareholders-signin">
									Logout
								</Nav.Link>
							</Nav.Item>                            								
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default FundersShareholdersDashboardNavBar;