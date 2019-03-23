import React, {Component} from 'react';
import {createBook} from '../../store/actions/bookActions';
import {connect} from 'react-redux';
import {FieldGroup, FieldControl, Validators, FormBuilder} from 'react-reactive-form';
import TextInput from '../formInputs/TextInput';
import TextareaInput from '../formInputs/TextareaInput';
import SubmitButton from '../formInputs/SubmitButton';

class CreateBook extends Component {

    bookForm = FormBuilder.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        description: ['', Validators.required],
        genre: ['', Validators.required],
        image: ['', Validators.required]
    });

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.bookForm.valid) {
            this.props.createBook(this.bookForm.value);
        }
    }

    render() {
        return (
            <div className="container">
                <FieldGroup
                    control={this.bookForm}
                    render={({invalid, value}) => (
                        <form onSubmit={e => this.handleSubmit(e, value)} className="white col s12">
                            <h5 className="grey-text text-dark-3">Create New Book</h5>
                            <FieldControl name="title" render={TextInput} meta={{label: 'Title'}}/>
                            <FieldControl name="author" render={TextInput} meta={{label: 'Author'}}/>
                            <FieldControl name="description" render={TextareaInput} meta={{label: 'Description'}}/>
                            <FieldControl name="image" render={TextInput} meta={{label: 'Image Link'}}/>
                            <FieldControl name="genre" render={TextInput} meta={{label: 'Genre'}}/>
                            <SubmitButton disabled={invalid} text="Create"/>
                        </form>
                    )}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: (book) => dispatch(createBook(book))
    };
};

export default connect(null, mapDispatchToProps)(CreateBook);