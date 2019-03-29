export const createBookAction = book => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('books')
      .add({
        ...book,
        createdAt: new Date()
      })
      .then(() =>
        dispatch({
          type: 'CREATE_BOOK',
          book
        })
      )
      .catch(err =>
        dispatch({
          type: 'CREATE_BOOK_ERROR',
          err
        })
      );
  };
};

export const editBookAction = book => {
  return (dispatch, getSTate, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('books')
      .doc(book.id)
      .update(book)
      .then(() =>
        dispatch({
          type: 'EDIT_BOOK',
          book
        })
      )
      .catch(err =>
        dispatch({
          type: 'EDIT_BOOK_ERROR',
          err
        })
      );
  };
};

export const deleteBookAction = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('books')
      .doc(id)
      .delete()
      .then(() =>
        dispatch({
          type: 'DELETE_BOOK',
          id
        })
      )
      .catch(err =>
        dispatch({
          type: 'DELETE_BOOK_ERROR',
          err
        })
      );
  };
};
