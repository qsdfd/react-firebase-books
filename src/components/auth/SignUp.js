import React from 'react';
import { Validators } from 'react-reactive-form';
import { connect } from 'react-redux';
import { generateForm } from '../form/FormUtils';
import TextInput from '../form/TextInput';
import {
  EMAIL_MIN_LENGTH,
  EMAIL_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  LASTNAME_MIN_LENGTH,
  LASTNAME_MAX_LENGTH,
  FIRSTNAME_MIN_LENGTH,
  FIRSTNAME_MAX_LENGTH
} from '../../global/contstants';
import { signUpAction } from '../../store/actions/authActions';
import AuthError from './AuthError';

const SignUp = ({ signUp, auth, authError, history }) => {
  const form = generateForm({
    formTitleId: 'signUp',
    fieldConfig: {
      controls: {
        email: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(EMAIL_MIN_LENGTH),
              Validators.maxLength(EMAIL_MAX_LENGTH),
              Validators.email
            ]
          },
          render: TextInput,
          meta: { name: 'email', type: 'email' }
        },
        password: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(PASSWORD_MIN_LENGTH),
              Validators.maxLength(PASSWORD_MAX_LENGTH)
            ]
          },
          render: TextInput,
          meta: { name: 'password', type: 'password' }
        },
        lastName: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(LASTNAME_MIN_LENGTH),
              Validators.maxLength(LASTNAME_MAX_LENGTH)
            ]
          },
          render: TextInput,
          meta: { name: 'lastName' }
        },
        firstName: {
          options: {
            validators: [
              Validators.required,
              Validators.minLength(FIRSTNAME_MIN_LENGTH),
              Validators.maxLength(FIRSTNAME_MAX_LENGTH)
            ]
          },
          render: TextInput,
          meta: { name: 'firstName' }
        }
      }
    },
    performAction: formVal => {
      signUp(formVal);
    },
    redirectAfterSubmit: () => {
      if (auth.uid && !authError) history.push('/');
    },
    translation: {
      submitButtonTextId: 'signUp'
    }
  });

  return (
    <div className="container white">
      {form}
      <AuthError authError={authError}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUpAction(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
