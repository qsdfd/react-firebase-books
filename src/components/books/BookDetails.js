import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Translate } from 'react-localize-redux';

const BookDetails = props => {
  const { book } = props;
  console.log(book);
  if (book) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{book.title}</span>
            <div className="row">
              <div className="col s12 m7">
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
              <div className="col s12 m5">
                <img src={book.image} alt="/img/Mage's_book_detail.png" className="responsive-img"/>
              </div>
            </div>
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
  return { book };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'books' }])
)(BookDetails);
