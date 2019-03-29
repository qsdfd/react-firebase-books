import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import BookList from '../books/BookList';

class Dashboard extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="container">
        <div className="row">
          <BookList books={books} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.firestore.ordered.books
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'books', orederBy: ['title', 'desc'] }])
)(Dashboard);
