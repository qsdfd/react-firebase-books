import React from 'react';
import { Translate } from 'react-localize-redux';

const SubmitButton = ({ disabled, translationId }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <button
          type="submit"
          disabled={disabled}
          className="waves-effect waves-light btn"
        >
          <Translate id={translationId ? translationId : 'submit'} />
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
