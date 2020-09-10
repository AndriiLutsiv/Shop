import * as TYPES from './cartPreviewActionType';
export const cartPreviewAC = () => {
    return {
        type: TYPES.TOGGLE_CART_PREVIEW
    };
};

export const addItemAC = (item, itemPrice) => {
    return {
        type: TYPES.ADD_ITEM,
        item: item,
        itemPrice: itemPrice,

    };
};

export const addItemThunkCreator = (item, itemPrice, itemId) => {
    return (dispatch) => {
        localStorage.setItem(itemId, itemId);
        dispatch(addItemAC(item, itemPrice))
    }
}
export const removeItemAC = (itemId, itemPrice, quantity) => {
    return {
        type: TYPES.REMOVE_ITEM,
        itemId: itemId,
        itemPrice: itemPrice,
        quantity: quantity,
    }
}

export const removeItemThunkCreator = (itemId, itemPrice, quantity) => {
    return (dispatch) => {
        localStorage.removeItem(itemId);
        dispatch(removeItemAC(itemId, itemPrice, quantity));
    }
}

export const increaseAC = (itemId, itemPrice, quantity) => {
    return {
        type: TYPES.INCREASE_QUANTITY,
        itemId: itemId,
        itemPrice: itemPrice,
        quantity: quantity
    }
}

export const decreaseAC = (itemId, itemPrice, quantity) => {
    return {
        type: TYPES.DECREASE_QUANTITY,
        itemId: itemId,
        itemPrice: itemPrice,
        quantity: quantity
    }
}