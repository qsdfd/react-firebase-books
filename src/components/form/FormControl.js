import React from 'react';
import ValidationMessages from './ValidationMessages';
import Label from './Label';

const FormControl = ({ handler, touched, errors, meta: { name }, initClassName }) => {
  const inputClass = `active ${initClassName} validate ${touched && errors ? 'invalid' : ''}`;
  const labelClass = `active ${touched && errors ? 'val-err' : ''}`;
  return (WrappedInput) => (
    <div className="row">
      <div className="input-field col s12">
        {WrappedInput(handler, name, inputClass)}
        <Label name={name} className={labelClass} />
        <ValidationMessages touched={touched} errors={errors} />
      </div>
    </div>
  );
};

export default FormControl;
