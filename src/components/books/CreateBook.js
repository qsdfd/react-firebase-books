import React, { Component } from "react";
import { connect } from "react-redux";
import { Translate } from "react-localize-redux";
import {
    FieldControl,
    FieldGroup,
    FormBuilder,
    Validators
} from "react-reactive-form";

import SubmitButton from "../formInputs/SubmitButton";
import TextInput from "../formInputs/TextInput";
import TextareaInput from "../formInputs/TextareaInput";
import { createBook } from "../../store/actions/bookActions";

const CreateBook = () => {
    const bookForm = FormBuilder.group({
        title: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(500)]
        ],
        author: [
            "",
            [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
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
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (this.bookForm.valid) {
            this.props.createBook(this.bookForm.value);
        }
    };

    return (
        <div className="container">
            <FieldGroup
                control={bookForm}
                render={({ invalid, value }) => (
                    <form
                        onSubmit={e => handleSubmit(e, value)}
                        className="white col s12"
                    >
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
                        <SubmitButton disabled={invalid} text="Create" />
                    </form>
                )}
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
