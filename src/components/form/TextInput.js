import React from 'react';
import ValidationMessages from './ValidationMessages';
import Label from './Label';

const TextInput = ({ handler, touched, errors, meta: { name } }) => {
  const inputClass = `validate ${touched && errors ? 'invalid' : ''}`;
  const labelClass = `active ${touched && errors ? 'val-err' : ''}`;
  return (
    <div className="row">
      <div className="input-field col s12">
        <input {...handler()} id={name} type="text" className={inputClass} />
        <Label name={name} className={labelClass} />
        <ValidationMessages touched={touched} errors={errors} />
      </div>
    </div>
  );
};

export default TextInput;
