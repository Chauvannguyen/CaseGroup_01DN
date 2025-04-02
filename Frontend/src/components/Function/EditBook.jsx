import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditBook = ({ show, setShow, bookToEdit, onBookUpdated }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title);
            setAuthor(bookToEdit.author);
            setGenre(bookToEdit.genre);
            setYear(bookToEdit.year);
            setRating(bookToEdit.rating);
        }
    }, [bookToEdit]);

    const handleSubmit = () => {
        const updatedBook = {
            ...bookToEdit,
            title,
            author,
            genre,
            year,
            rating,
        };
        onBookUpdated(updatedBook);
        setShow(false); // Đóng modal sau khi cập nhật
    };

    if (!bookToEdit) {
        return null;
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Sửa thông tin sách</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tác giả</Form.Label>
                        <Form.Control
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Thể loại</Form.Label>
                        <Form.Control
                            type="text"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Năm</Form.Label>
                        <Form.Control
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Đánh giá</Form.Label>
                        <Form.Control
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            min={0}
                            max={5}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Lưu thay đổi
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditBook;
