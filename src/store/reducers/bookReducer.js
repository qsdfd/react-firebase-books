const initState = {
  books: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log('created book', action.book);
      break;
    case 'CREATE_BOOK_ERROR':
      console.log('create book error', action.error);
      break;
    case 'EDIT_BOOK':
      console.log('book edited', action.book);
      break;
    case 'EDIT_BOOK_ERROR':
      console.log('book edit error', action.book);
      break;
    case 'DELETE_BOOK':
      console.log('book delete', action.book);
      break;
    case 'DELETE_BOOK_ERROR':
      console.log('book delete error');
      break;
    default:
      break;
  }
  return state;
};
