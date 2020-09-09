export const itemQuantity = (oldArray, fromAction) => {
    let s = new Set(oldArray);
    return Array.from(s);
};