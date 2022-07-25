import React from "react";
import Logo from "../Components/Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//
import styled, { ThemeProvider } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
//
const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

const Content = styled.div`
  margin: auto;
  max-width: 500px;
`;

const AvatarLabel = styled.div`
  display: flex;
  align-items: center;
`;
const employeeID = {

}

function ImageAvatars(){
    <AvatarContainer>
      <Avatar
        alt={employeeID}
        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
	</AvatarContainer>
}
function AvatarWithText() {
  return (
    <AvatarContainer>
      <AvatarLabel>
        <Avatar
          style={{ marginRight: "14px" }}
          alt={"hi"}
          src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Typography variant="body2"> Jack Sparrow</Typography>
      </AvatarLabel>
    </AvatarContainer>
  );
}


const SocialWorkerDashboardNavBar = () => {
 const logout = () => {
    window.localStorage.clear();
    window.location.href ="/login";
	}
	const goToMain = () => {
		window.location.href ="/social-worker-dashboard";
	}
	const theme = useTheme();
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
					<Navbar.Brand href="/social-worker-dashboard">
						{<Logo />}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav id="nav" style={{color:"white"}}>
							<Nav.Item>
								<Nav.Link href="/social-worker-dashboard" eventKey="/social-worker-dashboard">
									Live Cases
								</Nav.Link>
                            </Nav.Item>
                            Welcome to the Social Workers Dashboard                          
							<Nav.Item className="justify-content-end">
								<Nav.Link href="/social-workers-signin" onClick={logout} eventKey="/social-workers-signin">
									Logout
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className="justify-content-end">
								<Nav.Link href="/social-worker-dashboard" onClick={goToMain} eventKey="/social-worker-dashboard">
									{
										<StylesProvider injectFirst>
      										<ThemeProvider theme={theme}>
        										<Content>
          												<AvatarWithText />
												</Content>
	  										</ThemeProvider>
										</StylesProvider>
									}
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default SocialWorkerDashboardNavBar;