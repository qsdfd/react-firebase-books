import React from 'react';
import FormControl from './FormControl';

const TextInput = props =>
  FormControl(props)((handler, name, className, type) => (
    <input {...handler()} id={name} type={type} className={className} />
  ));

export default TextInput;
