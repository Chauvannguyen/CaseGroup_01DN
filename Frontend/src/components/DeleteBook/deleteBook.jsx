import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const DeleteBook = ({ bookId, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:3000/books/${bookId}`)
            .then(() => {
                onDelete(bookId); // Callback để xóa sách khỏi state của parent component
                setShowModal(false); // Đóng modal sau khi xóa
            })
            .catch((error) => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <>
            <Button variant="danger" size="sm" onClick={() => setShowModal(true)}>
                Xóa
            </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn chắc chắn muốn xóa sách này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteBook;
