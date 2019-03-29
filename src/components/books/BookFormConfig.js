import { Validators } from 'react-reactive-form';
import TextInput from '../form/TextInput';
import TextareaInput from '../form/TextareaInput';

export const getBookFieldConfig = (bookToUpdate = {}) => {
  return {
    controls: {
      title: {
        formState: bookToUpdate.title,
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
        formState: bookToUpdate.author,
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
        formState: bookToUpdate.description,
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
        formState: bookToUpdate.genre,
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
        formState: bookToUpdate.image,
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
  };
};
