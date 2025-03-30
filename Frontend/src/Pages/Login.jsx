import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Card style={{ width: "400px", borderRadius: "15px" }} className="p-4 shadow-lg">
                <h3 className="text-center mb-3 text-primary">Đăng Nhập</h3>
                <p className="text-center text-muted">Chào mừng bạn trở lại! Vui lòng đăng nhập.</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="py-2"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="py-2"
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-between mb-3">
                        <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
                        <a href="#" className="text-primary text-decoration-none">Quên mật khẩu?</a>
                    </div>

                    <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
                        Đăng Nhập
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;
