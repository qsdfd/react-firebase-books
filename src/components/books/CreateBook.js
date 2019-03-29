import { connect } from 'react-redux';
import { Validators } from 'react-reactive-form';
import TextInput from '../form/TextInput';
import TextareaInput from '../form/TextareaInput';
import { createBook } from '../../store/actions/bookActions';
import { generateForm } from '../form/FormUtils';

const CreateBook = props => {
  return generateForm({
    fieldConfig: {
      controls: {
        title: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(500)
            ]
          },
          render: TextInput,
          meta: { name: 'title' }
        },
        author: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(500)
            ]
          },
          render: TextInput,
          meta: { name: 'author' }
        },
        description: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(2000)
            ]
          },
          render: TextareaInput,
          meta: { name: 'description' }
        },
        genre: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(200)
            ]
          },
          render: TextInput,
          meta: { name: 'genre' }
        },
        image: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(3000)
            ]
          },
          render: TextInput,
          meta: { name: 'image' }
        }
      }
    },
    valueHandler: props.createBook,
    redirectAfterSubmit: () => {
      props.history.push('/');
    },
    translation: {
      formTitleId: 'createNewBook',
      submitButtonTextId: 'create'
    }
  });
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => dispatch(createBook(book))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateBook);
