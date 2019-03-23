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
        default:
            break;
    }
    return state;
};