import { FormBuilder } from "react-reactive-form";

/**
 * closurized for customization purposes...
 * 
 * @param {*} formData to initialize the reactive form group
 */
// eslint-disable-next-line import/prefer-default-export
export const createFormGroup = (formData) => {
    const formGroup = FormBuilder.group(formData);
    return () => {
        formGroup.handleDefaultFormSubmit = (e) => {
            if(e) e.preventDefault();
            formGroup.submitted = true;
        };

        return formGroup;
    };
}
