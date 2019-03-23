import React from 'react';

const TextareaInput = ({handler, touched, hasError, meta: {label}}) => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <label>{label}</label>
                <textarea type="text" className="materialize-textarea validate" {...handler()}/>
                {touched && hasError('required') && (
                    <span className="helper-text" data-error="" data-success="">
                        * {label} is required
                    </span>
                )}
            </div>
        </div>
    );
};

export default TextareaInput;
