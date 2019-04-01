import React from 'react';
import { connect } from 'react-redux';
import { generateForm } from '../form/FormUtils';
import TextInput from '../form/TextInput';
import { signInAction } from '../../store/actions/authActions';

const SingIn = ({history, signIn}) => {
  const form = generateForm({
    formTitleId: 'signIn',
    fieldConfig: {
      controls: {
        email: {
          render: TextInput,
          meta: { name: 'email', type: 'email' }
        },
        password: {
          render: TextInput,
          meta: { name: 'password', type: 'password' }
        }
      }
    },
    performAction: formVal => signIn(formVal),
    redirectAfterSubmit: () => {
      history.push('/');
    },
    translation: {
      submitButtonTextId: 'signIn'
    }
  });

  return <div className="container white">{form}</div>;
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: cred => dispatch(signInAction(cred))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);