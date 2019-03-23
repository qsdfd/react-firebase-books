import React from 'react';

const SubmitButton = ({disabled, text}) => {
    return (
        <button type="submit" disabled={disabled} className="btn grey darken-2 z-depth-0">
            {text}
        </button>
    );
};

export default SubmitButton;
