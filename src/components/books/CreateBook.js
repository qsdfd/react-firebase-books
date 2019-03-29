import { connect } from 'react-redux';
import M from 'materialize-css';
import { createBookAction } from '../../store/actions/bookActions';
import { generateForm } from '../form/FormUtils';
import { getBookFieldConfig } from './BookFormConfig';

const CreateBook = ({history, createBook}) => {
  return generateForm({
    fieldConfig: getBookFieldConfig(),
    performAction: newBook => {
      createBook(newBook);
      M.toast({html: 'I am a toast!'})
    },
    redirectAfterSubmit: () => {
      history.push('/');
    },
    translation: {
      formTitleId: 'createNewBook',
      submitButtonTextId: 'create'
    }
  });
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
