import * as TYPES from './cartPreviewActionType';
export const cartPreviewAC = () => {
    return {
        type: TYPES.TOGGLE_CART_PREVIEW
    };
};

export const addItemAC = (item) => {
    return {
        type: TYPES.ADD_ITEM,
        item: item,
    };
};