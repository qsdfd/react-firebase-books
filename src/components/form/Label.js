import React from 'react';
import { Translate } from 'react-localize-redux';


const Label = ({ name, className }) => (
  <label htmlFor={name} className={className}>
    <Translate id={`formLabels.${name}`} />
  </label>
);

export default Label;
