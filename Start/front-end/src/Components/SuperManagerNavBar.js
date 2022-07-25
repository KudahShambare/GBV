import React from "react";
import Logo from "./Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const SuperManagerNavBar = () => {
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
					<Navbar.Brand href="/super-manager">
						{<Logo />}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav id="nav" style={{color:"white"}}>
							<Nav.Item>
								<Nav.Link href="#liveCases" eventKey="#liveCases">
									Live Data
								</Nav.Link>
                            </Nav.Item>
                            Welcome to the Managers Dashboard                          
							<Nav.Item className="justify-content-end">
								<Nav.Link href="/social-workers-signin" onClick={logout} eventKey="/social-workers-signin">
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

export default SuperManagerNavBar;