import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap";
class Header extends React.Component {
    
    render() {
        return (
        

        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="./images/Rectangle 3.png"
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" ps-4 text-black">
                      <Nav.Link className="text-black fw" href="#features">Our Services</Nav.Link>
                    
                    
                    </Nav>
                <Nav className="justify-content-center">
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Blog&News</Nav.Link>
                <Nav.Link href="#deets">Contact</Nav.Link>
                </Nav>

                <Nav>
                <Nav.Link href="#deets">Account</Nav.Link>
                
                </Nav>
                <Navbar.Brand href="#home">
                    <img
                        src="./images/phone.png"
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    
                </Navbar.Brand>

            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
      }
}
export default Header;