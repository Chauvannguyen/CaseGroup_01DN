import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";


const BookList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get('http://localhost:3000/books')
            .then((response) => setUsers(response.data))
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    setError('Không có kết nối Internet');
                }
            });
    }, []);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between mb-3">
                <h1>Books</h1>
                <button
                    className="btn btn-success"
                >
                    Add User
                </button>

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

            {users.length === 0 ? (
                <p>Không có dữ liệu.</p>
            ) : (
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th style={{width: '180px'}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td className="d-flex gap-lg-4 justify-content-center">
                                <button
                                    className="btn btn-primary"
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-info"
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
export default BookList;