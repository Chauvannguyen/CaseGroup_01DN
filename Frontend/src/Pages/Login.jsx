import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && password === "admin") {
            setIsLoggedIn(true); // Đánh dấu là đã đăng nhập
            navigate("/Login/Home");   // Điều hướng tới trang Home
        } else {
            alert("Sai email hoặc mật khẩu!");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Card style={{ width: "400px", borderRadius: "15px" }} className="p-4 shadow-lg">
                <h3 className="text-center mb-3 text-primary">Đăng Nhập</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button type="submit" className="w-100">Đăng Nhập</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;
