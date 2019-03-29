import React from 'react';
import { Translate } from 'react-localize-redux';

const SubmitButton = ({ disabled, translationId }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <button
          type="submit"
          disabled={disabled}
          className="btn grey darken-2 z-depth-0"
        >
          <Translate id={translationId ? translationId : 'submit'} />
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
