import React from "react";
import { connect } from "react-redux";
import { Translate } from "react-localize-redux";
import { FormBuilder, FieldControl, FieldGroup, Validators } from "react-reactive-form";

import SubmitButton from "../form/SubmitButton";
import TextInput from "../form/TextInput";
import TextareaInput from "../form/TextareaInput";
import { createBook } from "../../store/actions/bookActions";
import { createFormGroup } from "../form/FormUtils";

const CreateBook = props => {
    const bookForm = createFormGroup({
        title: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(500)]
        ],
        author: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(500)]
        ],
        description: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]
        ],
        genre: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
        ],
        image: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(3000)]
        ]
    })();

    const handleSubmit = (e, valid, value) => {
        // bookForm.handleDefaultFormSubmit(e);
        e.preventDefault();
        console.log(value);
        if (valid) {
            // props.createBook(value);
            console.log("book created");
            // props.history.push("/");
        }
    };

    return (
        <div className="container">
            <FieldGroup
                control={bookForm}
                render={({ valid, value }) => {
                    return (
                        <form onSubmit={e => handleSubmit(e, valid, value)} className="white col s12">
                            <h5 className="grey-text text-dark-3">
                                <Translate id="createNewBook" />
                            </h5>
                            <FieldControl
                                name="title"
                                render={TextInput}
                                meta={{ name: "title" }}
                            />
                            <FieldControl
                                name="author"
                                render={TextInput}
                                meta={{ name: "author" }}
                            />
                            <FieldControl
                                name="description"
                                render={TextareaInput}
                                meta={{ name: "description" }}
                            />
                            <FieldControl
                                name="image"
                                render={TextInput}
                                meta={{ name: "image" }}
                            />
                            <FieldControl
                                name="genre"
                                render={TextInput}
                                meta={{ name: "genre" }}
                            />
                            <SubmitButton disabled={!valid} translationId="create" />
                        </form>
                    );
                }}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        createBook: book => dispatch(createBook(book))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CreateBook);
