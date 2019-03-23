import React from 'react';
import {Row, Input} from 'react-materialize';


const TextInput = ({handler, touched, hasError, errors, meta: {label}}) => {
    console.log(errors)
    return (
        <div className="row">
            <div className="input-field col s12">
                <label>{label}</label>
                <input type="text" className="validate" {...handler()}/>
                {touched && hasError('required') && (
                    <span className="helper-text" data-error="" data-success="">
                        * {label} is required
                    </span>
                )}
            </div>
        </div>
    );
};

export default TextInput;
