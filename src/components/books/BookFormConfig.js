import { Validators } from 'react-reactive-form';
import TextInput from '../form/TextInput';
import TextareaInput from '../form/TextareaInput';
import {
  TITLE_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  AUTHOR_MIN_LENGTH,
  AUTHOR_MAX_LENGTH,
  DESCRIPTION_MIN_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  GENRE_MIN_LENGTH,
  GENRE_MAX_LENGTH,
  IMAGE_MIN_LENGTH,
  IMAGE_MAX_LENGTH
} from '../../global/contstants';

export const getBookFieldConfig = (bookToUpdate = {}) => {
  return {
    controls: {
      title: {
        formState: bookToUpdate.title,
        options: {
          validators: [
            Validators.required,
            Validators.minLength(TITLE_MIN_LENGTH),
            Validators.maxLength(TITLE_MAX_LENGTH)
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
            Validators.minLength(AUTHOR_MIN_LENGTH),
            Validators.maxLength(AUTHOR_MAX_LENGTH)
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
            Validators.minLength(DESCRIPTION_MIN_LENGTH),
            Validators.maxLength(DESCRIPTION_MAX_LENGTH)
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
            Validators.minLength(GENRE_MIN_LENGTH),
            Validators.maxLength(GENRE_MAX_LENGTH)
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
            Validators.minLength(IMAGE_MIN_LENGTH),
            Validators.maxLength(IMAGE_MAX_LENGTH)
          ]
        },
        render: TextInput,
        meta: { name: 'image' }
      }
    }
  };
};
