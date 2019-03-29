import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';
import { deleteBookAction } from '../../store/actions/bookActions';

const BookDetails = ({ history, book, deleteBook }) => {
  const handleDelete = () => {
    deleteBook(book.id);
    history.push('/');
  };

  if (book) {
    return (
      <div className="container section">
        <div className="card horizontal grey darken-1 z-depth-0">
          <div className="card-stacked">
            <div className="card-content white-text text-darken-3">
              <span className="card-title">{book.title}</span>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <Translate id="labels.author" />
                    </th>
                    <td>{book.author}</td>
                  </tr>
                  <tr>
                    <th>
                      <Translate id="labels.genre" />
                    </th>
                    <td>{book.genre}</td>
                  </tr>
                  <tr>
                    <th>
                      <Translate id="labels.description" />
                    </th>
                    <td>{book.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-acion">
              <Link to={`/book/edit/${book.id}`} key={book.id}>
                <button className="waves-effect waves-light btn">
                  {' '}
                  <Translate id="edit" />
                </button>
              </Link>
              <button onClick={()=> handleDelete()} className="waves-effect waves-light btn">
                <Translate id="delete" />
              </button>
            </div>
          </div>
          <div className="card-image hide-on-small-only">
            <img
              src={book.image}
              alt="/img/Mage's_book_detail.png"
              className="responsive-img"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <h5 className="white-text">
        <Translate id="loading" data={{ item: <Translate id="book" /> }} />
      </h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const books = state.firestore.data.books;
  const book = books ? books[id] : null;
  return {book: {...book, id}};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: id => dispatch(deleteBookAction(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'books' }])
)(BookDetails);
