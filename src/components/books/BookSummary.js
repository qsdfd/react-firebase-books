import React from 'react';

const BookSummary = ({ book }) => (
  <div className="col s12 m3">
    <div className="card grey darken-1 z-depth-0">
      <div className="card-image">
        <img
          src={book.image}
          alt="img/Mage's_book_detail.png"
          className="responsive-img"
        />
      </div>
      <div className="card-content white-text text-darken-3">
        <span className="card-title">{book.title}</span>
        <p className="content">
          <i>{book.author}</i>
        </p>
      </div>
    </div>
  </div>
);

export default BookSummary;
