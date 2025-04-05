import {useEffect, useState} from "react";
import axios from "axios";
import Footer from "../components/Footer/footer.jsx";
import Header from "../components/Header/header.jsx";
import {Button, Card} from "react-bootstrap";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3000/books')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    setError('No Data');
                }
            });
    }, []);

    return (
        <div className="container py-4">
            <Header/>
            <h2>The Book Haven</h2>
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-3 mb-4" key={book.id}>
                        <Card>
                            <Card.Img variant="top" src={book.image} style={{height: '300px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Tác giả: {book.author}</Card.Text>
                                <Button variant="primary"
                                >Xem chi tiết</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
