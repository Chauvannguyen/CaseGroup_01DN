import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const AddBook = ({ show, setShow, onBookAdded }) => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        year: "",
        image: "",
        rating: 1
    });

    const handleClose = () => setShow(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gửi yêu cầu POST tới JSON Server
        axios.post('http://localhost:3000/books', book)
            .then(response => {
                onBookAdded(book); // Thêm sách vào state React sau khi thêm vào DB
                handleClose(); // Đóng modal
            })
            .catch(error => {
                console.error("Đã xảy ra lỗi khi thêm sách:", error);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm Sách</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tiêu đề sách"
                            name="title"
                            value={book.title}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formAuthor">
                        <Form.Label>Tác giả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tác giả sách"
                            name="author"
                            value={book.author}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGenre">
                        <Form.Label>Thể loại</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập thể loại sách"
                            name="genre"
                            value={book.genre}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formYear">
                        <Form.Label>Năm xuất bản</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Nhập năm xuất bản"
                            name="year"
                            value={book.year}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                        <Form.Label>Ảnh bìa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập URL ảnh sách"
                            name="image"
                            value={book.image}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formRating">
                        <Form.Label>Đánh giá</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            max="5"
                            placeholder="Nhập đánh giá"
                            name="rating"
                            value={book.rating}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Thêm Sách
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddBook;
