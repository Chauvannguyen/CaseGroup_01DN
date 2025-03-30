import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <h5>Bookstore</h5>
                        <p>Trang quản lý sách của bạn</p>
                    </Col>
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <h5>Liên hệ</h5>
                        <p>Email: NguyenCVPD10794@gmail.com</p>
                        <p>Phone: +84 399629872</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Theo dõi</h5>
                        <p>
                            <a href="#" className="text-light mx-2">Facebook</a> |
                            <a href="#" className="text-light mx-2"> Twitter</a> |
                            <a href="#" className="text-light mx-2"> Instagram</a>
                        </p>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Bookstore. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;