import React from "react";
import { Translate } from "react-localize-redux";
import fillPlaceholders from "../localize/PlaceholderFiller";

const TextInput = ({ handler, touched, errors, meta: { name } }) => {
    const inputClass = `validate ${touched && errors ? "invalid" : ""}`;
    const labelClass = `active ${touched && errors ? "val-err" : ""}`;
    return (
        <div className="row">
            <div className="input-field col s12">
                <input {...handler()} id={name} type="text" className={inputClass} />
                <label htmlFor={name} className={labelClass}>
                    <Translate id={`formLabels.${name}`} />
                </label>
                {touched && errors && (
                    <div className="helper-text val-err">
                        <Translate
                            id={`validation.${Object.keys(errors)[0]}`}
                            data={fillPlaceholders(errors)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextInput;
