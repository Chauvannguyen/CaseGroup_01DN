import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="d-flex justify-content-center mb-3">
            <input
                type="text"
                placeholder="Tìm kiếm...!"
                className="w-75"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button>
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
};

export default SearchBar;
