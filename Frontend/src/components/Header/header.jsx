import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#">WEBSITE QUẢN LÝ SÁCH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center gap-2">

                        <Nav.Link href="#"><i className="bi bi-facebook"></i></Nav.Link>
                        <Nav.Link href="#"><i className="bi bi-google"></i></Nav.Link>
                        <Nav.Link href="#">Liên hệ</Nav.Link>
                        <Button variant="primary" onClick={() => navigate('/Home')}>Trang Quản Lý Sách</Button>
                        <Button variant="secondary" onClick={() => navigate('/')}>Trang Chủ</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
