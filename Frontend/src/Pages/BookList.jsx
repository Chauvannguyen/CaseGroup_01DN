import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Button, Container, Modal, Table} from "react-bootstrap";
import {Form} from "formik";
import Footer from "../components/Footer/footer.jsx";
import Header from "../components/Header/header.jsx";


const BookList = () => {
    const [users, setUsers] = useState([]);



    useEffect(() =>{
        axios
            .get('http://localhost:3000/books')
            .then((reponse) => setUsers(reponse.data))
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    setError('No Data')
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


    return (
        <div className="container py-4">
            <Header/>
            <h2>TRANG CHỦ</h2>
            <div className="d-flex justify-content-end">
                <Button variant="primary">Thêm Sách</Button>
            </div>
            <div className="d-flex justify-content-center mb-3 ">
                <input
                    type="text"
                    placeholder="Tìm kiếm...!"
                    className="w-75 "

                />
                <button>
                    <i className="bi bi-search"></i>
                </button>

            </div>
            <Table>
                <thead>
                <tr>
                    <th style={{width: "1%"}}>ID</th>
                    <th style={{width: "10%"}}>Tiêu đề</th>
                    <th style={{width: "10%"}}>Tác giả</th>
                    <th style={{width: "5%"}}>Thể loại</th>
                    <th style={{width: "5%"}}>Năm</th>
                    <th style={{width: "5%"}}>Ảnh</th>
                    <th style={{width: "5%"}}>Đánh giá</th>
                    <th className="text-center" style={{width: "3%"}}>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {users.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.genre}</td>
                        <td>{item.year}</td>
                        <td><img src={item.image} style={{width: '80px', height: '100px'}}/></td>
                        <td>
                            {renderStars(item.rating)}
                        </td>
                        <td className="d-flex gap-1">
                            <Button variant="warning" size="sm">Sửa</Button>
                            <Button variant="danger" size="sm">Xóa</Button>
                            <Button variant="primary" size="sm">Chi tiết</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Footer/>
        </div>
    );
};
export default BookList;