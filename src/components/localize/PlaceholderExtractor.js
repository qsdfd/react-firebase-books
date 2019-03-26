export default {
    extractPlaceholder(err) {
        return {
            minLength: (err && err.minLength ? err.minLength.requiredLength : '')
        };
    }
}