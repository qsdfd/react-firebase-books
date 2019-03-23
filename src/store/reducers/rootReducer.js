import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import {combineReducers} from 'redux';
import bookReducer from './bookReducer';

export default combineReducers({
    book: bookReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});