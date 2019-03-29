import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

export default combineReducers({
  book: bookReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  localize: localizeReducer
});
