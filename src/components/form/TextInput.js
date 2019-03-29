import React from 'react';
import FormControl from './FormControl';

const TextInput = props => {
  return FormControl(props)((handler, name, className) => (
    <input {...handler()} id={name} type="text" className={className} />
  ));
};

export default TextInput;
