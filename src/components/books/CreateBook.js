import React from 'react';
import { connect } from 'react-redux';
import { createBookAction } from '../../store/actions/bookActions';
import { generateForm } from '../form/FormUtils';
import { getBookFieldConfig } from './BookFormConfig';
import { Translate } from 'react-localize-redux';

const CreateBook = ({ history, createBook }) => {
  const form = generateForm({
    formTitleId: 'createNewBook',
    fieldConfig: getBookFieldConfig(),
    performAction: newBook => {
      createBook(newBook);
    },
    redirectAfterSubmit: () => {
      history.push('/');
    },
    translation: {
      submitButtonTextId: 'create'
    }
  });

  return (
    <div className="container white">
      {form}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => dispatch(createBookAction(book))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateBook);
