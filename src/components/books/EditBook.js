import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Translate } from 'react-localize-redux';
import { generateForm } from '../form/FormUtils';
import { getBookFieldConfig } from './BookFormConfig';
import { editBookAction } from '../../store/actions/bookActions';

const EditBook = ({ history, book, editBook }) => {
  if (book) {
    const form = generateForm({
      formTitleId: 'editBook',
      fieldConfig: getBookFieldConfig(book),
      performAction: updatedBook => editBook({ ...book, ...updatedBook }),
      redirectAfterSubmit: () => {
        history.push(`/book/${book.id}`);
      },
      translation: {
        submitButtonTextId: 'save'
      }
    });

    return (
      <div className="container white">
        {form}
      </div>
    );
  }

  return (
    <div className="container white">
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
  return { book: { ...book, id } };
};

const mapDispatchToProps = dispatch => {
  return {
    editBook: book => dispatch(editBookAction(book))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: 'books' }])
)(EditBook);
