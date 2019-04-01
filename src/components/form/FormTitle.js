import React from 'react';
import { Translate } from 'react-localize-redux';

const FormTitle = ({titleId}) => {
  return (
    <div className="row">
      <div className="col s12">
        <h5 className="grey-text text-dark-3">
          <Translate id={titleId} />
        </h5>
      </div>
    </div>
  );
};

export default FormTitle;
