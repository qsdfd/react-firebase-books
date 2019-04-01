import React from 'react';
import { FormGenerator } from 'react-reactive-form';
import SubmitButton from './SubmitButton';
import FormTitle from './FormTitle';

export const generateForm = ({
  formTitleId,
  fieldConfig,
  performAction,
  redirectAfterSubmit,
  translation: { submitButtonTextId }
}) => {
  let form = {};

  const setForm = formGroup => {
    form = formGroup;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.valid) {
      if (performAction) performAction(form.value);
      if (redirectAfterSubmit) redirectAfterSubmit();
    }
  };

  fieldConfig.controls.$field_0 = {
    isStatic: false,
    render: ({ invalid }) => (
      <SubmitButton disabled={invalid} translationId={submitButtonTextId} />
    )
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      {formTitleId && (<FormTitle titleId={formTitleId} />)}
      <FormGenerator onMount={setForm} fieldConfig={fieldConfig} />
    </form>
  );
};
