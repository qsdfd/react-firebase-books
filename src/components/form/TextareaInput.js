import React from 'react';
import ValidationMessages from './ValidationMessages';
import Label from './Label';

const TextareaInput = ({ handler, touched, errors, meta: { name } }) => {
  const inputClass = `materialize-textarea validate ${
    touched && errors ? 'invalid' : ''
  }`;
  const labelClass = `active ${touched && errors ? 'val-err' : ''}`;
  return (
    <div className="row">
      <div className="input-field col s12">
        <textarea id={name} type="text" className={inputClass} {...handler()} />
        <Label name={name} className={labelClass} />
        <ValidationMessages touched={touched} errors={errors} />
      </div>
    </div>
  );
};

export default TextareaInput;