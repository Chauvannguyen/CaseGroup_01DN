import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Footer from "../components/Footer/footer.jsx";
import Header from "../components/Header/header.jsx";
import SearchBar from "../components/SearchBook/SearchBar.jsx";
import AddBook from "../components/Function/AddBook.jsx";
import EditBook from "../components/Function/EditBook.jsx";
import Detail from "../components/Function/Detail.jsx";

const BookList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [error, setError] = useState(null);
    const [showAddBookModal, setShowAddBookModal] = useState(false);
    const [showEditBookModal, setShowEditBookModal] = useState(false);
    const [bookToEdit, setBookToEdit] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [bookToDetail, setBookToDetail] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3000/books')
            .then((response) => {
                setUsers(response.data);
                setFilteredUsers(response.data);
            })
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    setError('No Data');
                }
            });
    }, []);

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

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user =>
                user.title.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    const handleBookAdded = (newBook) => {
        const updatedUsers = [...users, newBook];
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setShowAddBookModal(false);
    };

    const handleBookUpdated = (updatedBook) => {
        const updatedUsers = users.map(user =>
            user.id === updatedBook.id ? updatedBook : user
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setShowEditBookModal(false);
    };

    const handleEditBook = (book) => {
        setBookToEdit(book);
        setShowEditBookModal(true);
    };

    const handleViewDetails = (book) => {
        setBookToDetail(book);
        setShowDetailModal(true);
    };

    return (
        <div className="container py-4">
            <Header />
            <h2>Library Admin</h2>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" onClick={() => setShowAddBookModal(true)}>
                    Thêm Sách
                </Button>
            </div>

            {/* Modal thêm sách */}
            <AddBook
                onBookAdded={handleBookAdded}
                show={showAddBookModal}
                setShow={setShowAddBookModal}
            />

            {/* Thanh tìm kiếm */}
            <SearchBar onSearch={handleSearch} />

            {/* Bảng danh sách sách */}
            <Table>
                <thead>
                <tr>
                    <th style={{ width: "1%" }}>ID</th>
                    <th style={{ width: "10%" }}>Tiêu đề</th>
                    <th style={{ width: "10%" }}>Tác giả</th>
                    <th style={{ width: "5%" }}>Thể loại</th>
                    <th style={{ width: "5%" }}>Năm</th>
                    <th style={{ width: "5%" }}>Ảnh</th>
                    <th style={{ width: "5%" }}>Đánh giá</th>
                    <th className="text-center" style={{ width: "3%" }}>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.genre}</td>
                        <td>{item.year}</td>
                        <td><img src={item.image} style={{ width: '80px', height: '100px' }} alt="book" /></td>
                        <td>{renderStars(item.rating)}</td>
                        <td className="d-flex gap-1">
                            <Button variant="warning" size="sm" onClick={() => handleEditBook(item)}>
                                Sửa
                            </Button>
                            <Button variant="danger" size="sm">Xóa</Button>
                            <Button variant="primary" size="sm" onClick={() => handleViewDetails(item)}>
                                Chi tiết
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <EditBook
                show={showEditBookModal}
                setShow={setShowEditBookModal}
                bookToEdit={bookToEdit}
                onBookUpdated={handleBookUpdated}
            />

            <Detail
                show={showDetailModal}
                setShow={setShowDetailModal}
                book={bookToDetail}
            />

            <Footer />
        </div>
    );
};

export default BookList;
