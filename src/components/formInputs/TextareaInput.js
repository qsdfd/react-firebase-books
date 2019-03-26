import React from "react";
import { Translate } from "react-localize-redux";
import extractPlaceholder from '../localize/PlaceholderExtractor'

const TextareaInput = ({ handler, touched, errors, meta: { name } }) => {
    console.log(errors)
    return (
        <div className="row">
            <div className="input-field col s12">
                <textarea
                    id={name}
                    type="text"
                    className="materialize-textarea validate"
                    {...handler()}
                />
                <label htmlFor={name}>
                    <Translate id={`labels.${name}`} />
                </label>
                {touched && errors && (
                    <div className="helper-text val-err">
                        <Translate id={`validation.${Object.keys(errors)[0]}`} data={extractPlaceholder(errors)} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextareaInput;
