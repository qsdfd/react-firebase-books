const fillPlaceholders = (err) => {
    return {
        minLength: (err && err.minLength ? err.minLength.requiredLength : '')
    };
};

export default fillPlaceholders;