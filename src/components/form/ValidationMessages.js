import React from 'react';
import { Translate } from 'react-localize-redux';
import fillPlaceholders from '../localize/PlaceholderFiller';

const ValidationMessages = ({ touched, errors }) =>
  touched &&
  errors && (
    <div className="helper-text val-err">
      <Translate
        id={`validation.${Object.keys(errors)[0]}`}
        data={fillPlaceholders(errors)}
      />
    </div>
  );

export default ValidationMessages;
