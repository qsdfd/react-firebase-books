import React from 'react';
import { Link } from 'react-router-dom';
import BookSummary from '../books/BookSummary'

const BookList = ({books}) => {
    return (
        <div className="section">
            {books && books.map(book => (
                <Link to={`/book/${book.id}`} key={book.id}>
                    <BookSummary book={book}/>
                </Link>
            ))}
        </div>
    );
};

export default BookList;
