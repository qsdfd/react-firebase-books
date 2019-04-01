const fillPlaceholders = (err) => {
    return {
        minLength: (err && err.minLength ? err.minLength.requiredLength : ''),
        maxLength: (err && err.maxLength ? err.maxLength.requiredLength : '')
    };
};

export default fillPlaceholders;