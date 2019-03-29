import React from 'react';
import FormControl from './FormControl';

const TextareaInput = props => {
  return FormControl({ ...props, initClassName: 'materialize-textarea' })(
    (handler, name, inputClass) => (
      <textarea id={name} type="text" className={inputClass} {...handler()} />
    )
  );
};

export default TextareaInput;

