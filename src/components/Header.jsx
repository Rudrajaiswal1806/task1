import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap";
class Header extends React.Component {
    
    render() {
        return (
        
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-md-4 d-flex flex-row justify-content-evenly align-items-center">
                        <img src="./images/Rectangle 3.png" alt="" style= {{marginLeft:'-20px'}}/>
                        <Link className="text-black text-decoration-none fw-bold fs-5 border-bottom border-danger border-2 ">Our esrvices</Link>
                    </div>
                    <div className="col-md-4 d-flex flex-row  fw-bold justify-content-evenly text-center align-items-center">
                        <Link className="text-black text-decoration-none fs-5" to="">About</Link>
                        <Link className="text-black text-decoration-none fs-5">Blog & News</Link>
                        <Link className="text-black text-decoration-none fs-5">Contact</Link>
                        
                    </div>
                    <div className="col-md-4 d-flex flex-row  fw-bold   align-items-center">
                    <Link className="text-black text-decoration-none fs-5 ms-4 border-end pe-4">Account</Link>
                    <Link className="text-black text-decoration-none fs-5 ps-4"><img src="./images/phone.png" alt="" className="me-2 align-self-center m-0"/>+ 2349067322844</Link>
                        
                    </div>
                </div>
            </div>
        // <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img
        //                 src="./images/Rectangle 3.png"
        //                 width="50"
        //                 height="30"
        //                 className="d-inline-block align-top"
        //                 alt="React Bootstrap logo"
        //             />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className=" ps-4 text-black">
        //               <Nav.Link className="text-black fw" href="#features">Our Services</Nav.Link>
                    
                    
        //             </Nav>
        //         <Nav className="justify-content-center">
        //         <Nav.Link href="#deets">About</Nav.Link>
        //         <Nav.Link href="#deets">Blog&News</Nav.Link>
        //         <Nav.Link href="#deets">Contact</Nav.Link>
        //         </Nav>

        //         <Nav>
        //         <Nav.Link href="#deets">Account</Nav.Link>
                
        //         </Nav>
        //         <Navbar.Brand href="#home">
        //             <img
        //                 src="./images/phone.png"
        //                 width="20"
        //                 height="20"
        //                 className="d-inline-block align-top"
        //                 alt="React Bootstrap logo"
        //             />
                    
        //         </Navbar.Brand>

        //     </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        );
      }
}
export default Header;