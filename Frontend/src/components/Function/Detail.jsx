import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookDetail = ({ show, setShow, book }) => {
    if (!book) return null;

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Chi Tiết Sách</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <img
                            src={book.image}
                            alt={book.title}
                            style={{ width: "250px", height: "350px", objectFit: "cover", marginBottom: "20px" }}
                        />
                        <h4>{book.title}</h4>
                        <h5>Tác giả: {book.author}</h5>
                        <p><strong>Thể loại:</strong> {book.genre}</p>
                        <p><strong>Năm xuất bản:</strong> {book.year}</p>
                        <p><strong>Đánh giá:</strong> {renderStars(book.rating)}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
};

// Render function for stars
const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <i
                key={i}
                className={`bi ${i <= rating ? "bi-star-fill" : "bi-star"} text-warning`}
            ></i>
        );
    }
    return stars;
};

export default BookDetail;
