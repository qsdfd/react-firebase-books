import React from 'react';
import { Translate } from 'react-localize-redux';
import fillPlaceholders from '../localize/PlaceholderFiller';

const ValidationMessages = ({ touched, errors }) => {
  return (
    <div>
      {touched && errors && (
        <div className="helper-text val-err">
          <Translate
            id={`validation.${Object.keys(errors)[0]}`}
            data={fillPlaceholders(errors)}
          />
        </div>
      )}
    </div>
  );
};

export default ValidationMessages;
