export const required = value => (value ? undefined : 'This field is required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'This field cannot be empty';

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'This field cannot start or end with whitespace';

export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Your password does not match';