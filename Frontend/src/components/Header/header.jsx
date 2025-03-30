import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#">WEBSITE QUẢN LÝ SÁCH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#"><i class="bi bi-facebook"></i></Nav.Link>
                        <Nav.Link href="#"><i className="bi bi-google"></i></Nav.Link>
                        <Nav.Link href="#">Liên hệ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
