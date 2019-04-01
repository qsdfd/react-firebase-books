import React from 'react';

const HiddenInput = ({ handler, meta: { name } }) => {
  return <input {...handler()} type="hidden" id={name} />;
};

export default HiddenInput;
