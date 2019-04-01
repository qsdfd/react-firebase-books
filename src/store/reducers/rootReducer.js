import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  book: bookReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  localize: localizeReducer
});
