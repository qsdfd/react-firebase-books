import React from 'react';
import { FormGenerator } from 'react-reactive-form';
import { Translate } from 'react-localize-redux';
import SubmitButton from './SubmitButton';

export const generateForm = ({
  fieldConfig,
  performAction,
  redirectAfterSubmit,
  translation: { formTitleId, submitButtonTextId }
}) => {
  let form = {};

  const setForm = formGroup => {
    form = formGroup;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.valid) {
        redirectAfterSubmit();
        performAction(form.value);
    }
  };

  fieldConfig.controls.$field_0 = {
    isStatic: false,
    render: ({ invalid }) => (
      <SubmitButton disabled={invalid} translationId={submitButtonTextId} />
    )
  };

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="white col s12">
        <h5 className="grey-text text-dark-3">
          <Translate id={formTitleId} />
        </h5>
        <FormGenerator onMount={setForm} fieldConfig={fieldConfig} />
      </form>
    </div>
  );
};
